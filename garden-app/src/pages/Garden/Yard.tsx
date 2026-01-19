import { useEffect, useState } from "react";
import { IndividualPlantDataType, PlantDataType, RawDataType } from "../../api/api";
import PlantProfile from "./PlantProfile";
import { getPlantAPIData } from "wasp/client/operations";
import { PlantItems } from "wasp/client/crud";

const Yard = () => {

  const [plantData, setPlantData] = useState<PlantDataType[]>([])
  const [individualPlantData, setIndividualPlantData] = useState<IndividualPlantDataType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {

  //   const getIndividualPlantData = async () => {
  //     // const individualPlantData = await lookForSpecificPlant("Sorbus aucuparia")
  //   }

  //   getIndividualPlantData().catch((err) => {
  //     setError(err.message)
  //   }

  //   // let incomingPlantData = [] as PlantDataType[]
  //   // const getPlantData = async () => {
  //   //   const allPlantAPIData = await getPlantAPIData()
  //   //   const data = allPlantAPIData ? allPlantAPIData : []

  //   //   data.map((plant) => {
  //   //     return (      
  //   //       incomingPlantData.push({
  //   //         'id': plant.id,
  //   //         'common_name': plant.common_name,
  //   //         'scientific_name': plant.scientific_name,
  //   //         'image_url': plant.image_url,
  //   //         'slug': plant.slug
  //   //       })
  //   //     )
  //   //   })

  //   //   setPlantData(incomingPlantData)
  //   //   setIsLoading(false)
  //   // }
  //   // getPlantData().catch((err) => {
  //   //   setError(err.message)
  //   // })
  // }, [])
  
  if(error) return <div>Error: {error}</div>
  if(isLoading) return <div>Loading data...</div>
  
  return (
    <div className='container mx-auto'>
      <div className='border-1 border-solid border-black-500 p-5'>
        <PlantProfile plantProfile={plantData[19]}/>
      </div>
    </div>
  );
};

export default Yard;
