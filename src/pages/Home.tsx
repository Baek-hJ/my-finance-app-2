import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
      <div className=" p-[1rem] border-2 bg-[#CFDCDC] size-40 w-[80%] md:w-[70%] md:h-[80%]">
      <h1 className="font-semibold">my-finace-app/3</h1>
        {/* <div className="border size-32 md:h-[70%] md:w-[99%] bg-white"> */}
        <div>
        <MonthNavigation />
        </div>
        <div className="p-[1rem] border size-32 md:h-[70%] md:w-[99%] bg-white overflow-y-scroll border ">
        <ExpenseList />
        </div>
        {/* </div> */}
        <CreateExpense />
      </div>
    </div>
  );
};

export default Home;
