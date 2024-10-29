import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GardenMapItems } from "wasp/client/crud";

const AddGarden = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate to the home page after creating the garden item
  const createGardenItem = GardenMapItems.create.useAction();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const gardenName = target.gardenName.value;

    target.reset();
    await createGardenItem({ name: gardenName });
    navigate(`/garden/${gardenName}`);
  };

  return (
    <div className='mx-auto mt-32 p-24'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
        <label
          htmlFor='gardenName'
          className='underline flex flex-row justify-between'
        >
          Garden Name:
          <input
            type='text'
            id='gardenName'
            name='gardenName'
            className='border-2 w-8/12'
          />
        </label>
        <button type='submit' className='border-2 bg-green-300'>
          Add Garden
        </button>
      </form>
    </div>
  );
};

export default AddGarden;
