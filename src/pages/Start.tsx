import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
      <img
        src="/folder.png"
        alt="Folder"
        className="h-[13rem] cursor-pointer m-[1rem]"
        onClick={() => navigate("/home")}
      />
      <h1 className="text-5xl font-sans font-bold">my-finance-app</h1>
    </div>
  );
};

export default Start;
