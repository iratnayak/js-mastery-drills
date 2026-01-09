import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 try{
    // 01. Get the data
    const body = await request.json();
    // 02. Dispaly data in console (Terminal)
    console.log("New post received:", body);
    
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
