//api/Chat/route.js
import {Rest} from 'ably';


export const revalidate = 0;

export async function GET(request) {
  const client = new Rest(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: 'ably-nextjs-demo',
  });
  console.log(`Request: ${JSON.stringify(tokenRequestData)}`);
  return Response.json(tokenRequestData);
}