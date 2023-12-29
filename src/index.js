import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
  {
    name: "Javascript",
    level: "intermediate",
    color: "green",
  },
  {
    name: "Java",
    level: "pro",
    color: "blue",
  },
  {
    name: "React",
    level: "beginner",
    color: "yellow",
  },
  {
    name: "Kotlin",
    level: "beginner",
    color: "purple",
  },
  {
    name: "vb.net",
    level: "beginner",
    color: "pink",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src="/profilePicture.png" alt="Robin" />;
}
function Intro(props) {
  return (
    <div>
      <h1>Robin</h1>
      <p>
        Hello! This is my profile card, part of my react education. This is a
        couple of my skills
      </p>
    </div>
  );
}
function SkillList() {
  const skillDataList = skillData;

  return (
    <main>
      {skillDataList.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </main>
  );
}

function Skill({ skillObj }) {
  console.log(skillObj);
  var level = skillObj.level;

  switch (skillObj.level) {
    case "beginner":
      level = "👍";
      break;
    case "intermediate":
      level = "🙏";
      break;
    case "pro":
      level = "💪";
      break;
    default:
      level = "";
      break;
  }

  return (
    <ul className="skill-list" style={{ backgroundColor: skillObj.color }}>
      <h3>{skillObj.name}</h3>
      <p>{level}</p>{" "}
    </ul>
  );
}

// function Skill(props) {
//   console.log(props);
//   return (
//     <div className="skill-list" style={{ backgroundColor: props.color }}>
//       <h3>{props.name}</h3>
//       <p>{props.emojii}</p>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
