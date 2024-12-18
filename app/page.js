import Image from "next/image";

import data from './data.json'; // Adjust path to your JSON file


export default function Home() {

  const poland = data['poland']
  const royal = data['royal']

  const projects = [...royal, ...poland, ...data['orient1'], ...data['orient2']]


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {projects.map((entry, index) => (
          <div key={index} style={{ width: '50%', position: 'relative' }}>
            <Image
              src={entry.src} // Replace with the path to your image in the public directory
              alt="Description of the image"
              layout="responsive"
              width={100}
              height={100} // These define the aspect ratio (adjust according to your image dimensions)
              sizes="100vw" // Makes the image responsive to the viewport
              priority // Optional: Preloads the image for better performance
            />
            <h2>{entry.alt}</h2>
          </div>
        ))}
      </main>
    </div>
  );
}
