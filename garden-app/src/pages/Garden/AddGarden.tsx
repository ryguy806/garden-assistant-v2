import { ChangeEvent, FormEvent, useState } from "react";
import { GardenMapItems } from "wasp/client/crud";

const AddGarden = () => {
  const createGardenItem = GardenMapItems.create.useAction();

  const [group, setGroup] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      const name = target.gardenName.value;
      target.reset();
      createGardenItem({
        name
      });
    } catch (error: any) {
      window.alert("Error: Failed to add garden item." + error.message);
    }
  };

  return (
    <div className='container w-1/2 mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
        <label htmlFor='gardenName'>Garden Name:</label>
        <input
          className='border-b-2'
          type='text'
          id='gardenName'
          name='gardenName'
        />
        <button className='border-2 bg-green-300' type='submit'>
          Add Garden
        </button>
      </form>
    </div>
  );
};

export default AddGarden;