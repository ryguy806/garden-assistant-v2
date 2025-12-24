import { Link } from "wasp/client/router";
import "./Main.css";

export const MainPage = () => {
  return (
    <div className='container mx-auto -mt-20'>
      <div className='items-center'>
        <h1 className='text-xl font-bold'>Welcome to the Garden Assistant.</h1>
      </div>
      <div className='space-y-5'>
        <p>
          The Garden Assistant is a web application that allows users to manage
          their garden.
        </p>
        <div className='flex flex-row space-x-10 justify-center items-center'>
          <div>
            <Link to='/yard'>View Your Garden</Link>
          </div>
          <div>
            <Link to='/calendar'>Calendar</Link>
          </div>
          <div>
            <Link to='/journal'>Garden Journal</Link>
          </div>
        </div>
        <div className=' flex mx-auto justify-center'>
          <Link className='bg-green-400 p-2' to='/yard/plant-add'>
            Add Plant Button
          </Link>
        </div>
      </div>
    </div>
  );
};
