import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Customer from "../../pages/Customer/Customer";
import Item from "../../pages/Item/Item";
import Order from "../../pages/Order/Order";
import OrderDetails from "../../pages/OrderDetails/OrderDetails";



export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/home" Component={Home}></Route>
                    <Route path="/customer" Component={Customer}></Route>
                    <Route path="/item" Component={Item}></Route>
                    <Route path="/place" Component={Order}></Route>
                    <Route path="/orderDetail" Component={OrderDetails}></Route>
                </Routes>
            </div>
        );
    }
}
