import { connect } from "@/dbConfig/dbConfig";
import post from "@/Models/post";

export async function DELETE(request) {
  try {
    await connect();
    
    // Extract the post ID from the request URL
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');  // Expecting `postId` to be passed as a query parameter

    if (!postId) {
      return new Response(JSON.stringify({ message: "Post ID is required" }), { status: 400 });
    }

    // Find and delete the post by its ID
    const deletedPost = await post.findByIdAndDelete({_id:postId});

    if (!deletedPost) {
      return new Response(JSON.stringify({ message: "Post not found" }), { status: 404 });
    }

    // Return a success message if the post is deleted
    return new Response(JSON.stringify({ message: "Post deleted successfully" }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
