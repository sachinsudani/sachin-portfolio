import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Bio Section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I'm a passionate Software Developer with expertise in building modern
          web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless user experiences and robust
          server-side solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>React.js & Next.js</li>
              <li>Tailwind CSS</li>
              <li>Typescript</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <FaTools className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Git & GitHub </li>
              <li>Docker</li>
              <li>AWS</li>
              <li>AI Assistant & RAG </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Mid Senior Full Stack Developer
            </h3>
            <p className="text-primary mb-2">Xenett • 2024 - Present</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Led development of multiple web applications using React and
                Node.js
              </li>
              <li>
                Implemented CI/CD pipelines reducing deployment time by 50%
              </li>
              <li>Mentored junior developers and conducted code reviews </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Junior Full Stack Developer
            </h3>
            <p className="text-primary mb-2">BKSoftech • 2022 - 2024</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Developed and maintained web applications using React and
                Node.js
              </li>
              <li>
                Implemented CI/CD pipelines reducing deployment time by 50%
              </li>
              <li>Mentored junior developers and conducted code reviews </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Computer Application
            </h3>
            <p className="text-primary mb-2">
              Saurashtra University • 2019 - 2022
            </p>
            <p className="text-secondary">
              Graduated with Honors. Focused on software engineering and web
              development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
