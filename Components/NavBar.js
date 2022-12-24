import React from "react"
import { Link } from "react-router-dom";
// import "./NavBar.css"
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Link to="/" id="home">Home</Link>
                    <Link to="/user" id="user">User</Link>
                    <Link to="/product" id="product">Product</Link>
                    <Link to="/adduser" id="add-user">Add_user</Link>
                    <Link to="/addproduct" id="add-prodcuct">Add_product</Link>
                </div>

            </nav>
        </div>
    )
}
export default NavBar