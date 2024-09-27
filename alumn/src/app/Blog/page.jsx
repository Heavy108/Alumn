"use client";

import { useEffect, useState } from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import blog from "@/Assets/Blog.svg";
import style from "@/css/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

function Blog() {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const Title = "Blog";
  const Description =
    "< Byte Description > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // if (loading) return <p>Loading...</p>; // Optional loading state

  return (
    <>
      <Navbar />
      <div className={style.CardOuter}>
        <div className={style.CardIntroduction}>
          <h1>{Title}</h1>
          <p>{Description}</p>
        </div>
        <Image src={blog} className={style.image} alt="Welcome to da club" />
      </div>
      <div className={style.Navig}>
        <h2>Recent Blog</h2>
        <div className={style.Button}>
          <Link href="/AdminLogin" className={style.link}>
            <button>Write Blog</button>
          </Link>
        </div>
      </div>
      <div className={style.container2}>
        {posts.map((post) => (
          <div tabIndex={0} className={style.collapse} key={post._id}>
            <div className={style.collapseTitle}>{post.title}</div>
            <div className={style.collapseDate}>
              {post.alumniDetails && post.alumniDetails.Profile && (
                <Image
                  src={`data:image/jpeg;base64,${post.alumniDetails.Profile}`} // Assuming it's a JPEG, adjust if it's PNG
                  width={30} // Adjust size as needed
                  height={30}
                  alt="profile image"
                  onError={(e) => {
                    e.target.src = "/Profile.png";
                    console.log(e)
                  }} // Fallback in case of error
                />
              )}
              {post.alumniDetails && (
                <>
                <Link href={post.alumniDetails.Linkedin_Profile}>
                    <FaLinkedin />
                  </Link>
                  <h4>{post.alumniDetails.Name}</h4>
                  
                </>
              )}
              <h5>{new Date(post.createdAt).toLocaleString()}</h5>
            </div>
            <div className={style.collapseContent}>
              <p>{post.summary}</p>
            </div>
            <div className={style.Button}>
              <Link
                href={{ pathname: "/SingleBlogPage", query: { _id: post._id } }}
                className={style.link}
              >
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
