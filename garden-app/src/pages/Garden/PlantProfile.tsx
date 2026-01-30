import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { useParams } from "react-router";
import { getPlantById, useQuery } from "wasp/client/operations";
import { IndividualPlantDataType } from "../../api/api";

const PlantProfile = () => {

  const { plant } = useParams<"plant">()
  
  const { data, isLoading, error} = useQuery(getPlantById, {id: parseInt(plant!)})

  const individualPlantData: IndividualPlantDataType = data ? {
    id: data.id,
    common_name: data.common_name,
    scientific_name: data.scientific_name,
    slug: data.slug,
    image_url: data.image_url,
    images: {
      flower: [],
      leaf: [],
      bark: [],
      habit: [],
      other: [],
      fruit: []
    },
    duration: [],
    growth_habit: data.growth_habit,
    light: data.light,
  } : {} as IndividualPlantDataType

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading plant data: {error.message}</div>

  return (
    <div className=' flex flex-row mx-auto space-x-10 mt-0'>
      <PlantProfileQuickFacts plantProfile={individualPlantData}/>
    </div>
  );
};

export default PlantProfile;