import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result.toString());
    } else {
      const newVal = calval + buttonText;
      setCalval(newVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calval={calval} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
