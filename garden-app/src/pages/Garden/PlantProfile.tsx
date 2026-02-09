import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { useParams } from "react-router";
import { getPerenualPlantById, useQuery } from "wasp/client/operations";
import { PerenualIndividualPlantDataType } from "../../api/newApi";

const PlantProfile = () => {

  const { plant } = useParams<"plant">()
  
  const { data, isLoading, error} = useQuery(getPerenualPlantById, {id: parseInt(plant!)})

  const individualPlantData: PerenualIndividualPlantDataType = data ? {
    data: {
      id: data.id,
      common_name: data.common_name,
      scientific_name: data.scientific_name,
      cycle: data.cycle,
      type: data.type,
      hardiness: {
        min: data.hardiness ? data.hardiness.min : 0,
        max: data.hardiness ? data.hardiness.max : 0,
      },
      default_image: data.default_image,
      description: data.description,
      soil: data.soil,
      dimensions: data.dimensions,
      sunlight: data.sunlight,
      watering: data.watering,
    }
  } : {} as PerenualIndividualPlantDataType

  console.log("Individual Plant Data: ", individualPlantData)

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading plant data: {error.message}</div>

  return (
    <div className=' flex flex-col m-10 py-10 pb-24 h-screen space-y-10 mt-0'>
        <PlantProfileQuickFacts plantProfile={individualPlantData}/>
    </div>
  );
};

export default PlantProfile;