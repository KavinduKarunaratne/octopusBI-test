import { useNavigate } from "react-router-dom";
import CustomerCart from "./CustomerCart";

function CustomerSidbar () {

    const navigate = useNavigate()

    const navCustomer = () => {
        navigate('/customer')
    }

    const navCart = () => {
        navigate('/cart')
    }

    const navTrack = () => {
        navigate('/track')
    }

    return(
        <>
            {/* Sidebar/menu */}
            <nav
                className="w3-sidebar w3-collapse w3-white w3-animate-left"
                style={{ zIndex: 3, width: 300 }}
                id="mySidebar"
            >
                <br />
                <div className="w3-container">
                <a
                    href="#"
                    onclick="w3_close()"
                    className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
                    title="close menu"
                >
                    <i className="fa fa-remove" />
                </a>
                <img
                    src="/src/assets/pizza.png"
                    style={{ width: "45%", borderRadius: "100px"}}
                    className="w3-round"
                />
                <br />
                <br />
                <h4>
                    <b>PIZZA SHOP</b>
                </h4>
                </div>
                <div className="w3-bar-block">
                <a
                    href="#"
                    onClick={navCustomer}
                    onclick="w3_close()"
                    className="w3-bar-item w3-button w3-padding w3-text-red"
                >
                    <i className="fa fa-th-large fa-fw w3-margin-right" />
                    ITEMS
                </a>
                <a
                    href="#"
                    onClick={navCart}
                    onclick="w3_close()"
                    className="w3-bar-item w3-button w3-padding"
                >
                    <i className="fa fa-user fa-fw w3-margin-right" />
                    CART
                </a>
                <a
                    href="#"
                    onClick={navTrack}
                    onclick="w3_close()"
                    className="w3-bar-item w3-button w3-padding"
                >
                    <i className="fa fa-envelope fa-fw w3-margin-right" />
                    TRACK
                </a>
                </div>
            </nav>
        </>
    )
}

export default CustomerSidbar;