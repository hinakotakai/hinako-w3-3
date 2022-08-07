import Head from "next/head";
import Link from 'next/link';


export async function getServerSideProps({ params }) {
    console.log(params);
    const id = params.post;
    const res = await fetch(`https://api.sssapi.app/B9fDKcP0xE3tAfgNQZIaZ/${id}`);
    const posts = await res.json();
    return { props: { posts } };
} 
  
  
export default function post1({ posts }) {
    return (
    <div>
        <Head><title>すきなりゆう</title></Head>
        <div className='h-full'>
            <h1 className='text-center text-6xl font-bold m-8'>REASON</h1>
            <h3 className='text-center text-2xl hover:text-green-600 m-4'> <Link href="/">← HOME</Link></h3>
            <h3 className='text-center text-2xl hover:text-pink-500 m-3'> <Link href="/second">← LIST</Link></h3>
        <div className='m-4 p-10 text-center text-black border border-solid border-gray-500 h-1/4 w-1/4 mx-auto'>
            <h2 className='h-2/5' ><img src={`/${posts.img}`}/></h2>
            <h2 className='text-2xl p-2'>{posts.name}</h2>
            <h2 className='text-2xl'>{posts.reason}</h2> 
        </div>
        </div>
    </div>
    )
}

