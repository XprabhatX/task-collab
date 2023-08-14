import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";


export default function Layout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}