"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";
export default function Page() {
    const Router = useRouter();
  const { data: session,status } = useSession();
 const[show,setshow]= useState(false)
  useEffect(() => {
    if(status=="authenticated"){
setshow(true);
setTimeout(() => {
    setshow(false);
    Router.push("/")
  }, 2000);
    }
  }, [status]);
  

  return (
    <> 
 {show && <>  <div style={styles.container}>
        <div style={styles.card}>
          <img
            src={session?.user?.image}
            alt="profile"
            style={styles.avatar}
          />
          <h2 style={styles.title}>Welcome</h2>
          <p style={styles.name}>{session.user?.name}</p>
          <p style={styles.email}>{session.user?.email}</p>
        </div>
      </div></>}
      {!session &&
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <p style={styles.subtitle}>Choose a provider to continue</p>

        <button
          style={{ ...styles.btn, background: "#fff", color: "#000" }}
         onClick={() => signIn("google")}
        >
          Continue with Google
        </button>

        <button
          style={{ ...styles.btn, background: "#24292e" }}
            onClick={() => signIn("github")}
        >
          Continue with GitHub
        </button>
      </div>
     </div>}
     </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    padding: "30px",
    borderRadius: "14px",
    background: "#111",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,.4)",
  },
  title: {
    fontSize: "26px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "25px",
  },
  btn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "600",
  },
  email: {
    fontSize: "14px",
    opacity: 0.7,
  },
};
