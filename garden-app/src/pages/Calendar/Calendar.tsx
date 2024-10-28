import { useState } from "react";
import CalendarDays from "./CalendarDay";
import { Link } from "wasp/client/router";

const Calendar = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date(Date.now());

  const [dateToUse, setDateToUse] = useState(currentDate);

  const handleMonthChangeNext = () => {
    setDateToUse(new Date(dateToUse.setMonth(dateToUse.getMonth() + 1)));
  };

  const handleMonthChangePrev = () => {
    setDateToUse(new Date(dateToUse.setMonth(dateToUse.getMonth() - 1)));
  };

  return (
    <div className='w-[900px] h-[600px] flex flex-col'>
      <div className='font-bold text-lg items-center'>
        {months[dateToUse.getMonth()]} {dateToUse.getFullYear()}
      </div>
      <div className='h-auto w-full flex items-center'>
        <p className='text-sm'>
          Today's Date:{" "}
          {months[currentDate.getMonth()] +
            " " +
            currentDate.getDate() +
            ", " +
            currentDate.getFullYear()}
        </p>
      </div>
      <div className='flex flex-grow flex-col w-100'>
        <div className='h-[70px] w-full flex items-center justify-around'>
          <button
            className='w-[100px] h-[40px] bg-[#a9a9a9] text-white'
            onClick={handleMonthChangePrev}
          >
            Prev
          </button>
          {weekdays.map((day: String, i: number) => {
            return (
              <div className='w-[100px] text-center text-sm' key={i}>
                {day}
              </div>
            );
          })}
          <button
            className='w-[100px] h-[40px] bg-[#a9a9a9] text-white'
            onClick={handleMonthChangeNext}
          >
            Next
          </button>
        </div>
        <div>
          <CalendarDays date={dateToUse} />
        </div>
        <div className='border-2 p-2 bg-green-400 w-40 mt-3'>
          <Link to='/calendar/new'>Add New Event</Link>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
