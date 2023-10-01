import { useState } from "react";
import "./Clicker.css"

const Clicker: React.FC = () => {
  const [click, setClick] = useState<number>(0);

  const plusClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setClick(click + 1);
  }

  const minusClick: React.MouseEventHandler<HTMLButtonElement> = () => {
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