import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="flex justify-between items-center h-20 mx-auto max-w-6xl">
                <Link to={"/"}>
                    <div className="ml-5">
                        <p className="font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                            React Redux Shopping Cart
                        </p>
                    </div>
                </Link>
                <div className="flex items-center mr-8 space-x-6 text-gray-800 font-semibold">
                    <Link to={"/"}>
                        <p className="cursor-pointer">
                            Home
                        </p>
                    </Link>
                    <Link to={"/cart"}>
                        <p className="cursor-pointer">
                            Cart
                        </p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}