import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Delete Function flow
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
      deletedPost,
    });
  } catch (error: any) {
    console.error("❌ Prisma Delete Error:", error.message);
    return NextResponse.json(
      { message: "Error deleting post", error: error.message },
      { status: 500 }
    );
  }
}

// Update function flow
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, content, category } = body;

    const updatePost = await prisma.post.update({
      where: { id: id },
      data: {
        title,
        content,
        category,
      },
    });

    return NextResponse.json(updatePost);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error updating post!" },
      { status: 500 }
    );
  }
}
