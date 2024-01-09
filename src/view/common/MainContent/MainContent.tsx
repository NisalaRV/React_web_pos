import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "@mui/icons-material";


export class MainContent extends Component {
    render() {
        return (
            <div className="mx-auto">
                <Routes>
                    <Route path="/home" Component={Home}></Route>
                </Routes>
            </div>
        );
    }
}
