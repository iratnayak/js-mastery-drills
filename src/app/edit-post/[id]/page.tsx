import EditPostForm from '@/components/EditPostForm';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const post = await prisma.post.findUnique({
        where: {id: id},
    });

    if(!post) return notFound();

  return (
    <main className='p-10 max-w-2xl mx-auto'>
        <h1 className="text-3xl font-bold mb-6 text-white">Edit Post ✏️</h1>
        <EditPostForm post={post}/>
    </main>
  );
}

