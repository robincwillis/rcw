import Image from "next/image"
import data from './data.json'

export default function Home() {
  const projects = [...data['royal'], ...data['poland'], ...data['orient1'], ...data['orient2']]
  return (
    <div>
      <div className=" min-h-screen pb-20 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header>
          <h2>Robin Willis</h2>
          <h3>Architecture | Interior</h3>
        </header>
        <main className="max-w-[50vw] py-20 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {projects.map((entry, index) => (
            <div key={index} style={{ width: '100%', position: 'relative' }}>
              <Image
                src={entry.src}
                alt={entry.alt}
                layout="responsive"
                width={100}
                height={100}
                sizes="100vw"
                priority
                style={{ background: 'white' }}
              />
              <p className="pt-2">{entry.alt}</p>
            </div>
          ))}
        </main>
        <footer>
          <a href="https://robincwillis.com">robincwillis.com</a>
        </footer>
      </div>
    </div>
  )
}
