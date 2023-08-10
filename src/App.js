import "./App.css";
import Soil from "./components/landing/soil/soil";
import Eolic from "./components/landing/eolic/eolic";
import Filosofy from "./components/landing/filosofy/filosofy";
import Recycle from "./components/landing/recycle/recycle";

function App() {
  return (
    <div className="container">
      <Soil />
      <Eolic />
      <Filosofy />
      <Recycle />
    </div>
  );
}

export default App;
