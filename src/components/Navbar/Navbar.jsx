import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logoo.svg";

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between shadow-lg">
            <img src={logo} alt="logo" className="logo"/>
            <ul className="flex space-x-5">
                <li><a href="" className="text-lg font-medium">Mates</a></li>
                <li><a href="" className="text-lg font-medium">Termos</a></li>
                <li><a href="" className="text-lg font-medium">Sets de Mate</a></li>
            </ul>
            <CartWidget/>
        </nav>

        






    );
}

export default Navbar