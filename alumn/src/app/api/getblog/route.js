import { connect } from "@/dbConfig/dbConfig";
import post from "@/Models/post";
// import { parseJwt } from "@/Js/parsejwt";

export async function GET(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('alumniId');
    console.log(id)
    const posts = await post.find({ Alumni_id: id });
    console.log(posts)
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
