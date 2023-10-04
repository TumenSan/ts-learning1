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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        type="button"
        onClick={plusClick}
      >+</button>
      {click}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        type="button"
        onClick={minusClick}
      >-</button>
    </div>
  );
}

export default Clicker;