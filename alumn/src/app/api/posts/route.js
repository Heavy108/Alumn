import { connect } from '@/dbConfig/dbConfig';
import Post from '@/Models/post';

export async function POST(req) {
  try {
    await connect();
    const { title, content,summary ,Alumni_id} = await req.json();
    console.log(title, content,summary ,Alumni_id)
    const newPost = new Post({ title, content ,summary,Alumni_id});
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to create post' }), { status: 500 });
  }
}

export async function GET(req) {
  // Get the ID from the query parameters

  try {
    await connect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    const posts = id 
      ? await Post.findById(id) // Fetch the specific post by ID
      : await Post.find({}, { content: 0 }); // Fetch all posts without the content field

    // Check if a single post was found when an ID is provided
    if (id && !posts) {
      return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to fetch posts' }), { status: 500 });
  }
}

