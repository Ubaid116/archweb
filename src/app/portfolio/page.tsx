// page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="px-4 py-12">
        <header className="mb-8 text-left">
          <h2 className="text-4xl font-light text-gray-600">Photos</h2>
          <h1 className="text-5xl font-bold text-gray-800">Gallery</h1>
        </header>

        {/* Image Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="w-full h-48 bg-gray-200"></div>
          <div>
            <img
              src="/images/g1.png"
              alt="Gallery Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g2.png"
              alt="Gallery Image 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g3.png"
              alt="Gallery Image 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g4.png"
              alt="Gallery Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g5.png"
              alt="Gallery Image 5"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g6.png"
              alt="Gallery Image 6"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g7.png"
              alt="Gallery Image 7"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g8.png"
              alt="Gallery Image 8"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="/images/g9.png"
              alt="Gallery Image 9"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
