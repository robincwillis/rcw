import Image from "next/image"

import data from './data.json'


export default function Home() {

  const poland = data['poland']
  const royal = data['royal']

  const projects = [...royal, ...poland, ...data['orient1'], ...data['orient2']]


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>RCW</h2>
        <h3>Architecture | Interior</h3>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {projects.map((entry, index) => (
          <div key={index} style={{ width: '50%', position: 'relative' }}>
            <Image
              src={entry.src}
              alt="Description of the image"
              layout="responsive"
              width={100}
              height={100}
              sizes="100vw"
              priority
            />
            <p>{entry.alt}</p>
          </div>
        ))}
      </main>
      <footer>
        <a href="#">robincwillis.com</a>
      </footer>
    </div>
  )
}
