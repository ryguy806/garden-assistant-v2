import { useEffect, useState } from "react";
import { PlantDataType, RawDataType, fetchAllPlants } from "../../api/api";
import PlantProfile from "./PlantProfile";

const Yard = () => {

  const [plantData, setPlantData] = useState<PlantDataType[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect( () => {
    const getPlantData = async () => {
      let incomingPlantData = [] as PlantDataType[]
      const allPlantData = await fetchAllPlants()
      for (let plant in allPlantData.data) {
        incomingPlantData.push({
          'id': allPlantData.data[plant].id,
          'common_name': allPlantData.data[plant].common_name ? allPlantData.data[plant].common_name : undefined,
          'scientific_name': allPlantData.data[plant].scientific_name,
          'image_url': undefined,
          'slug': allPlantData.data[plant].slug,
      })
    }
    setPlantData(incomingPlantData)
    setIsLoading(false)}
    getPlantData().catch((err) => {
      setError(err.message)
    })
  }, [])

  if(error) return <div>Error: {error}</div>
  if(isLoading) return <div>Loading data...</div>

  return (
    <div className='container mx-auto'>
      <div>Here are your Plants</div>
      <div className='border-1 border-solid border-black-500 p-5'>
        <PlantProfile/>
      </div>
    </div>
  );
};

export default Yard;

const passDataToDB = (data: PlantDataType[]) => {
  data.forEach(plant => {
    // console.log(plant)

  })
}