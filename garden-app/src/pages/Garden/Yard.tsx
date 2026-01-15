import { useEffect, useState } from "react";
import Garden from "./Garden";
import {Link} from  'wasp/client/router';
import { PlantDataType, RawDataType, fetchAllPlants } from "../../api/api";

const Yard = () => {

  const [plantData, setPlantData] = useState<PlantDataType[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let data = fetchAllPlants()
    let incomingPlantData = [] as PlantDataType[]
    data ? data.then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        incomingPlantData.push({
          'id': res.data[i].id,
          'common_name': res.data[i].common_name ? res.data[i].common_name : undefined,
          'scientific_name': res.data[i].scientific_name,
          'image_url': undefined,
          'slug': res.data[i].slug,
          'family_common_name': res.data[i].family_common_name ? res.data[i].family_common_name : undefined
        })
      }
      setPlantData(incomingPlantData)
      setIsLoading(false)
    }).catch((err) => {
      setError(err.message)
    }) : [] as PlantDataType[]
  }, [])

  if(error) return <div>Error: {error}</div>
  if(isLoading) return <div>Loading data...</div>

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