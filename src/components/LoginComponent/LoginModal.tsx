import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/apiSlice";
import { setToken } from "../../api/authSlice";

const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("+71111111111111");
  const [password, setPassword] = useState("u4QXAyMCvo");
  const [login, { isLoading }] = useLoginMutation();
  const [isVisible, setIsVisible] = useState(false); // New state for visibility
  const dispatch = useDispatch();

  useEffect(() => {
    setIsVisible(true); // Fade in when the component mounts
    return () => setIsVisible(false); // Fade out when the component unmounts
  }, []);
  const handleClose = () => {
    setIsVisible(false); // Start fading out
    setTimeout(onClose, 300); // Delay the actual closing to allow for the fade-out effect
  };
  const handleLogin = async () => {
    try {
      const payload = await login({ email, password }).unwrap();
      localStorage.setItem("token", payload.access);
      localStorage.setItem("refreshToken", payload.refresh);
      dispatch(setToken(payload.access)); // Update Redux state

      console.log(payload);
      onClose(); // Close the modal on successful login
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  const modalContent = (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Вход</h2>
        <input
          className="w-full p-2 mb-3 border rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-full p-2 mb-4 border rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="flex justify-end items-center">
          <button
            className="bg-MainYellow hover:bg-blue-700 text-ContentBlack font-bold py-2 px-4 rounded mr-2"
            onClick={handleLogin}
            disabled={isLoading}
          >
            Логин
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default LoginModal;
