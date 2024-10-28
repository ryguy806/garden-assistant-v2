import React from "react";
import { useParams } from "react-router-dom";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";

const GardenBed = () => {
  const { garden, bedName } = useParams<"garden" | "bedName">();

  return (
    <div className='flex flex-col mx-auto mt-24'>
      <div>
        {titleCase(garden as string)}: {titleCase(bedName as string)}
      </div>
    </div>
  );
};

export default GardenBed;
