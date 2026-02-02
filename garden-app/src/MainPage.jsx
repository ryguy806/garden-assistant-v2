import { Link } from "wasp/client/router";
import "./Main.css";
import bumblebot from './assets/images/BumbleBot.png'

export const MainPage = () => {
  
  return (
    <div className='container mx-auto -mt-20'>
      <div className='flex flex-row h-1/2 w-auto space-x-10'>
        <div className="h-1/4 w-auto">
          <img src={bumblebot} alt="Bumblebot"/>
        </div>
        <div className='flex flex-col items-center justify-center mx-auto space-y-2 my-12'>
          <h1 className='text-3xl'>Welcome to BumbleBot!</h1>
          <p>Brought to you by the Bumbling Botanist!</p>
          <div className='space-y-5'>
            <p>
              Manage your garden better with plant identification and garden management!
            </p>
            <div className='flex flex-row justify-center items-center'>
              <div className="flex border-2 mx-auto justify-center p-5">
                <Link to='/yard'>My Plants  </Link>
              </div>
              <div className="flex border-2 mx-auto justify-center p-5">
                <Link to='/search'>Plant Look-up</Link>
              </div>
              {/* <div>
                <Link to='/calendar'>Calendar</Link>
              </div>
              <div>
                <Link to='/journal'>Garden Journal</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
