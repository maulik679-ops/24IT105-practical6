function Skills() {
  const skillList = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section>
      <h2>Skills</h2>

      <ul>
        {skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;