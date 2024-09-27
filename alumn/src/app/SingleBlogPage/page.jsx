'use client';

import { useEffect, useState } from 'react';
import './single.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Title from '@/Components/Title';
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const HomePage = ({ searchParams }) => {
  const [posts, setPosts] = useState([]);
  const id = searchParams._id; // Get the ID from searchParams

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts?id=${id}`);
      
      if (res.ok) {
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : [data]); // Wrap single post in an array if necessary
      } else {
        console.error('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, [id]); 

  return (
    <>
      <Navbar />
      <Title title="Blog" />
      <div className="blog-container">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <hr/>
            <div className="collapseDate">
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
            {/* <h4 className="post-date">{new Date(post.createdAt).toLocaleString()}</h4> */}
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
