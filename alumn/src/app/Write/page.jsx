'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import "./writePage.css"
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Title from '@/Components/Title';

// Dynamically load ReactQuill because of Next.js SSR issue
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'], // Add image button in toolbar
      ['clean']
    ],
    handlers: {
      image: function () { // Custom image handler
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
          const file = input.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
              const base64Image = reader.result; // Convert to base64
              const range = this.quill.getSelection(); // Get the current cursor position
              this.quill.insertEmbed(range.index, 'image', base64Image); // Insert image
            };
            reader.readAsDataURL(file); // Convert image to base64
          }
        };
      }
    }
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState(''); // New summary state
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      summary,  // Include summary in the payload
      content
    };

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (res.ok) {
      console.log('Post created!');
    } else {
      console.error('Error creating post');
    }
  };

  return (
    <>
      <Navbar />

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

       

        
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
         {/* Summary input */}
         <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Post Summary..."
          required
        />

        {/* Submit button */}
        <button type="submit">Publish</button>
      </form>

      <Footer />
    </>
  );
};

export default NewPost;
