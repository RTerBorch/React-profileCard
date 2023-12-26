import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return (
    <main>
      <Skill
        name="JavaScript"
        emojii={String.fromCodePoint(0x1f44d)}
        color="blue"
      />
      <Skill name="CSS" emojii={String.fromCodePoint(0x1f60a)} color="red" />
      <Skill
        name="Java"
        emojii={String.fromCodePoint(0x1f44d)}
        color="yellow"
      />
      <Skill name="Html" emojii={String.fromCodePoint(0x1f60a)} color="green" />
    </main>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div className="skill-list" style={{ backgroundColor: props.color }}>
      <h3>{props.name}</h3>
      <p>{props.emojii}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
