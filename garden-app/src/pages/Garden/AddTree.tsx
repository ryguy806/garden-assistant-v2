import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TreeItems } from "wasp/client/crud";

const AddTree = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate to the home page after creating the Tree item
  const createTreeItem = TreeItems.create.useAction();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const TreeName = target.TreeName.value;

    target.reset();
    await createTreeItem({ name: TreeName });
    navigate(`/Tree/${TreeName}`);
  };

  return (
    <div className='mx-auto mt-32 p-24'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
        <label
          htmlFor='TreeName'
          className='underline flex flex-row justify-between'
        >
          Tree Name:
          <input
            type='text'
            id='TreeName'
            name='TreeName'
            className='border-2 w-8/12'
          />
        </label>
        <button type='submit' className='border-2 bg-green-300'>
          Add Tree
        </button>
      </form>
    </div>
  );
};

export default AddTree;
