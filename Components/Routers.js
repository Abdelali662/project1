import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Users from './Users';
import React from 'react'
import Product from './Product';
import AddProduct from './AddProduct';
import AddUsers from './AddUsers';

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/user' element={<Users />} />
                <Route path='/product' element={<Product />} />
                <Route path='/adduser' element={<AddUsers />} />
                <Route path='/addproduct' element={<AddProduct />} />
            </Routes>
        </div>
    )
}

export default Routers