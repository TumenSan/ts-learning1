import { useState } from "react";
import "./Clicker.css"

const Clicker = () => {
  const [click, setClick] = useState(0);

  const plusClick = () => {
    setClick(click + 1);
  }

  const minusClick = () => {
    setClick(click - 1);
  }

  return(
    <div className="CLicker">
      <button
        type="button"
        onClick={plusClick}
      >+</button>
      {click}
      <button
        type="button"
        onClick={minusClick}
      >-</button>
    </div>
  );
}

export default Clicker;