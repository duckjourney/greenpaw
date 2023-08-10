import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Soil from "./components/landing/soil/soil";
import Eolic from "./components/landing/eolic/eolic";
import Filosofy from "./components/landing/filosofy/filosofy";
import Recycle from "./components/landing/recycle/recycle";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Soil />
        <Eolic />
        <Filosofy />
        <Recycle />
      </div>
    </Fragment>
  );
}

export default App;
