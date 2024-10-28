import React from "react";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router";
import treeIcon from "../../assets/icons/tree.png";
import appleIcon from "../../assets/icons/apple.png";
import bushIcon from "../../assets/icons/bush.png";
import carrotIcon from "../../assets/icons/carrot.png";
import flowerIcon from "../../assets/icons/flower.png";
import herbIcon from "../../assets/icons/herb.png";

const Garden = () => {
  const { garden } = useParams<"garden">();

  const bedName = "Bed";

  return (
    <div className=' flex flex-col mx-auto space-y-5 mt-24'>
      <div className='flex justify-center'>
        This will be the individual garden map. It will be where items are
        dropped in.
      </div>
      <div className='text-xl font-bold'>{titleCase(garden as string)}</div>
      <div>Click on a garden bed to view the interactive beds.</div>
      <div>Map layout and List layout.</div>
      <div>Drag and drop icons to populate the beds.</div>
      <div>
        Each bed will be a droppable container that you can drag icons to and
        label them accordingly. Each icon will be a link to information about
        the type of plant at that location.
      </div>
      <div className='flex flex-row'>
        <div>5 different plant profiles to use:</div>
        <ul className=' ml-10 list-inside'>
          <li className='flex flex-row list-disc'>
            Tree <img className='size-1/12' src={treeIcon} alt='tree' />
          </li>
          <li className='flex flex-row list-disc'>
            Shrub <img className='size-1/12' src={bushIcon} alt='shrub' />
          </li>
          <li className='flex flex-row list-disc'>
            Flower <img className='size-1/12' src={flowerIcon} alt='flower' />
          </li>
          <li className='flex flex-row list-disc'>
            Vegetable{" "}
            <img className='size-1/12' src={carrotIcon} alt='carrot' />
          </li>
          <li className='flex flex-row list-disc'>
            Fruit <img className='size-1/12' src={appleIcon} alt='apple' />
          </li>
          <li className='flex flex-row list-disc'>
            Herb <img className='size-1/12' src={herbIcon} alt='herb' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Garden;
