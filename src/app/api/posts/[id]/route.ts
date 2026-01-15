import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
  try {
    
    const { id } = await params;
    
    console.log("Deleting post with ID:", id); 

 
    const deletedPost = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ 
      message: "Post deleted successfully", 
      deletedPost 
    });

  } catch (error: any) {
    console.error("❌ Prisma Delete Error:", error.message);
    return NextResponse.json(
      { message: "Error deleting post", error: error.message }, 
      { status: 500 }
    );
  }
}