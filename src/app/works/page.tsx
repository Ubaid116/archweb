import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Sample Project One",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/images/p2.png",
  },
  {
    id: 2,
    title: "Sample Project Two",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/images/p1.png",
  },
  {
    id: 3,
    title: "Sample Project Three",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/images/6.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
        </header>
        <div className="flex flex-col space-y-8">
          {projects.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative w-full md:w-1/2 h-72 md:h-96">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"  // This ensures the image covers the entire area while maintaining its aspect ratio
                  className="rounded-l-lg"
                />
              </div>
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
