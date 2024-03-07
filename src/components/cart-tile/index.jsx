import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ product }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id));
    }
    return (
        <div className="flex items-center justify-between p-5 bg-red-100 my-2 rounded-xl w-full border-2 border-red-800">

            <div className="flex p-3 w-full">
                <div className="flex justify-center w-1/5">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="h-28 rounded-lg"
                    />
                </div>
                <div className="w-4/5 ml-10 self-start space-y-5">
                    <h1 className="text-xl font-bold">{product?.title}</h1>
                    <p className="font-extrabold">{product?.price} $</p>
                </div>
            </div>

            <button
                onClick={handleRemoveFromCart}
                className="bg-red-950 hover:bg-red-800 text-white rounded-lg font-bold p-4"
            >
                Remove
            </button>
        </div>
    )
}