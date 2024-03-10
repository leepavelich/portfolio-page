import About from "./components/About";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import AcademicPublications from "./components/AcademicPublications";
import Contact from "./components/Contact";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  return (
    <>
      <div className="App">
        <div className="nav flex justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <AnchorLink href="#about-me">
                  <NavigationMenuLink>About Me</NavigationMenuLink>
                </AnchorLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <AnchorLink href="#work-experience">
                  <NavigationMenuLink>Work Experience</NavigationMenuLink>
                </AnchorLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <AnchorLink href="#projects">
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </AnchorLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <AnchorLink href="#academic-publications">
                  <NavigationMenuLink>Publications</NavigationMenuLink>
                </AnchorLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <AnchorLink href="#contact">
                  <NavigationMenuLink>Contact Me</NavigationMenuLink>
                </AnchorLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <main>
          <About />
          <WorkExperience />
          <Projects />
          <AcademicPublications />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
