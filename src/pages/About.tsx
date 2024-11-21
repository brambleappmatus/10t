export default function About() {
  return (
    <div className="pt-32 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Who I Am</h2>
            <p>
              Hi, I'm <strong>Matúš</strong> from Slovakia. I work in <strong>SaaS sales</strong>, 
              where I help businesses solve complex problems with innovative software solutions. 
              Beyond my professional role, I'm a passionate hobbyist web developer, constantly exploring new technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">My Developer Journey</h2>
            <p>
              My journey into web development started as a creative outlet and has evolved into a
              commitment to learning and building. I'm currently focused on mastering modern tools like:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <p>
              I'm fascinated by the process of turning ideas into functional, visually appealing web applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Contact Me</h2>
            <p>
              I’d love to connect with you! Whether you have a question, a project in mind, 
              or just want to say hi, here’s how you can reach me:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Email:</strong> <span className="text-blue-500">[your-email@example.com]</span>
              </li>
              <li>
                <strong>LinkedIn:</strong> <span className="text-blue-500">[linkedin-profile-link]</span>
              </li>
              <li>
                <strong>GitHub:</strong> <span className="text-blue-500">[github-profile-link]</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}