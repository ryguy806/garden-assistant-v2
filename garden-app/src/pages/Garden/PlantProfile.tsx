import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { IndividualPlantDataType } from "../../api/api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { lookForSpecificPlantScientificName } from "wasp/client/operations";

const PlantProfile = () => {

  const { plant } = useParams<"plant">()

  const [individualPlantData, setIndividualPlantData] = useState<IndividualPlantDataType | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
  
      const getIndividualPlantData = async () => {
        const individualAPIPlantData: IndividualPlantDataType = await lookForSpecificPlantScientificName(parseInt(plant!))
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
    <div className=' flex flex-row mx-auto space-x-10 mt-0'>
      <PlantProfileQuickFacts plantProfile={individualPlantData!}/>
    </div>
  );
};

export default PlantProfile;