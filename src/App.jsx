import "@fontsource/dotgothic16";
import Header from "./components/header.jsx";
import Body from "./components/Body.jsx";
import Project from "./components/Project.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useTheme } from "./context/ThemeContext";
// ..
AOS.init();

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode ? "dark bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <Body />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
