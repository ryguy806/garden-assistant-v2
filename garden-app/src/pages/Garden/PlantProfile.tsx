import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { useParams } from "react-router";
import { getPerenualPlantById, useQuery } from "wasp/client/operations";
import { PerenualIndividualPlantDataType } from "../../api/newApi";
import JournalView from "../Journal/JournalView";
import { useAuth } from "wasp/client/auth";

const PlantProfile = () => {

  const {data: user} = useAuth()

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
      attracts: data.attracts ? convertSpeciesToArray(data.attracts) : [],
      pruning_months: data.pruning_months ? convertMonthToArray(data.pruning_months) : [],
      pest_susceptibility: data.pest_susceptibility ? convertSpeciesToArray(data.pest_susceptibility) : [],
      flowering_season: data.flowering_season,
      growth_rate: data.growth_rate,
      maintenance: data.maintenance
    }
  } : {} as PerenualIndividualPlantDataType

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading plant data: {error.message}</div>

  return (
    <div className=' flex flex-col m-10 py-10 h-screen space-y-10'>
        <PlantProfileQuickFacts plantProfile={individualPlantData}/>
        <JournalView user={user!}/>
    </div>
  );
};

export default PlantProfile;

const convertSpeciesToArray = (array: {species: string}[]): string[] => {
  let newArray: string[] = []
  
  array.map((item) => {
    newArray.push(item.species)
  })

  return newArray
}

const convertMonthToArray = (array: {id: number, month: string}[]): string[] => {
  let newArray: string[] = []
  
  array.map((item) => {
    newArray.push(item.month)
  })

  return newArray
}