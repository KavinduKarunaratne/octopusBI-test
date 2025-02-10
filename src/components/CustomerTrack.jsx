import CustomerSidbar from "./CustomerSidebar";
import './CustomerTrack.css'
function CustomerTrack () {
    return (
        <>
            <CustomerSidbar />
            <div className="container">
                <article className="card">
                    <header className="card-header"> My Orders / Tracking </header>
                    <div className="card-body">
                    <h6 style={{marginLeft: "12px", fontSize: "14px"}}>Order ID: OD45345345435</h6>
                    <article className="card">
                        <div className="card-body">
                        <div className="col">
                            {" "}
                            <strong>Estimated Delivery time:</strong> <br />
                            10 Feb 2025{" "}
                        </div>
                        <div className="col">
                            {" "}
                            <strong>Shipping BY:</strong> <br /> PIZZA SHOP |{" "}
                            <i className="fa fa-phone" /> 0115527527{" "}
                        </div>
                        <div className="col">
                            {" "}
                            <strong>Status:</strong> <br /> Picked by the courier{" "}
                        </div>
                        </div>
                    </article>
                    <div className="track">
                        <div className="step active">
                        {" "}
                        <span className="icon">
                            {" "}
                            <i className="fa fa-check" />{" "}
                        </span>{" "}
                        <span className="text">Order confirmed</span>{" "}
                        </div>
                        <div className="step active">
                        {" "}
                        <span className="icon">
                            {" "}
                            <i className="fa fa-user" />{" "}
                        </span>{" "}
                        <span className="text"> Picked by courier</span>{" "}
                        </div>
                        <div className="step">
                        {" "}
                        <span className="icon">
                            {" "}
                            <i className="fa fa-truck" />{" "}
                        </span>{" "}
                        <span className="text"> On the way </span>{" "}
                        </div>
                        <div className="step">
                        {" "}
                        <span className="icon">
                            {" "}
                            <i className="fa fa-box" />{" "}
                        </span>{" "}
                        <span className="text">Ready for pickup</span>{" "}
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default CustomerTrack;