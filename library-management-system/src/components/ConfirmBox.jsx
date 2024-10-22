import axios from "axios";
import React, { useEffect, useState } from "react";

function ConfirmBox({
  setToSubmit,
  bookToSubmit,
  setSelectSubmit,
  setToGetUserId,
}) {
  const [penalty, setPenalty] = useState(0);

  useEffect(() => {
    getPenalty(bookToSubmit.returnDate.substr(0, 10), getTodayDate());
  }, [bookToSubmit]);

  const getPenalty = (returnedDate, todayDate) => {
    let date1 = new Date(returnedDate);
    let date2 = new Date(todayDate);

    let Difference_In_Time = date2.getTime() - date1.getTime();

    let Difference_In_Days = Math.round(
      Difference_In_Time / (1000 * 3600 * 24),
    );

    console.log(
      "Total number of days between dates:\n" +
        date1.toDateString() +
        " and " +
        date2.toDateString() +
        " is: " +
        Difference_In_Days +
        " days",
    );
    const Penalty = +Difference_In_Days * 5 > 0 ? Difference_In_Days * 5 : "0";
    console.log(Penalty);
    setPenalty(Penalty);
    // return Penalty
  };
  const getTodayDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate); // "17-6-2022"
    return currentDate;
  };

  const handleComplete = () => {
    setToSubmit(false);
    setToGetUserId(true);
    setSelectSubmit(true);
  };
  const handleSubmit = async () => {
    axios
      .delete("http://localhost:8000/admin/submitBook", {
        data: {
          userId: bookToSubmit.userId,
          bookId: bookToSubmit.bookId,
          penalty: penalty,
          returnedDate: getTodayDate(),
        },
      })
      .then((res) => {
        // if()
        if (res.data.result.status) {
          alert("Submitted Successfully");
          setToSubmit(false);
          setToGetUserId(true);
        }
      });
  };

  return (
    <div className="mt-4 flex justify-center h-[100%] items-center ">
      <div className="bg-[#3B3B41] font-bold  h-[100%] text-white  rounded-lg p-4 text-xl w-[50%] ">
        <div className="">
          {" "}
          <label>User Id</label> : {bookToSubmit.userId}
        </div>
        <div className="">
          {" "}
          <label>BookId</label> : {bookToSubmit.bookId}
        </div>
        <div className="">
          {" "}
          <label>IssueDate</label> : {bookToSubmit.issueDate.substr(0, 10)}
        </div>
        <div className="">
          {" "}
          <label>ReturnDate</label> : {bookToSubmit.returnDate.substr(0, 10)}
        </div>
        <div className="">
          {" "}
          <label>BookName</label> : {bookToSubmit.book.bookName}
        </div>
        <div className="">
          {" "}
          <label>Author</label> : {bookToSubmit.book.author}
        </div>
        <div className="">
          {" "}
          <label>Returning Date</label> : {getTodayDate()}
        </div>
        <div className="">
          {" "}
          <label>Penalty</label> : Rs. {penalty}
        </div>

        <div className="w-full p-2 flex justify-between items-center">
          <button
            onClick={handleSubmit}
            className="p-2 bg-white text-black rounded-lg "
          >
            Submit
          </button>
          <button
            onClick={handleComplete}
            className="p-2 bg-white text-black rounded-lg "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;
