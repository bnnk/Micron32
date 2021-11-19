import { Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import { Satellite } from "@material-ui/icons";
import TodoView from "./TodoView";

function Debug(props){
    console.log(props)
    const loc = useLocation()
    window.loc = loc
    return <Typography>Hello WORLD!:{loc.pathname}</Typography>
}

function Welcome(props){
    return <>
        <Typography variant="h4">Biennuve!</Typography>
        <Typography variant="h5">Welcome!</Typography>
    </>
}

var Others = TodoView

const routes = [
    { path: "/", exact: true, label: "Welcome", element: <Welcome />, icon: <Satellite /> },
    { path: "/hello/a", label: "Todo View", element: <Others /> },
    { path: "/bye", label: "Bye", element: <Debug />, hide: true }
];
export default routes;