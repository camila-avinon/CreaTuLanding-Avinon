import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between shadow-lg">
            <Link to='/' className="logo">Mateando</Link>
            <div className="flex space-x-5">
                <NavLink to='/categoria/mates' className="text-lg font-medium">Mates</NavLink>
                <NavLink to='/categoria/termos' className="text-lg font-medium">Termos</NavLink>
                <NavLink to='/categoria/sets' className="text-lg font-medium">Sets de Mate</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default Navbar