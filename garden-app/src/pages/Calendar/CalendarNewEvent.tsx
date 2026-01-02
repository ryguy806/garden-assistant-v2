import { createCalendarItem } from "wasp/client/operations";

const CalendarNewEvent = () => {
  const handleFormSubmit = async (event: {
    preventDefault: () => void;
    target: any;
  }) => {
    console.log(event.target);
    event.preventDefault();
    try {
      const target = event.target;
      const title = target.title;
      const details = target.details;
      const eventDate = target.eventDate;
      const description = target.description.value;
      target.reset();
      await createCalendarItem({ title, details, eventDate });
    } catch (error) {
      window.alert("Error(s) while creating event.");
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className='flex flex-col space-y-5'>
        <label htmlFor='title' className='underline'>
          Title:
          <input
            type='text'
            id='title'
            name='title'
            className='border-2 ml-5'
          />
        </label>
        <label htmlFor='date' className='underline'>
          Date:
          <input type='date' id='date' name='date' className='border-2 ml-5' />
        </label>

        <label htmlFor='details' className='underline'>
          Details:{" "}
          <textarea id='details' name='details' className='border-2 ml-5' />
        </label>

        <button type='submit' className='border-2 bg-green-300'>
          Add Event
        </button>
      </form>
    </div>
  );
};

export default CalendarNewEvent;
