function CustomerItems () {
    return (
        <>
            {/* Overlay effect when opening sidebar on small screens */}
            <div
                className="w3-overlay w3-hide-large w3-animate-opacity"
                onclick="w3_close()"
                style={{ cursor: "pointer" }}
                title="close side menu"
                id="myOverlay"
            />
            {/* !PAGE CONTENT! */}
            <div className="w3-main" style={{ marginLeft: 300 }}>
                {/* Header */}
                <header id="portfolio">
                <a href="#">
                    <img
                    src="/w3images/avatar_g2.jpg"
                    style={{ width: 65 }}
                    className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
                    />
                </a>
                <span
                    className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
                    onclick="w3_open()"
                >
                    <i className="fa fa-bars" />
                </span>
                <div className="w3-container">
                    <h1>
                    <b>ITEMS</b>
                    </h1>
                    <div className="w3-section w3-bottombar w3-padding-16">
                    <span className="w3-margin-right">Filter:</span>
                    <button className="w3-button w3-black">ALL</button>
                    <button className="w3-button w3-white">
                        
                        Signature
                    </button>
                    <button className="w3-button w3-white w3-hide-small">
                        
                        Vegetarian
                    </button>
                    <button className="w3-button w3-white w3-hide-small">
                        
                        Limited Time
                    </button>
                    </div>
                </div>
                </header>
                {/* First Photo Grid*/}
                <div className="w3-row-padding">
                <div className="w3-third w3-container w3-margin-bottom">
                    <img
                    src="/src/assets/pizza 1.jpg"
                    alt="Pizza 1"
                    style={{ width: "500px", height: "300px" }}
                    className="w3-hover-opacity"
                    />
                    <div className="w3-container w3-white">
                    <p>
                        <b style={{ marginRight: "340px"}}>Lorem Ipsum</b>
                        <img src="/src/assets/cart-shopping-solid.svg" alt="cart shopping" style={{width: "30px"}} />
                    </p>
                    <p>
                        Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                        condimentum, porta lectus vitae, ultricies congue gravida diam non
                        fringilla.
                    </p>
                    </div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom">
                    <img
                    src="/src/assets/pizza 2.jpg"
                    alt="Pizza 2"
                    style={{ width: "500px", height: "300px" }}
                    className="w3-hover-opacity"
                    />
                    <div className="w3-container w3-white">
                    <p>
                        <b style={{ marginRight: "340px"}}>Lorem Ipsum</b>
                        <img src="/src/assets/cart-shopping-solid.svg" alt="cart shopping" style={{width: "30px"}} />
                    </p>
                    <p>
                        Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                        condimentum, porta lectus vitae, ultricies congue gravida diam non
                        fringilla.
                    </p>
                    </div>
                </div>
                
                </div>
            </div>
        </>
    )
}

export default CustomerItems;