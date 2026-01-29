import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { IndividualPlantDataType } from "../../api/api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { PlantProfileItems } from "wasp/client/crud";

const PlantProfile = () => {

  const { plant } = useParams<"plant">()

  const [individualPlantData, setIndividualPlantData] = useState<IndividualPlantDataType | null>(null)
  
  useEffect(() => {
    const {data, isLoading, isError} = (PlantProfileItems.get.useQuery({id: parseInt(plant!)}))

    if(data) {
      // setIndividualPlantData(data)
    }

  }, [])

  return (
    <div className=' flex flex-row mx-auto space-x-10 mt-0'>
      <PlantProfileQuickFacts plantProfile={individualPlantData!}/>
    </div>
  );
};

export default PlantProfile;