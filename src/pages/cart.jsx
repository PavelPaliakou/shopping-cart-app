import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cart } = useSelector((state) => state);

    useEffect(() => {
        setTotalPrice(cart.reduce((account, current) => (
            account + current.price
        ), 0));

    }, [cart]);

    return (
        <div className="flex justify-center max-w-6xl mx-auto min-h-[80vh]">
            {
                cart && cart.length
                    ? <>
                        <div className="flex flex-col justify-center items-center p-3 w-3/4">
                            {
                                cart.map((element, index) => (
                                    <CartTile key={index} product={element} />
                                ))
                            }
                        </div>

                        <div className="w-1/5">
                            <div className="flex flex-col justify-center p-5 space-y-5 mt-14">
                                <h1 className="font-bold text-lg text-red-800">
                                    Your cart summary
                                </h1>
                                <p>
                                    <span className="text-gey-800 font-bold">
                                        Total items:
                                    </span>
                                    <span> {cart.length}</span>
                                </p>
                                <p>
                                    <span className="text-gey-800 font-bold">
                                        Total amount:
                                    </span>
                                    <span> {totalPrice}</span>
                                </p>
                            </div>
                        </div>
                    </>

                    : <div className="flex flex-col items-center justify-center">
                        <h1 className="text-grey-800 font-bold text-xl mb-2">
                            Your cart is empty
                        </h1>
                        <Link to={"/"}>
                            <button className="bg-red-950 hover:bg-red-800 text-white rounded-lg font-bold p-4">Shop now</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

