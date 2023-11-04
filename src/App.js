import Header from "./components/header";
import HeroImage from "./components/heroImage";
import Modal from "./components/modal";
import Projects from "./components/projects";
import RegistrationForm from "./components/registrationForm";
import { useState } from "react";

const projectsList = [
  {
    id: 1,
    imageUrl: "https://www.w3schools.com/w3images/house2.jpg",
    projectName: "Summer House",
  },
  {
    id: 2,
    imageUrl: "https://www.w3schools.com/w3images/house3.jpg",
    projectName: "Winter House",
  },
  {
    id: 3,
    imageUrl: "https://www.w3schools.com/w3images/house4.jpg",
    projectName: "Autumn House",
  },
  {
    id: 4,
    imageUrl: "https://www.w3schools.com/w3images/house5.jpg",
    projectName: "Spring House",
  },
  {
    id: 5,
    imageUrl: "https://www.w3schools.com/w3images/house1.jpg",
    projectName: "Summer House",
  },
];

function App() {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Destructuring the Objects
  // const nameKey = "name";

  // const student = {
  //   [nameKey]: "Muhammad Faizan",
  //   age: 20,
  //   skills: ["React", "React native", "MERN"],
  //   activeStatus: false,
  // };

  // const { age, name, activeStatus, skills } = student;

  // Rest   operator in Object
  // const { age, name, ...restdata } = student;

  // Spread Operator
  // const copyStudent = {...student, name: 'Ali Abdullah', hobby: 'Book reading'};

  // Destructuring an array.
  // const skills = ["React", "React native", "Express", "Mongo DB", "Node Js"];
  // const [skill1, skill2, skill3] = skills;

  // Rest operator in array
  // const [firstSkill, ...restSkills] = skills;

  // Spread operator in array
  // const copySkills = [...skills, 'Next Js', 'JQuery', 'Vanila javascript'];


  return (
    <>
      {/* <Header />
      <HeroImage
        url={"https://www.w3schools.com/w3images/architect.jpg"}
        title={"BR Arcitects"}
      />
      <HeroImage
        url={"https://www.w3schools.com/w3images/house2.jpg"}
        title={"AR Solutions"}
      />

      <Projects projectsList={projectsList} /> */}

      <RegistrationForm />
      {/* <Modal
        message={"Do you realy want to exit an application"}
        isOpen={isOpen}
        onClose={onClose}
      />
      <button onClick={onOpen}>Open Modal</button> */}
    </>
  );
}

export default App;

// Props: means properties that we pass to the components
// Lists Mapping into list of components: used a map function of arrays example: array.map((item) => {})
