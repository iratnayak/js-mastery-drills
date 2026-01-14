import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 try{
    // 01. Get the data
    const body = await request.json();
    const {title, author, content, category} = body;
   
    const newPost = await prisma.post.create({
        data: {
            title,
            author,
            content,
            category,
        },
    });

    console.log("Data saved database", newPost);
    
    
    // 03. Sucsess massage sent to the client 
    return NextResponse.json({
        maessage: "Success! Post created on Server",
        data: body,
    }, {status:201});

 } catch (error) {
    return NextResponse.json({
        message: "Error receiving data",

    }, {status:500});
 }
}
