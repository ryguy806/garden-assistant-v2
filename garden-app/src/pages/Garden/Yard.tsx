import { useEffect, useState } from "react";
import { IndividualPlantDataType, PlantDataType } from "../../api/api";
import PlantProfile from "./PlantProfile";
import { lookForSpecificPlantScientificName } from "wasp/client/operations";

const Yard = () => {

  const [individualPlantData, setIndividualPlantData] = useState<IndividualPlantDataType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const getIndividualPlantData = async () => {
      const individualAPIPlantData: IndividualPlantDataType = await lookForSpecificPlantScientificName("Torilis arvensis subsp. arvensis")
      setIndividualPlantData(individualAPIPlantData)
      setIsLoading(false)
    }

    getIndividualPlantData().catch((err) => {
      setError(err.message)
    })
  }, [])
  
  if(error) return <div>Error: {error}</div>
  if(isLoading) return <div>Loading data...</div>
  
  return (
    <div className='container mx-auto'>
      <div className='border-1 border-solid border-black-500 p-5'>
        <PlantProfile plantProfile={individualPlantData ? individualPlantData : {} as IndividualPlantDataType}/>
      </div>
    </div>
  );
};

export default Yard;
