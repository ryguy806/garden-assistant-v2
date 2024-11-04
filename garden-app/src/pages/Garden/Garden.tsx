import { Link } from "wasp/client/router";
import PlantProfile from "./PlantProfile";

const Garden = () => {
  return (
    <div className='container mx-auto'>
      <div>Here are your plants</div>
      <div className='flex justify-between flex-col'>
        <div className='border-2 border-solid border-green-500 p-5'>
          <PlantProfile />
        </div>
        <div className='flex flex-start'>
          <Link to='/yard/plant-add' className='bg-green-400'>
            Add Plant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Garden;
