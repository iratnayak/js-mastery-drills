import Link from "next/link";

interface Image {
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

async function ImagePage({ params }: Props) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=12`
  );
  const images: Image[] = await response.json();

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <Link
        href="/albums"
        className="text-amber-500 hover:underline mb-5 inline-block"
      >
        ← Back to Albums
      </Link>
      <h1 className="text-2xl font-bold mb-8">Album No: {id} - Images</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white p-2 rounded-xl shadow-md">
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              className="w-full rounded-lg mb-2 text-black text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagePage;
