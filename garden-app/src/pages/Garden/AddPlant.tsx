import { ChangeEvent, FormEvent, useState } from "react";
import { PlantProfileItems } from "wasp/client/crud";

const AddPlant = () => {
  const createPlantProfileItem = PlantProfileItems.create.useAction();

  const [group, setGroup] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      const name = target.plantName.value;
      const imageURL = target.image.value;
      const plantedDate = new Date(target.plantedDate.value);
      const garden = target.location.value;
      const type = target.type.value;
      const group = target.group.value;
      const details = target.details.value;
      const fertilizerNeeds = target.fertilizerNeeds.value;

      target.reset();
      createPlantProfileItem({
        name,
        plantedDate,
        imageURL,
        group,
        garden,
        type,
        details,
        fertilizerNeeds,
        notes: [],
      });
    } catch (error: any) {
      window.alert("Error: Failed to add plant profile item." + error.message);
    }
  };

  return (
    <div className='container w-1/2 mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
        <label htmlFor='plantName'>Plant Name:</label>
        <input
          className='border-b-2'
          type='text'
          id='plantName'
          name='plantName'
        />
        <label htmlFor='image'>Plant Image:</label>
        <input className='border-2' type='text' name='image' id='image' /> *This
        will be the image input for now.
        {/* <label htmlFor='image' className='flex flex-row'>
          <input
            name='image'
            type='file'
            accept='image/*'
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (!event.target.files) return;
              setPreview(URL.createObjectURL(event.target.files[0]));
            }}
          />
          <img className='h-16 w-auto' src={preview} alt={preview} />
        </label> */}
        <label htmlFor='plantedDate'>Date Planted:</label>
        <input
          className='border-2'
          type='date'
          id='plantedDate'
          name='plantedDate'
        />
        <label htmlFor='location'>Location:</label>
        <input
          className='border-b-2'
          type='text'
          id='location'
          name='location'
        />
        <label htmlFor='fertilizerNeeds'>Fertilizer Needs:</label>
        <input
          className='border-b-2'
          type='text'
          id='fertilizerNeeds'
          name='fertilizerNeeds'
        />
        <label htmlFor='details'>Details:</label>
        <input className='border-b-2' type='text' id='details' name='details' />
        <label htmlFor='group'>Group:</label>
        <select
          name='group'
          id='group'
          value={group}
          onChange={(e) => setGroup(e.currentTarget.value)}
        >
          <option value=''>Select Group</option>
          <option value='flower'>Flower</option>
          <option value='fruit'>Fruit</option>
          <option value='herb'>Herb</option>
          <option value='shrub'>Shrub</option>
          <option value='tree'>Tree</option>
          <option value='vegetable'>Vegetable</option>
        </select>
        <label htmlFor='type'>Type:</label>
        <select name='type' id='type'>
          <option value='annual'>Annual</option>
          <option value='biennial'>Biennial</option>
          <option value='perennial'>Perennial</option>
        </select>
        <button className='border-2 bg-green-300' type='submit'>
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
