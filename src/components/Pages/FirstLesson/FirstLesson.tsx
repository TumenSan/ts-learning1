import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirstLesson: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Обновляем активную ссылку при клике
  };

  return (
    <>
      <header>
        <p>7h3 5h0p</p>
        <>png</>
        <p>+79898989</p>
      </header>
      <div className="inline-flex">
        <Link
          to={"/firstlesson/LISP"}
          onClick={() => handleLinkClick("/LISP")}
          className={
            "block py-2 px-4 " +
            (activeLink === "/LISP"
              ? "bg-blue-500 text-white"
              : "text-blue-500")
          }
        >
          LISP
        </Link>
        <Link
          to={"/firstlesson/OCaml"}
          onClick={() => handleLinkClick("/OCaml")}
          className={
            "block py-2 px-4 " +
            (activeLink === "/OCaml"
              ? "bg-blue-500 text-white"
              : "text-blue-500")
          }
        >
          OCaml
        </Link>
        <Link
          to={"/firstlesson/JavaScript"}
          onClick={() => handleLinkClick("/JavaScript")}
          className={
            "block py-2 px-4 " +
            (activeLink === "/JavaScript"
              ? "bg-blue-500 text-white"
              : "text-blue-500")
          }
        >
          JavaScript
        </Link>
        <Link
          to={"/firstlesson/Python"}
          onClick={() => handleLinkClick("/Python")}
          className={
            "block py-2 px-4 " +
            (activeLink === "/Python"
              ? "bg-blue-500 text-white"
              : "text-blue-500")
          }
        >
          Python
        </Link>
        <Link
          to={"/firstlesson/PHP"}
          onClick={() => handleLinkClick("/PHP")}
          className={
            "block py-2 px-4 " +
            (activeLink === "/PHP"
              ? "bg-blue-500 text-white"
              : "text-blue-500")
          }
        >
          PHP
        </Link>
      </div>
    </>
  );
};

export default FirstLesson;
