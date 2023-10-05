import React, { useState } from "react";
import { Link } from "react-router-dom";
import shirt from "../../../pictures/shirt.jpg"

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
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
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
        <div className="flex flex-row">
          <img src={shirt} alt="Shirt" />
          <div className="flex flex-col">
            <h2>Футболка Alien</h2>
            <p>Состав: 100% хлопок</p>
            <h1>1500р</h1>
            <p>Размер:</p>
            <div>

            </div>
            Цвет:
            <div>

            </div>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            type="button"
            > 
            Купить
            </button>
          </div>
        </div>
      </div>
      <div className="bg-stone-200 mt-[45px] flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h3 className="m-3">Сервис и поддержка</h3>
            <h3 className="m-3">О компании</h3>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col m-3">
              <p>Как сделать заказ</p>
              <p>Возврат товара</p>
              <p>Публичная оферта</p>
              <p>Доставка</p> 
            </div>
            <div className="flex flex-col m-3">
              <p>Как сделать заказ</p>
              <p>Возврат товара</p>
              <p>Публичная оферта</p>
              <p>Доставка</p> 
            </div>
            <div className="flex flex-col m-3">
              <p>Как сделать заказ</p>
              <p>Возврат товара</p>
              <p>Публичная оферта</p>
              <p>Доставка</p> 
            </div>
            <div className="flex flex-col m-3">
              <p>Как сделать заказ</p>
              <p>Возврат товара</p>
              <p>Публичная оферта</p>
              <p>Доставка</p> 
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p>бесплатная доставка</p>
          <p>пробники</p>
          <p>акции и подарки за покупку</p>
        </div>
      </div>
    </>
  );
};

export default FirstLesson;
