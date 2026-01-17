import { useState } from "react";
import { PlantDataType } from "../../api/api";
import PlantProfile from "./PlantProfile";
import { getPlantAPIData, useQuery } from "wasp/client/operations";

const Yard = () => {

  const [plantData, setPlantData] = useState<PlantDataType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const allPlantAPIData = await getPlantAPIData()
  let incomingPlantData = [] as PlantDataType[]

  allPlantAPIData = allPlantAPIData ? allPlantAPIData : [] as PlantDataType[]

  allPlantAPIData.map((plant: PlantDataType) => {
    return {
      incomingPlantData.push({'id': plant.id, 'common_name': plant.common_name, 'scientific_name': plant.scientific_name, 'image_url': plant.image_url, 'slug': plant.slug})
    }
  })

  // useEffect( () => {
  //   const getPlantData = async () => {
  //     let incomingPlantData = [] as PlantDataType[]
  //     const allPlantData = await fetchAllPlants()
  //     for (let plant in allPlantData.data) {
  //       incomingPlantData.push({
  //         'id': allPlantData.data[plant].id,
  //         'common_name': allPlantData.data[plant].common_name ? allPlantData.data[plant].common_name : undefined,
  //         'scientific_name': allPlantData.data[plant].scientific_name,
  //         'image_url': undefined,
  //         'slug': allPlantData.data[plant].slug,
  //     })
  //   }
  //   setPlantData(incomingPlantData)
  //   setIsLoading(false)}
  //   getPlantData().catch((err) => {
  //     setError(err.message)
  //   })}, [])

  //   plantData ? setPlantData(plantData) : setPlantData([{id: 0, common_name: '', scientific_name: '', image_url: undefined, slug: ''}])

  if(error) return <div>Error: {error}</div>
  if(isLoading) return <div>Loading data...</div>

  return (
    <div className='container mx-auto'>
      <div>Here are your Plants</div>
      <div className='border-1 border-solid border-black-500 p-5'>
        <PlantProfile plantProfile={plantData[0]}/>
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