import Garden from "./Garden";
import {Link} from  'wasp/client/router';

const Yard = () => {
  return (
    <div className='container mx-auto'>
      <div>Here are your gardens</div>
      <div className='border-1 border-solid border-black-500 p-5'>
        <Garden />
      </div>
      <div className='flex flex-start'>
        <Link to='/yard/garden-add' className="bg-blue-300">
          Add Garden
        </Link>
      </div>
    </div>
  );
};

export default Yard;