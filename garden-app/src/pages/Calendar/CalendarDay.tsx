import star from "../..//assets/images/star.png";
import { Link } from "wasp/client/router";
import { CalendarItems } from "wasp/client/crud";

interface CalenderDayProps {
  date: Date;
}

const CalendarDays = ({ date }: CalenderDayProps) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  const {
    data: eventItems,
    isLoading,
    error,
  } = CalendarItems.getAll.useQuery();

  const calendarItems = eventItems ?? [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === date.toDateString(),
      hasTasks:
        calendarItems.filter(
          (items) =>
            items.eventDate.getDate() + 1 === day &&
            items.eventDate.getMonth() === firstDayOfMonth.getMonth() &&
            items.eventDate.getFullYear() === firstDayOfMonth.getFullYear()
        ).length > 0,
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='w-full flex flex-grow flex-wrap justify-center box-border text-sm'>
      {currentDays.map((day, i) => {
        return (
          <Link
            to={`/calendar/:day`}
            params={{ day: day.date.toDateString() }}
            className='w-[125px] h-[65px] relative border-2 border-solid border-black'
            key={i}
          >
            <p
              className={`absolute right-[10px] text-[#a6a6a6] ${
                day.selected ? "text-red-500" : ""
              } ${day.currentMonth ? "text-black" : ""} `}
            >
              {day.number}
            </p>
            {day.hasTasks ? (
              <img src={star} alt='star' className='h-1/2 w-auto' />
            ) : (
              <span />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default CalendarDays;