import "./App.css";
import H1Comp from "./components/h1tag/H1Tag";
import ClassComp from "./components/classComp/ClassComp";
import { Button } from "./components/button/Button";

function App() {
  let fName = "Avinash";
  return (
    <div className="App">
      {/* <H1Comp /> */}
      {/* <ClassComp /> */}
      <Button fullName={fName} />
    </div>
  );
}

export default App;
