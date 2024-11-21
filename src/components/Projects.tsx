interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "NFTs as a Service",
    description: "Designing a better experience for NFT creators",
    image: "https://images.unsplash.com/photo-1635236066449-5b45769be233?auto=format&fit=crop&q=80"
  },
  {
    title: "Startup Branding Kit",
    description: "A brand kit for startups to get off the ground",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80"
  },
  {
    title: "Design Systems",
    description: "Building scalable UI components for web apps",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80"
  },
  {
    title: "Web3 Dashboard",
    description: "Visualizing blockchain data in a user-friendly way",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-4" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-8">Here are a few projects I've worked on recently. Check out my work for more.</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            View all projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}