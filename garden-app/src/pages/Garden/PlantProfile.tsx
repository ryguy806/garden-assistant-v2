import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { useParams } from "react-router";
import { getPlantById, getPerenualPlantById, useQuery } from "wasp/client/operations";
import { IndividualPlantDataType } from "../../api/api";
import JournalView from "wasp/src/pages/Journal/JournalView";
import { AuthUserData, makeAuthUserIfPossible } from "wasp/auth/user";
import { PerenualIndividualPlantDataType } from "../../api/newApi";

const PlantProfile = () => {

  const { plant } = useParams<"plant">()
  
  const { data, isLoading, error} = useQuery(getPerenualPlantById, {id: parseInt(plant!)})

  // const individualPlantData: IndividualPlantDataType = data ? {
  //   id: data.id,
  //   common_name: data.common_name,
  //   scientific_name: data.scientific_name,
  //   slug: data.slug,
  //   image_url: data.image_url,
  //   images: {
  //     flower: [],
  //     leaf: [],
  //     bark: [],
  //     habit: [],
  //     other: [],
  //     fruit: []
  //   },
  //   duration: [""],
  //   growth_habit: data.growth_habit,
  //   light: data.light,
  // } : {} as IndividualPlantDataType

  const individualPlantData: PerenualIndividualPlantDataType = data ? {
    data: {
      id: data.id,
      common_name: data.common_name,
      scientific_name: data.scientific_name,
      cycle: data.cycle,
      type: data.type,
      hardiness: {
        min: 0,
        max: 1,
      },
      default_image: data.default_image,
      description: data.description,
      soil: data.soil,
      dimensions: [],
      sunlight: data.sunlight,
      watering: data.watering,
    }
  } : {} as PerenualIndividualPlantDataType

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading plant data: {error.message}</div>

  return (
    <div className=' flex flex-col m-10 py-10 pb-24 h-screen space-y-10 mt-0'>
        <PlantProfileQuickFacts plantProfile={individualPlantData}/>
    </div>
  );
};

export default PlantProfile;