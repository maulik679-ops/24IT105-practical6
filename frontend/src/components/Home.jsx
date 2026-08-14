import About from "./About";
import Skills from "./Skills";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <h1>Maulik Vaghela</h1>
        <p className="hero-subtitle">React Developer | IT Student</p>
      </section>
      <About />
      <Skills />
    </div>
  );
}

export default Home;