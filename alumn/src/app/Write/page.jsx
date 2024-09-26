'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'; // To handle redirection
import 'react-quill/dist/quill.snow.css';
import './writePage.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Title from '@/Components/Title';

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
  const [summary, setSummary] = useState(''); // New summary state
  const [content, setContent] = useState('');
  const [alumniId, setAlumniId] = useState(''); // Alumni ID state
  const [alumniIdValid, setAlumniIdValid] = useState(null); // Alumni ID validation
  const router = useRouter(); // For redirection

  // Handle Alumni ID change and validate
  const handleAlumniIdChange = async (e) => {
    const id = e.target.value;
    setAlumniId(id);

    // Check validity of the Alumni ID
    if (id.length > 0) {
      const res = await fetch(`/api/CheckId?alumniId=${id}`);
      const data = await res.json();
      setAlumniIdValid(data.exists);
    } else {
      setAlumniIdValid(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!alumniIdValid) {
      alert('Please enter a valid Alumni ID.');
      return;
    }

    const postData = {
      title,
      summary, // Include summary in the payload
      content,
      alumniId, // Include Alumni ID in the payload
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
      router.push('/Blog'); // Redirect to the Blog page upon success
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

        {/* Alumni ID input */}
        <div className="input-field">
          <label htmlFor="alumni-id">
            Alumni ID
            {alumniIdValid === true && <span className="valid">✅</span>}
            {alumniIdValid === false && <span className="invalid">❌</span>}
          </label>
          <input
            name="alumni-id"
            type="text"
            placeholder="Enter your Alumni ID"
            value={alumniId}
            onChange={handleAlumniIdChange}
            required
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

      <Footer />
    </>
  );
};

export default NewPost;
