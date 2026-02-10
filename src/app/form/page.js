"use client"
import React from 'react'
import { useEffect,useState } from 'react';
import { useSearchParams } from "next/navigation";
// import { Player } from "@lottiefiles/react-lottie-player";
import { bt } from '../[slug]/page';
import { mong } from '../[slug]/page';
import { useSession } from 'next-auth/react';
import { Suspense } from 'react';
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function Page() {
  return (
    <Suspense>
      <Form />
    </Suspense>
  )
}
const Form = () => {
  const {data:session} = useSession();
     const [first, setFirst] = useState({ url: "", fold: "",content:"" });
      const [fi, setFi] = useState([]);
      const [a, b] = useState([]);
      const [s, t] = useState([]);
      const searchParams = useSearchParams();
      const item = searchParams.get("item");

    //   const d = useRef(0);
    
      const hand = (e) => {
        setFirst({ ...first, [e.target.name]: e.target.value });
      };
    console.log(session?.user?.email)
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
        if(first.url ==="" || first.fold===""||first.content===""){
          return;
        }
       console.log(fi)
        const allUrls = [first.url, ...fi.map((item,i) => item.url)];
        console.log(allUrls)
         let o = await mong(allUrls, first.fold, first.fold,session?.user?.email,session?.user?.name,session?.user?.image,first.content);
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
    useEffect(() => {
      console.log(session)
    }, [session])
    
    const gt = async () => {
          let y = await bt(1);
          b(y.allUrls);
          t(y.all);
          console.log(y);
        };
    const dl =async(e,i)=>{
      console.log(a[i])
      let  y = await dev(a[i])
      gt()
    
    }
      useEffect(() => { 
        gt();
      }, []);
    
    
  return (
    <>
      <div className="dg1" style={{ display: "flex" }}>
        <div className="a9">
             <div className='name2'>
                <div className="name"> 
        {/* <span className='image'><img width={"40px"} height={"40px"} src="jkfg.jpg" alt="" /></span> */}
         <span className='email'>Welcome! {session?.user?.name}</span>
         </div>
    </div>
          <div className="style">
            <h2>create your sub link</h2>
          </div>
          <div className="qw9">
            <input
              name="fold"
              value={first.fold}
              onChange={hand}
              type="text"
              placeholder="enter folder name"
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
<div className="qw9 textarea">
            <textarea
              name="content"
              value={first.content}
              onChange={hand}
              type="text"
              placeholder="enter your content"
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
            <div className='save'><div className="q0" onClick={save}>save</div></div> 
          </div>
        </div>
      </div>

       {/* <div className="p1">
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
  )
}

// export default page
