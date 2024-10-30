import logo from "./logo.svg";
import { ReactLenis } from "lenis/dist/lenis-react";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Text from "./Components/Text";
import Team from "./Components/Team";
import Services from "./Components/Services";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div className="App bg-primary-background">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}>
        <Nav />
        <Hero id="home" />
        <Services id="services" /> <Text id="about" />
        <Team id="ourteam" />
        <Contact id="contacts" />
      </ReactLenis>{" "}
    </div>
  );
}

export default App;
