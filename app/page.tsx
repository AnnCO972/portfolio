import fs from 'fs';
import path from 'path';
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default async function Home() {
  const filePath = path.join(process.cwd(), 'public', 'portfolio.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return (
    <div>
      <Hero name={data.name} bio={data.bio} />
      <About about={data.about} aboutHobbies={data.aboutHobbies} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
    </div>
  );
}
