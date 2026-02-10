 "use client";
import React, { useState, useRef, useEffect } from "react";
// import { mong } from "../[slug]/page";
import { bt } from "../[slug]/page";
import { useSearchParams } from "next/navigation";
import "../globals.css";
// import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { dev } from "../[slug]/page";
// import { set } from "mongoose";
import { mong } from "../[slug]/page";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function Page(){
  return(<Suspense>
      <Dashboard/>
  </Suspense>)
}
 const Dashboard=()=>{
  const{data:session} = useSession();
  const searchParams = useSearchParams();
  const item = searchParams.get("item");

  const [first, setFirst] = useState({ url: "", fold: "" });
  const [fi, setFi] = useState([]);
  const [a, b] = useState([]);
  const [s, t] = useState([]);
  const [date, setdate] = useState([]);
 const[loader,setloader] = useState("");
  const d = useRef(0);

  const hand = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.value });
  };

  const inp = () => {
    setFi([...fi, { url: "" }]);
   };
  const han = (index, e) => {
    const updated = [...fi];
    updated[index][e.target.name] = e.target.value;
    setFi(updated)
    console.log(index);
  };
console.log(fi)
  const save = async () => {
    if(first.url ==="" || first.fold===""){
      return;
    }
   console.log(fi)
    const allUrls = [first.url, ...fi.map((item,i) => item.url)];
    console.log(allUrls)
     let o = await mong(allUrls, first.fold, first.fold);
    gt();
    setFirst({url:'',fold:""})
    setFi([])
   };
  const del = (e, i) => {
    let y = [...fi];
    y.splice(i, 1);
    setFi(y);
  };

  useEffect(() => {
    setFirst({ fold: item });
  }, [item]);

const gt = async () => {
  console.log("loading....")
   try{
      setloader("Please Wait....")
let y = await bt(session?.user?.email);
console.log(y,y.length)
if(y.sucess){
    setloader("");
   b(y.allUrls);
      t(y.all);
      setdate(y.data)
      console.log(y);
 }else{
  setloader("Not Found....")
}
      
  }catch(err){
    setloader("Please Check Your Network....")
  }
       
    };
const dl =async(e,i)=>{
  console.log(a[i])
  let  y = await dev(a[i])
  gt()

}
  useEffect(() => { 
    gt();
  }, [session?.user?.email]);

console.log("i am s",s,a,date)
  return (
    <>
     
      <div className="sg1">
            <img className="video" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/68d34493e49c83c3eb307a4a_08Enhance-ezgif.com-optimize.gif" alt="" />

        <div className="sd8">
          <h1>Everything you are in one, simple link in bio</h1>
          <p className="v5">
            Join 70M+ people using Linktree for their link in bio. One link to help
            you share everything you create, curate and sell from your Instagram,
            TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="k1">
            <div>
                {session &&<button className="a0"><Link href={"/form"} style={{textDecoration:'none',color:'black'}} class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/login" })}>Create Your Link Tree</Link></button>}
             </div>
          </div>
 
        </div>
        <div className="we1">
        </div>
      </div>
       {/* <div className="loader">Loader....</div> */}
           <h2 className="q8">Your Folders</h2>
      {!loader=="" && <><div className="loader">{loader}</div></>}

       {a && s && date && <div className="p1">
 
              {a.map((item, i) => (
              <> 
                <div className="gk1"> 
                <div><img style={{borderRadius:'50px',padding:'10px'}} width={"90px"} height={"90px"} src={session?.user?.image} alt="" /></div>
                              <h1>welcome! Ankur Goyal</h1>
 <div>{date[i].content}</div>
              <div className="d9" key={i}>
                <Link className="ft" href={`https://link-tree-wine-phi.vercel.app/${s[i]}`}>{item}</Link>
              </div>
                <div className="date">created at : {new Date(date[i].createdAt).toLocaleString()}</div>

              <div><button className="ru2" onClick={(e)=>dl(e,i)}><Player className="ru3"   autoplay loop src="/del.json" /></button></div>
 
              </div>
{/* {date[i]?.createdAt && (<div>created at : {new Date(date[i].createdAt).toLocaleString()}</div>
)} */}
 
              </>
            ))}
          </div>}
                   {/* <div style={{ color:'white',width:'100%',backgroundColor:'red',marginTop:"-100px"}} onClick={signOut({callbackUrl:'/'})}>logout</div> */}

    </>
    );
  }


