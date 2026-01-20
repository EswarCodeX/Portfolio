import Body from "@/components/Body";
import Project from "@/components/Project";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Body />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
