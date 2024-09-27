'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'; // To handle redirection
import 'react-quill/dist/quill.snow.css';
import './writePage.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Title from '@/Components/Title';
import { parseJwt } from '@/Js/parsejwt'; // Helper function to parse JWT

// Dynamically load ReactQuill because of Next.js SSR issue
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'], // Add image button in toolbar
      ['clean']
    ],
    handlers: {
      image: function () {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
          const file = input.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              const base64Image = reader.result;
              const range = this.quill.getSelection();
              this.quill.insertEmbed(range.index, 'image', base64Image);
            };
            reader.readAsDataURL(file);
          }
        };
      }
    }
  },
  clipboard: {
    matchVisual: false,
  }
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [Alumni_id, setAlumniId] = useState(''); // Alumni ID state
  const router = useRouter(); // For redirection

  // Fetch Alumni ID from JWT or session on component mount
  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      const jwt = token.split('=')[1];
      console.log("JWT token: ", jwt); // Log the JWT token to debug
      const decoded = parseJwt(jwt);
      console.log("Decoded JWT: ", decoded); // Log the decoded JWT to ensure it's parsed correctly

      if (decoded && decoded.alumniId) {
        console.log("Alumni ID from token: ", decoded.alumniId); // Log the alumni ID
        setAlumniId(decoded.alumniId);
      } else {
        console.log("No alumni ID found in decoded token");
      }
    } else {
      console.log("Token not found in cookies");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      summary, 
      content,
      Alumni_id,
    };

    const res = await fetch('../api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (res.ok) {
      console.log('Post created!');
      router.push('/Blog');
    } else {
      console.error('Error creating post');
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Title title="Create Blog" />
      <form onSubmit={handleSubmit}>
        {/* Title input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title..."
          required
        />

        {/* Alumni ID input */}
        <div className="input-field">
          <label htmlFor="alumni-id">
            Alumni ID
          </label>
          <input
            name="alumni-id"
            type="text"
            value={Alumni_id}
            readOnly // Make it read-only so the user cannot modify it
          />
        </div>

        {/* Summary input */}
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Post Summary..."
          required
        />

        {/* Content input */}
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />

        {/* Submit button */}
        <button type="submit">Publish</button>
      </form>

      {/* <Footer /> */}
    </>
  );
};

export default NewPost;
