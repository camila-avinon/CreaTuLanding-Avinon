import {CartWidget} from '../index'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between shadow-lg">
            <Link to='/' >
                <img src={logo} alt="" className="logo"/>
            </Link>
            <div className="flex space-x-5 content-center m-0">
                <NavLink to='/categoria/mates' className="text-lg font-medium">Mates</NavLink>
                <NavLink to='/categoria/termos' className="text-lg font-medium">Termos</NavLink>
                <NavLink to='/categoria/sets' className="text-lg font-medium">Sets de Mate</NavLink>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar