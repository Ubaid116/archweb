export default function Home() {
  return (
    <section className="py-12 bg-gray-200">
      <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-6 lg:px-20">
        <form className="space-y-4 md:w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 w-full"
          />
          <input
            type="text"
            placeholder="What Are You Interested In?"
            className="border border-gray-300 p-4 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-4 w-full"
          ></textarea>
          <button className="bg-black text-white px-6 py-2 mt-6 hover:bg-gray-800">
            Send Message →
          </button>
        </form>
        <div className="md:w-2/5 mt-8 md:mt-0">
          <img
            src="/images/contact.png"
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
