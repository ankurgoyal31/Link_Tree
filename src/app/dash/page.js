"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { del } from '../[slug]/page';
import { useSearchParams } from 'next/navigation';
import { nt } from '../[slug]/page';
import { useSession } from 'next-auth/react';
import { Suspense } from 'react';
import "./s.css"
// import { Player } from '@lottiefiles/react-lottie-player';
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function Page(){
 return( <Suspense>
    <DashPage/>
  </Suspense>)
}
 const DashPage=()=>{
  const{data:session} = useSession();
   const [first, setfirst] = useState([]);
  const [pr, setP] = useState(); // ✅ Fix: Start with empty array
 const[loader,setloader] = useState("");

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
const hnk = async (e,i)=>{
  let u = [...first]
  u.splice(i,1)
  setfirst(u)
  console.log(u)
 gp(u)
}
const gp= async(da)=>{
let y = await del(da,name);
console.log(first)
}
   useEffect(() => {
    try{
      setloader("Please Wait....")
 const y = async () => {
      console.log(session?.user?.email)
      let y = await nt( name,session?.user?.email);
      if(y.sucess){
   setfirst(y.allUrls);
        setP(y.createdAt)
        setloader("")
      }else{
        setloader("Not Found....")
      }}
           y();
    }catch(err){
      setloader("Check Your network....")
    }
    
   }, [session,name]);
  return (
    <>
  <div>
        </div>
        <h1 className='text133'>Welcome!  {session?.user?.name} </h1>
        <h1 className='text134'>Here is your All urls</h1>
          <div><img width={"100%"} height={"100%"} className='f4' src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/67982d87352ea8c719de4ad6_lsp_linktree-blog-hero-video-links-feature-release-2_190320-085344.gif" alt="" /> </div>
  <div className='profile'>
<div><img className='i1'  src={session?.user?.image} alt="" /></div>
    </div>
            <div className='padding'> <div className='url'><h2>your url </h2></div></div>

         <div className='w3'> 
          <div className='restyle'> 
         <div className='center'>  <Link className='e4' href={`/form?item=${name}`}><div><Player autoplay loop  src="fd.json" style={{ height: '30px', width: '30px' }}/>Add More</div></Link>  </div>   
 </div>
 
       {!loader=="" && <><div className="loader">{loader}</div></>}

         <div className='w1'>
 
        {first.map((item, i) => (
  <div key={i}>
    <div className='url345' style={{display:"flex", gap:"10px"}}> 
<div className='l1'> 
    <Link className="no-underline" href={item} target="_blank">{new URL(item).hostname.replace("www.", "").replace(".","").replace("com","")}</Link>
   </div>
  <div className='q4'> 
    <button className='w4' onClick={(e)=>hnk(e,i)}>< Player autoplay loop  src="del.json" style={{ height: '25px', width: '25px' }}/></button>
    </div> 
  </div>
  </div>
))}
 </div>
  <h3>{new Date(pr).toLocaleString()}</h3> 

</div>
     </>
  );
}
