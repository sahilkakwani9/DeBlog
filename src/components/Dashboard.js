import { useEffect, useState } from "react";
import getAllBlogs from "../utils/getAllBlogs";
import Container from "./Container";
import Navbar from "./Navbar";
export default function Dashboard() {

    return (
        <div className="flex flex-col w-screen h-screen Scroll overflow-y-scroll">
            <Navbar />
            <Container />
        </div>
    );
}
