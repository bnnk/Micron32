import React from "react";
import TodoForm from "./todo/form";
import TodoAllView from "./todo/view";

export default function TodoView(){
    return <>
        <TodoForm />
        <br />
        <TodoAllView />
    </>
}