import React, { useState } from "react";
import { useQuery } from "react-query";
import { axiosConfig } from "../../utils/axiosConfig";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const AuthView = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["user"], async () => {
    const response = await axiosConfig.get("/");
    return response.data;
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !isLoading &&
      userName === data.data.user[0].login &&
      password === data.data.user[0].password
    ) {
      localStorage.setItem("isLogedIn", true);
      navigate("/user");
    }
  };

  if (localStorage.getItem("isLogedIn")) {
    return <Navigate to={"/user"} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Login
          </h2>

          <form className="mt-10" onSubmit={submitHandler}>
            <label
              htmlFor="text"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              User name
            </label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="User name"
              autoComplete="text"
              className="block w-full py-3 px-1 mt-2 
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthView;
