import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile';

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                setLoading(true);
                if (!response.ok) {
                    throw new Error(`Error! Response status: ${response.status}`);
                }

                return response.json()
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <div>
                {
                    loading
                        ? <div className="min-h-screen w-full flex justify-center items-center">
                            <Circles
                                height="120"
                                width="120"
                                color="rgb(100 10 10)"
                                visible={true}
                            />
                        </div>
                        : <div className="min-h-[80vh] max-w-6xl mx-auto p-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {
                                products && products.length
                                    ? products.map((element, index) =>
                                        <ProductTile key={index} product={element} />
                                    )
                                    : null
                            }
                        </div>
                }
            </div>
        </div>
    )
}