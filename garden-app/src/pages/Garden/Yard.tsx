import { useEffect, useState } from "react";
import { PlantProfileItems } from "wasp/client/crud";
import { useQuery, getAllPlants } from "wasp/client/operations";
import { Link } from "wasp/client/router";

type PlantDataType = {
    id: number;
    userId: number;
    createdDate: Date;
    common_name: string | null;
    scientific_name: string;
    slug: string;
    growth_habit: string | null;
    light: number | null;
    image_url: string | null;
}

const Yard = () => {

  const {data, isLoading, error} = useQuery(getAllPlants)

  const plants = data ? data : []
  
  return (
    <div className='container mx-auto'>
      {plants && <PlantList plantList={plants}/>}

      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading data: {error.message}</div>}
    </div>
  );
};

export default Yard;

type PlantListProps = {
  plantList: PlantDataType[]
}

const PlantList = ({plantList}: PlantListProps) => {
  return (
    <>
      {
        plantList.map((plant) => {
          <Link key={plant.id} to="/yard/:plant" params={{plant: plant.id}}>
            <div>
              {plant.common_name && `${plant.common_name} | `}{plant.scientific_name}
            </div>
          </Link>
        })
      }
    </>
  )
}

