const CreateExpense = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] gap-2 items-center p-[2%]">
      <h1 className="text-right ">날짜</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="YYYY-MM-DD"
        type="text"
      />
      <h1 className="text-right">가격</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="0"
        type="number"
      />
      <button className="border p-2 w-[5rem] h-[1.7rem]">저장</button>

      <h1 className="text-right">항목</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 항목"
        type="text"
      />
      <h1 className="text-right">내용</h1>
      <input
        className="border bg-white w-[15rem] h-[1.7rem] placeholder:p-2 placeholder:text-[15px]"
        placeholder="지출 내용"
        type="text"
      />
      <button className="border p-2 w-[5rem] h-[1.7rem]">취소</button>
    </div>
  );
};

export default CreateExpense;
