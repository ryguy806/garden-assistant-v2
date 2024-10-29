import { CalendarItems } from "wasp/client/crud";
import { Link } from "wasp/client/router";
import { CalendarItem } from "wasp/entities";

const CalendarDayView = () => {
  const { data, isLoading, error } = CalendarItems.getAll.useQuery();
  const allEvents = data ?? [];

  const pathname = decodeURI(window.location.pathname).toString();

  const todayEvents = allEvents.filter(
    (a) => a.eventDate.toDateString() === pathname.substring(10)
  );

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading data!</>;

  return (
    <div className='size-full flex flex-col'>
      <div className='text-3xl underline mb-5 mx-auto'>Event List:</div>
      {todayEvents.length !== 0 ? (
        <div className='space-y-10 m-auto w-3/4'>
          {todayEvents.map((item: CalendarItem, i: number) => (
            <div className='flex flex-col border-2 border-green-500' key={i}>
              <div className='text-lg pl-16 border-b-2 border-green-500'>
                - {item.title}
              </div>
              <div className='flex flex-col pl-24'>
                <div>{item.details}</div>
                <div>{item.createdDate.toDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex m-auto'>NO EVENTS PLANNED FOR TODAY!</div>
      )}
      <div className='ml-24 mt-10'>
        <div className='border-2 p-2 bg-green-400 w-40 mt-3'>
          <Link
            to='/calendar/:day/new'
            params={{ day: pathname.substring(10) }}
          >
            Add New Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalendarDayView;
