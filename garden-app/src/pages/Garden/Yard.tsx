import Garden from "./Garden";

const Yard = () => {
  return (
    <div className='container mx-auto'>
      <div>Here are your gardens</div>
      <div className='border-0 border-solid border-blue-600 p-5'>
        <Garden />
      </div>
    </div>
  );
};

export default Yard;
