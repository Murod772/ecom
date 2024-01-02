import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AdvertsSearchComponent from "../components/AdvertsComponent/search";

const Home = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  console.log(token);
  return (
    <div>
      <div id="modal-root"></div>
      {token ? (
        // Render AdvertComponent only when the user is logged in
        <>
          <AdvertsSearchComponent />
        </>
      ) : (
        // Show a message when the user is not logged in
        <div className="container mx-auto px-6 py-3 flex justify-center items-center h-screen">
          <h1 className="text-center">
            Войдите в личный кабинет что бы продолжить
          </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
