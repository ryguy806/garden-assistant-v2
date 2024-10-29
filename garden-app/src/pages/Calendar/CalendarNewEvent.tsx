import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CalendarItems } from "wasp/client/crud";

const convertStringToMonth = (month: string) => {
  let monthNum = 1;
  if (month === "Jan") monthNum = 1;
  if (month === "Feb") monthNum = 2;
  if (month === "Mar") monthNum = 3;
  if (month === "Apr") monthNum = 4;
  if (month === "May") monthNum = 5;
  if (month === "Jun") monthNum = 6;
  if (month === "Jul") monthNum = 7;
  if (month === "Aug") monthNum = 8;
  if (month === "Sep") monthNum = 9;
  if (month === "Oct") monthNum = 10;
  if (month === "Nov") monthNum = 11;
  if (month === "Dec") monthNum = 12;
  return monthNum;
};

const convertURLtoDate = (dayAsParam: string) => {
  const newDate = new Date();

  const year = parseInt(dayAsParam.substring(-4));
  const month = convertStringToMonth(dayAsParam.substring(6, 8));
  const day = parseInt(dayAsParam.substring(10, 12));

  newDate.setFullYear(year);
  newDate.setMonth(month);
  newDate.setDate(day);

  return newDate;
};

const CalendarNewEvent = () => {
  const createCalendarItem = CalendarItems.create.useAction();

  const { day } = useParams<"day">();
  // console.log(day);

  // if (day) console.log(convertURLtoDate(day.toString()));

  const navigate = useNavigate();
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;

      const eventName = target.eventName.value;
      const date = new Date(target.date.value);
      const details = target.details.value;

      target.reset();
      await createCalendarItem({
        title: eventName,
        eventDate: new Date(date.setDate(date.getDate() + 1)),
        details,
      });
      navigate(`/calendar/${date.toDateString()}`);
    } catch (err: any) {
      window.alert("Error: " + err.message);
    }
  };

  return (
    <div className='mx-auto mt-32 p-24'>
      <form onSubmit={handleFormSubmit} className='flex flex-col space-y-5'>
        <label
          htmlFor='eventName'
          className='underline flex flex-row justify-between'
        >
          <div>Event Name:</div>
          <input
            type='text'
            id='eventName'
            name='eventName'
            defaultValue={""}
            className='border-2 w-8/12'
          />
        </label>
        <label
          htmlFor='date'
          className='underline flex flex-row justify-between'
        >
          Date:
          <input
            type='date'
            id='date'
            name='date'
            className='border-2 w-8/12'
            defaultValue={day ? day : ""}
          />
        </label>

        <label
          htmlFor='details'
          className='underline flex flex-row justify-between'
        >
          Details:{" "}
          <textarea id='details' name='details' className='border-2 w-8/12' />
        </label>
        <button type='submit' className='border-2 bg-green-300'>
          Add Event
        </button>
      </form>
    </div>
  );
};

export default CalendarNewEvent;
