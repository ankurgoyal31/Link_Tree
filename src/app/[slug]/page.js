"use server";

import { redirect, notFound } from "next/navigation";
import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";
 // import Email from "next-auth/providers/email";
let client;
configDotenv();

const connectMongo = async () => {
  if (client) return client;
  client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  return client;
};

const db = async () => {
  const client = await connectMongo();
  const database = client.db("Link_tree");
  return {
    Um: database.collection("urls"),
  };
};

export const mong = async (urls, d, m,a,b,c,content) => {
  const { Um } = await db();

  let u = "";
  for (let i = 0; i < d.length; i++) {
    if (d[i] !== " ") {
      u += d[i];
    }
  }

  const data = await Um.findOne({ short: u });

  if (data) {
    await Um.findOneAndUpdate(
      { short: u },
      { $push: { url: { $each: urls } } }
    );
    return;
  }

  await Um.insertOne({url: urls, short: u, org: m, s: 1, Email:a,name:b,img:c,content:content,createdAt: new Date()});};

export default async function Page({ params }) {
  const { slug } = await params;
  const reserved = ["dashboard", "login", "signup", "admin", "form"];

  if (reserved.includes(slug)) {
    notFound();
  }

  const { Um } = await db();
  const data = await Um.findOne({ short: slug });

  if (data) {
    redirect(`/dash?name=${encodeURIComponent(slug)}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Short URL not found!</h1>
    </div>
  );
}

export const bt = async (email) => {
  const { Um } = await db();
  const data = await Um.find({ Email: email }).toArray();
  const allUrls = data.flatMap((item) => item.org);
  const all = data.flatMap((item) => item.short);
if(!data.length){
   return{sucess:false} 
  }
  return {sucess:true, allUrls, all, data };
};

export const nt = async ( name,email) => {
  const { Um } = await db();
  const data = await Um.find({ short: name,Email:email }).toArray();
  const allUrls = data.flatMap((item) => item.url);
if(data.length===0){
  return{sucess:false}
}
  return {sucess:true,allUrls,createdAt: data[0]?.createdAt || null,};};

export const del = async (da, name) => {
  const { Um } = await db();
  const data = await Um.findOne({ short: name });

  if (data) {
    await Um.findOneAndUpdate({ short: name },{ $set: { url: da } } ); }
};

export const dev = async (a) => {
  const { Um } = await db();
  const data = await Um.findOne({ org: a });

  if (data) {
    await Um.deleteOne({ org: a });
  }
};
