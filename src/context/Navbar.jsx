"use client";
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/assets/logo.png";
import { items } from "@/context/itemProvider";

const Navbar = () => {
    const { plan, savedPlan } = useContext(items);

    return (
        <header>
            <nav className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/">Workouts</Link></li>
                            <li><Link href="/PlanPage">My Plan</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="Logo" />
                        <span className="btn btn-ghost text-xl">FITLOG</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><Link href="/">Workouts</Link></li>
                        <li><Link href="/PlanPage">My Plan</Link></li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-2">
                    <Link href="/PlanPage" className="btn btn-sm bg-[#15171d] text-white border border-zinc-800">
                        Plan <span className="bg-[#ccff00] text-black px-1.5 py-0.5 rounded-full font-bold text-[10px]">{plan?.length || 0}</span>
                    </Link>
                    <Link href="/PlanPage" className="btn btn-sm bg-[#15171d] text-white border border-zinc-800">
                        Saved <span className="bg-[#22252e] text-white px-1.5 py-0.5 rounded-full font-bold text-[10px]">{savedPlan?.length || 0}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;