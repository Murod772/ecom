import React from "react";
import AdvertComponent from '../pages/adverts'; // Import AdvertComponent

const Home = () => {
  return (
    <div>
      <div id="modal-root"></div>
      <div className="container mx-auto px-6 py-3 flex justify-center items-center h-screen">
        <h1 className="text-center">Войдите в личный кабинет что бы продолжить</h1>
      </div>
      <AdvertComponent />
    </div>
  );
};

export default Home;
