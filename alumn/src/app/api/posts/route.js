import { connect } from '@/dbConfig/dbConfig';
import Post from '@/Models/post';

export async function POST(req) {
  try {
    await connect();
    const { title, content } = await req.json();
    const newPost = new Post({ title, content });
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to create post' }), { status: 500 });
  }
}

export async function GET() {
  try {
    await connect();
    const posts = await Post.find();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to fetch posts' }), { status: 500 });
  }
}
