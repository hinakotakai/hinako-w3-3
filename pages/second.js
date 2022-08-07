import Head from "next/head"
import Link from "next/link"
import Button from "./button";


export default function first({posts}) {
    return (
      <div className="min-h-screen">
      <Head><title>やさいとくだもの</title></Head>
      <div className="pt-6"> 
        <h1 className="text-center text-6xl font-bold m-4">LIST</h1>
      </div>
      <div className="text-center text-2xl hover:text-green-600">      
        <Link href="/">← HOME</Link>
      </div>
      <div className="float-left justify-center mx-auto ">
        {posts.map((post) => {
          return (
            <div key={post.id} className="float-left flex-wrap border border-gray-400 w-56 p-10 m-10 text-center">
              <Link href={`/${post.id}`}>
                <a className="text-3xl  hover:text-pink-500">{post.name}</a>
              </Link>
              <br />
              <Button/>
            </div>
          );})}
      </div>
      </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.sssapi.app/B9fDKcP0xE3tAfgNQZIaZ`)
    const posts = await res.json();
    return {props: { posts }}
}