import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Button from "../../components/Button";

const UserView = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["user"], async () => {
    const response = await axiosConfig.get("/");
    return response.data;
  });

  return (
    <section className=" bg-gray-100 flex font-medium items-center justify-center h-screen">
      <section className=" w-[40rem] mx-auto bg-white rounded-2xl px-8 py-6 shadow-lg">
        <div className="mt-6 flex items-start gap-5 ">
          <img
            src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
            className="rounded-full w-28 "
            alt="profile picture"
          />

          <div>
            <h1 className="text-gray-600">About:</h1>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              rerum similique recusandae cupiditate? Sit cum, molestiae unde
              dignissimos harum ipsam dolore eum magni! Consequuntur, cumque
              nobis aut magni perspiciatis fuga!
            </p>
          </div>
        </div>

        <div className="mt-8 ">
          <h2 className="text-gray-800 font-bold text-2xl tracking-wide">
            {!isLoading && data.data.user[0].login}
          </h2>
        </div>
        <p className="text-emerald-500 font-semibold mt-2.5">Active</p>

        <div className="h-1 w-full bg-black mt-8 rounded-full">
          <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
        </div>
        <div className="mt-3 text-gray-800 text-sm">
          <span className="text-gray-600 font-semibold">Storage: </span>
          <span>40%</span>
        </div>

        <Button
          onClick={() => {
            navigate("/");
            localStorage.removeItem("isLogedIn");
          }}
        >
          Logout
        </Button>
      </section>
    </section>
  );
};

export default UserView;
