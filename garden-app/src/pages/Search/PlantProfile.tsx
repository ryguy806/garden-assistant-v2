import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import {PerenualIndividualPlantDataType} from "../../api/newApi"

type PlantProfileProps = {
  individualPlantData: PerenualIndividualPlantDataType
}

const PlantProfile = ({individualPlantData}: PlantProfileProps ) => {

  return (
    <div className=' flex flex-row mx-auto space-x-10 mt-0'>
      <PlantProfileQuickFacts plantProfile={individualPlantData!}/>
    </div>
  );
};

export default PlantProfile;