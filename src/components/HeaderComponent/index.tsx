import Image from "next/image";
import React from "react";

const HeaderComponent = () => {
  return (
    <header className="backdrop-blur-16 bg-opacity-85 ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center justify-center space-x-8">
          <Image
            src="/WBHelper-Logo.png"
            alt="WBHELPER"
            width={244}
            height={28}
            className="h-8"
          />
          <nav className="flex space-x-8">
            <a href="#" className="mx-2 hover:border-b-2 border-MainYellow">
              Продавцы
            </a>
            <a
              href="#"
              className="mx-2 text-ContentBlack border-b-2 border-MainYellow flex items-center space-x-2"
            >
              <p>Мои кампании</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="mx-2 hover:border-b-2 border-MainYellow">
              Актуальные ставки
            </a>
            <a
              href="#"
              className="mx-2 flex items-center space-x-2 hover:border-b-2 border-MainYellow"
            >
              <p>Возможности</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#777777"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
        <div className="flex justify-center">
          <nav className="flex  items-center space-x-8">
            <a href="#" className="mx-2 hover:border-b-2 border-MainYellow">
              Поддержка
            </a>
            <a href="#" className="mx-2 hover:border-b-2 border-MainYellow">
              Тарифы
            </a>
            <button
              onClick={() => {
                console.log("notification clicked");
              }}
              title="Notification Module Opens"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9C6 16 3 18 3 18H21C21 18 18 16 18 9Z"
                  stroke="#777777"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="18"
                  cy="4"
                  r="3.5"
                  fill="#D84444"
                  stroke="#F6F7F8"
                />
                <path
                  d="M13.7295 22C13.5537 22.3031 13.3014 22.5547 12.9978 22.7295C12.6941 22.9044 12.3499 22.9965 11.9995 22.9965C11.6492 22.9965 11.3049 22.9044 11.0013 22.7295C10.6977 22.5547 10.4453 22.3031 10.2695 22"
                  stroke="#777777"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="mx-2 flex items-center space-x-2">
              <Image
                src="/user.png"
                alt="user Icon"
                width={50}
                height={50}
              ></Image>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#777777"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
