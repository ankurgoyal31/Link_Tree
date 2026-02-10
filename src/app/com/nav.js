"use client";
import Link from "next/link";
import { useState } from "react";
  import { useSession } from "next-auth/react";
  import { signOut } from "next-auth/react";
import "./s.css"
export default function Navbar() {
  const{data:session} = useSession();
  const [open, setOpen] = useState(false);
    return (
    <nav className="nav">
      <div className="nav-inner">
        
        {/* LOGO */}
        <div className="logo">
          <Link href="/">Link<span>Bio</span></Link>
        </div>

        {/* MENU */}
        <ul className={`menu ${open ? "open" : ""}`}>
          
         {session && <><li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/form">Create</Link></li> 
             <div className="detail"> 
              <span><img style={{width:'30px',height:'30px',borderRadius:'50px'}} src={session?.user?.image} alt="" /></span>
               <span>{session?.user?.email}</span>
          </div></>}
        {session &&<span class="nav-item23"><div class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/" })}>SignOut</div></span>}
        {!session &&<span class="nav-item23"><div class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/login" })}>SignIn</div></span>}

        </ul>

        {/* ACTION */}
        {/* <div className="nav-actions">
          <Link href="/login" className="login-btn">{session?.user?.email}</Link>
          <Link href="/signup" className="cta-btn">Get Started</Link>
        </div> */}

        {/* MOBILE */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </nav>
  );
}
