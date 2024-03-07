import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ product }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id));
    }
    return (
        <div className="flex items-center justify-between p-5 bg-red-500 my-2 rounded-xl">

            <div className="flex p-3">
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="h-28 rounded-lg"
                />
                <div className="ml-10 self-start space-y-5">
                    <h1 className="text-xl text-white font-bold">{product?.title}</h1>
                    <p className="text-white font-extrabold">{product?.price}</p>
                </div>
            </div>
                <button
                    onClick={handleRemoveFromCart}
                    className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
                >
                    Remove
                </button>
        </div>
    )
}