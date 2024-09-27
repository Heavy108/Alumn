'use client';

import { parseJwt } from '@/Js/parsejwt'; // Import your JWT parsing function
import Title from '@/Components/Title';
import style from "@/css/blog.module.css";
import Image from "next/image";
import noDataImg from "@/Assets/found.svg"; // Image to show when no posts are found

async function Blog() {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='));
  
  // If no token, show a message
  if (!token) {
    return <div>No posts available. Please log in.</div>;
  }

  const jwt = token.split('=')[1];
  const decoded = parseJwt(jwt);
  const alumniId = decoded.alumniId;
  console.log(alumniId);

  // Fetch posts by Alumni ID
  const res = await fetch(`../api/getblog?alumniId=${alumniId}`);
  const posts = await res.json();

  return (
    <>
      {/* <Navbar /> */}
      <Title title="post"/>
      <div className={style.container2}>
        {/* If no posts found, display an image */}
        {posts.length === 0 ? (
          <div className={style.noDataContainer}>
            <Image src={noDataImg} alt="No data found" width={400} height={400} />
            <h3>No posts available</h3>
          </div>
        ) : (
          posts.map((post) => (
            <div tabIndex={0} className={style.card} key={post._id}>
              <div className={style.cardTitle}>{post.title}</div>
              <div className={style.cardDate}>
                <h5>{new Date(post.createdAt).toLocaleString()}</h5>
              </div>
              <div className={style.cardContent}>
                <p>{post.summary}</p>
              </div>
              <div className={style.Button}>
                <button onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
}

async function handleDelete(postId) {
  const res = await fetch(`../api/deletepost?postId=${postId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    alert("Successfully deleted the blog");
    // Optionally refresh the page or update the state
  } else {
    console.error('Error deleting post');
  }
}

export default Blog;
