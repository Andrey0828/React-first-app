import './navbar.css'
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import cart from "../../assets/images/cart.svg";
import {useState, useEffect} from "react"

function NavBar() {
    
    const [isScrolled, setIsScrolled] = useState(false)
    
    const handleScroll = () => {
        if (window.scrollY > 60) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
    })
    
    return (
        <>
            <nav className={`nav ${isScrolled ? 'nav__bg' : ''}`}>
                <div className="container nav__content">
                    <a href="" className="logo"><img src={logo} alt="LOGO"/></a>
                    <div className="nav__search">
                        <div className="nav__search-shop">
                            <a href="" className="logo"><img src={search} alt="LOGO"/></a>
                            <a href="" className="logo"><img src={cart} alt="LOGO"/></a>
                        </div>
                        <div className="nav__search-auth">
                            <a href="" className="nav__search-auth-btn">Sign Up</a>
                            <a href="" className="nav__search-auth-btn">Sign In</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar