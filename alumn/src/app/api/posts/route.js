import { connect } from '@/dbConfig/dbConfig';
import Post from '@/Models/post';
import Card from '@/Models/DigitalCard';

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
  try {
    // Connect to the database
    await connect();

    // Get the query parameter from the request
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const posts = id 
      ? await Post.findById({ _id: id }) // Fetch specific post by ID
      : await Post.find({}, { content: 0 }); // Fetch all posts without content

    if (id && !posts) {
      return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404 });
    }

    let postsWithAlumni = [];

    for (const post of Array.isArray(posts) ? posts : [posts]) {
      const { Alumni_id } = post;

      const alumni = await Card.findOne({ Alumni_ID:Alumni_id }, { _id:0, Name: 1, Profile: 1, Linkedin_Profile: 1 });

      if (alumni) {
        // Combine the post and alumni information
        postsWithAlumni.push({
          ...post.toObject(),
          alumniDetails: alumni
        });
      } else {
        // In case alumni details are not found, just return the post without alumniDetails
        postsWithAlumni.push(post.toObject());
      }
    }
    // console.log("sndfjbdfhbdvjhansdvvjhhbrudfjbwwjmd",postsWithAlumni)
    // Send the combined result
    return new Response(JSON.stringify(postsWithAlumni), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to fetch posts' }), { status: 500 });
  }
}
