 "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { mong } from "./[slug]/page";
// import { bt } from "./[slug]/page";
// import { useSearchParams } from "next/navigation";
import "./globals.css";
// import { Player } from "@lottiefiles/react-lottie-player";
import { useSession } from "next-auth/react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

// import { dev } from "./[slug]/page";
// import { dev } from "./[slug]/page";
// import { dev } from "./[slug]/page";
// import { set } from "mongoose";
export default function Home() {
  const{data:session} = useSession();
  // const searchParams = useSearchParams();
  // const item = searchParams.get("item");

//   const [first, setFirst] = useState({ url: "", fold: "" });
//   const [fi, setFi] = useState([]);
//   const [a, b] = useState([]);
//   const [s, t] = useState([]);

//   const d = useRef(0);

//   const hand = (e) => {
//     setFirst({ ...first, [e.target.name]: e.target.value });
//   };

//   const inp = () => {
//     setFi([...fi, { url: "" }]);
//    };
//   const han = (index, e) => {
//     const updated = [...fi];
//     updated[index][e.target.name] = e.target.value;
//     setFi(updated)
//     console.log(index);
//   };
// console.log(fi)
//   const save = async () => {
//     if(first.url ==="" || first.fold===""){
//       return;
//     }
//    console.log(fi)
//     const allUrls = [first.url, ...fi.map((item,i) => item.url)];
//     console.log(allUrls)
//      let o = await mong(allUrls, first.fold, first.fold);
//     gt();
//     setFirst({url:'',fold:""})
//     setFi([])
//    };
//   const del = (e, i) => {
//     let y = [...fi];
//     y.splice(i, 1);
//     setFi(y);
//   };

//   useEffect(() => {
//     setFirst({ fold: item });
//   }, [item]);

// const gt = async () => {
//       let y = await bt(1);
//       b(y.allUrls);
//       t(y.all);
//       console.log(y);
//     };
// const dl =async(e,i)=>{
//   console.log(a[i])
//   let  y = await dev(a[i])
//   gt()

// }
//   useEffect(() => { 
//     gt();
//   }, []);


  return (
    <>
      <div className="sg14" style={{ display: "flex" }}>
        <div className="sd84">
          <h1 className="yell">Everything you are in one, simple link in bio</h1>
          <p className="v5">
            Join 70M+ people using Linktree for their link in bio. One link to help
            you share everything you create, curate and sell from your Instagram,
            TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="k1">
            <div>
                {session &&<button className="a0"><Link href={"/form"} style={{textDecoration:'none',color:'black'}} class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/login" })}>Create Your Link Tree</Link></button>}
                {!session &&<button className="a0"><Link href={"/login"} style={{textDecoration:'none',color:'black'}} class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/login" })}>SignIn To create</Link></button>}            </div>
          </div>
        </div>
        <div className="we1">
          <div>
            <Player className="ru" autoplay loop src="/ps.json" />
          </div>
        </div>
      </div>
      <div className="card"> 
    <div><video autoPlay playsInline loop muted preload="auto"style={{  width: "100%",  height: "700px",  borderRadius: "1rem",}}poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp"><source src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"type="video/mp4"/></video></div>
    <div className="flex">
      <div className="size"><h1>Create and customize your Linktree in minutes</h1></div>
     <div className="paragraf"><p>Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p></div>
   {/* <div className="btn123">Get started for free</div> */}
           {!session &&<div className="btn123"><div class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/login" })}>Get started for free</div></div>}
           {session &&<div className="btn123"><Link href={"/dashboard"} style={{textDecoration:'none',color:'black'}} class="nav-link disabled" className="btn4566" onClick={()=>signOut({ callbackUrl: "/login" })}>Go Your Dashboard</Link></div>}

    </div>
    </div>
    <div className="color"> 
       <h1 className="trust">The Only Trusted By 70M+</h1>
  <div className="x-scroll">
      <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e9377ba_selena-gomez-p-500.webp" alt="" />
  <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e937786_funkynutmeg-p-500.webp" alt="" />
  <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e937809_hbo-p-500.webp" alt="" />
  <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e9377ac_comedy-central-p-500.webp " alt="" />
<img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb1449d48431e9376d8_pharrell-p-500.webp" alt="" />
{/* <div className="dashboard">
  Your Dashboard
 </div> */}
 </div>
 </div>
      {/* <div className="dg1" style={{ display: "flex" }}>
        <div className="a9">
          <div className="style">
            <h2>create your sub link</h2>
          </div>
          <div className="qw9">
            <input
              name="fold"
              value={first.fold}
              onChange={hand}
              type="text"
              placeholder="enter fold name"
            />
          </div>

          <div className="qw9">
            <input
              name="url"
              value={first.url}
              onChange={hand}
              type="text"
              placeholder="enter url name"
            />
          </div>

          <div>
            {fi.map((item, index) => (
              <div key={index}>
                <div className="sh5">
                  <div>
                    <input
                      name="url"
                      value={item.url}
                        onChange={(e) =>han(index,e)}
                      placeholder="enter url name"
                    />
                  </div>
                  <div>
                    <button className="ru1" onClick={(e) => del(e,index)}>
                      <Player className="ru1" autoplay loop src="/del.json" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
           </div>
          <button className=" d1" onClick={inp}><div className='e0'> <Player className="e0" autoplay loop  src="fd.json" style={{ height: '30px', width: '30px' }}/></div></button>
          <div className="s1">
            <button className="q0" onClick={save}>save</button>
          </div>
        </div>
      </div>

       <div className="p1">
            <h2 className="q8">your sub url</h2>
            {a.map((item, i) => (
              <> 
              <div className="gk1"> 
              <div className="d9" key={i}>
                <Link className="ft" href={`http://localhost:3000/${s[i]}`}>{item}</Link>
              </div>
              <div><button className="ru2" onClick={(e)=>dl(e,i)}><Player className="ru3"   autoplay loop src="/del.json" /></button></div>
              </div>
              </>
            ))}
          </div> */}


    </>
    );
  }
