import { Link } from "wasp/client/router";
import "./Main.css";

export const MainPage = () => {
  
  return (
    <div className='container mx-auto -mt-20'>
      <div className='flex flex-col items-center mx-auto'>
        <h1 className='text-xl font-bold'>Welcome to BumbleBot!</h1>
        <p>Brought to you by the Bumbling Botanist!</p>
      </div>
      <div className='space-y-5'>
        <p>
          Manage your garden better with plant identification and garden management!
        </p>
        <div className='flex flex-row space-x-10 justify-center items-center'>
          <div>
            <Link to='/yard'>Plant Profiles</Link>
          </div>
          {/* <div>
            <Link to='/calendar'>Calendar</Link>
          </div>
          <div>
            <Link to='/journal'>Garden Journal</Link>
          </div> */}
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
