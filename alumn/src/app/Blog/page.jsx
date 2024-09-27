'use client';

import { useEffect, useState } from 'react';
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import blog from "@/Assets/Blog.svg"
import style from "@/css/blog.module.css"
import Image from "next/image";
import Link from "next/link";
async function Blog(){
    const [posts, setPosts] = useState([]);
    const Title = "Blog";
    
    const Description =
      "< Byte Description > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
   

      useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch('/api/posts');
          const data = await res.json();
          setPosts(data);
          console.log(posts)
        };
        fetchPosts();
      }, []);
    return(<>
    <Navbar/>
    <div className={style.CardOuter}>
      <div className={style.CardIntroduction}>
        <h1 >{Title}</h1>
        <p>{Description}</p>
      </div>
      <Image src={blog} className={style.image} alt="Welcome to da club"/>
    </div>
    <div className={style.Navig}>
        <h2>Recent Blog</h2>
        <div className={style.Button}>
        <Link href="/Write" className={style.link}>
            <button >Write Blog</button>
          </Link>
        </div>
    </div>
<div className={style.container2}>
    {posts.map((post) => (
  <div tabIndex={0} className={style.collapse} key={post._id}>
    <div className={style.collapseTitle}>{post.title}</div>
    <div className={style.collapseDate}>
    <Image 
      src={post.Profile}
      width={20}
      height={20}
      alt='profile image'
      />
      {/* <h5>{post.alumni.Name}</h5> */}
    <h5>{new Date(post.createdAt).toLocaleString()}</h5>
      
      </div>
    <div className={style.collapseContent}>
      <p>{post.summary}</p>
      
        </div>
        <div className={style.Button}>
        <Link href={{ pathname:"/SingleBlogPage" , query: { _id: post._id }}} className={style.link}>
            <button >Read More</button>
          </Link>
        </div>
      </div>

  
// 
      ))}
      </div>
      
    <Footer/>
    </>)
}
export default Blog;