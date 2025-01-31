import "./Body.css";

export const Body = () => {
  return (
    <>
      {/* Personal Information */}
      <section>
        <h1>About Me</h1>
        <p>
          Hello! I'm Vishal, a passionate software developer with experience in
          building web applications using React.
        </p>
        <p>I enjoy solving complex problems and learning new technologies.</p>
      </section>

      {/* Additional Sections */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description of project 1</li>
          <li>Project 2: Description of project 2</li>
          <li>Project 3: Description of project 3</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: vishal@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/vishal">
            linkedin.com/in/vishal
          </a>
        </p>
      </section>
    </>
  );
};
