import "./App.css";
import "ui-neumorphism/dist/index.css";
import { Page } from "./page/page";
import { overrideThemeVariables } from "ui-neumorphism";
import { Route, Routes } from "react-router-dom";
import Gridle from "./components/gridle/Gridle";

function App() {
  overrideThemeVariables({
    "--light-bg": "#FFF",
    "--light-bg-dark-shadow": "#AAA",
    "--light-bg-light-shadow": "#EEE",
    "--dark-bg": "#292E35",
    "--dark-bg-dark-shadow": "#21252a",
    "--dark-bg-light-shadow": "#313740",
    "--primary": "#8672FB",
    "--primary-dark": "#4526f9",
    "--primary-light": "#c7befd",
  });

  return (
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" Component={Page}></Route>
      <Route path="/gridle" Component={Gridle}></Route>
    </Routes>
  );
}

export default App;
