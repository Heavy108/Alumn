import NextAuth from 'next-auth';
import { connect } from '@/dbConfig/dbConfig';
import GoogleProvider from 'next-auth/providers/google';
import User from "@/Models/0Auth";

const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;

const authOptions = NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({session}){
            const sessionuser =await User.findOne({email:session.user.email})
            session.user.id=sessionuser._id;
            return session
        },
        async signIn({ profile }) {
            console.log(profile)

           try {
            await connect();
            const userExist= await User.findOne({email:profile.email})

            if(!userExist){
                const user =await User.create({
                    name:profile.name,
                    email:profile.email,
                    image:profile.picture,
                })
                console.log(user)
            }
            
            return true;

           } catch (error) {
            console.log(error)
            return false
           }
        },
       
    }
});
export {authOptions as GET, authOptions as POST};


