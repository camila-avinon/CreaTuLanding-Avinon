import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="p-3 flex justify-between align-middle">
            <h3 className="text-3xl font-semibold">Mateando</h3>
            <ul className="flex space-x-5">
                <li><a href="">Mates</a></li>
                <li><a href="">Termos</a></li>
                <li><a href="">Sets de Mate</a></li>
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default Navbar