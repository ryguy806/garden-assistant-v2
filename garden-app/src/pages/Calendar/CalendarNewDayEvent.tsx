import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CalendarItems } from "wasp/client/crud";

const CalendarNewDayEvent = () => {
  const createCalendarItem = CalendarItems.create.useAction();

  const { day } = useParams<"day">();

  const dayAsDate = new Date(day!).toISOString().substring(0, 10);

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
            defaultValue={dayAsDate}
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

export default CalendarNewDayEvent;
