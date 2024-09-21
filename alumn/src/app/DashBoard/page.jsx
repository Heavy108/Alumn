"use client";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";


export default function Profile() {
    const router = useRouter()
    // const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await fetch('../api/logout',
                {method:"POST"}
            )
            router.push('/AdminLogin')
        } catch (error) {
            console.log(error.message);
            
        }
    }

   
    return (
        <div >
            <h1>Profile</h1>
            <hr />
            <p>from DashBoard</p>
           
        <hr />
        <button
        onClick={logout}
        >Logout</button>

        


            </div>
    )
}