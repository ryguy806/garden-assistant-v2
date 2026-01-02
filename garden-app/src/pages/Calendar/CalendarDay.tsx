import { useQuery } from "wasp/client/operations";
import { getAllCalendarItems } from "wasp/client/operations";
import star from "../..//assets/images/star.png";
import { CalendarItem } from "wasp/entities";
import { GetResult } from "@prisma/client/runtime";
import { Link } from "wasp/client/router";

interface CalenderDayProps {
  date: Date;
}

const CalendarDays = ({ date }: CalenderDayProps) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];
  let incomingEvents: GetResult<
    {
      id: number;
      title: string;
      createdDate: Date;
      eventDate: Date;
      details: string;
      userId: number;
    },
    never
  >[] = [];

  const { data: eventItems, isLoading, error } = useQuery(getAllCalendarItems);

  if (eventItems) {
    incomingEvents = eventItems;
  }

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
        incomingEvents.filter(
          (items) =>
            items.eventDate.getDate() === day &&
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
