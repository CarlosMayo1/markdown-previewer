import { useState } from "react";

import remarkBreaks from "remark-breaks";
import classes from "./App.module.css";

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  // state of the app
  const [userInput, setUserInput] = useState("");

  return (
    <div className={classes["grid-container"]}>
      <Editor setUserInput={setUserInput} />
      <Previewer text={userInput} remarkPlugins={[remarkBreaks]} />
    </div>
  );
}

export default App;
