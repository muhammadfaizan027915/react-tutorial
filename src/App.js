import Header from "./components/header";
import HeroImage from "./components/heroImage";
import Projects from "./components/projects";

const projectsList = [
  { id: 1, imageUrl: "https://www.w3schools.com/w3images/house2.jpg", projectName: "Summer House" },
  { id: 2, imageUrl: "https://www.w3schools.com/w3images/house3.jpg", projectName: "Winter House" },
  { id: 3, imageUrl: "https://www.w3schools.com/w3images/house4.jpg", projectName: "Autumn House" },
  { id: 4, imageUrl: "https://www.w3schools.com/w3images/house5.jpg", projectName: "Spring House" },
  { id: 5, imageUrl: "https://www.w3schools.com/w3images/house1.jpg", projectName: "Summer House" },
];

function App() {
  return (
    <>
      <Header />
      <HeroImage url={"https://www.w3schools.com/w3images/architect.jpg"} title={"BR Arcitects"} />
      <HeroImage url={"https://www.w3schools.com/w3images/house2.jpg"} title={"AR Solutions"} />

      <Projects projectsList={projectsList} />
    </>
  );
}

export default App;

// Props: means properties that we pass to the components
// Lists Mapping into list of components: used a map function of arrays example: array.map((item) => {})
