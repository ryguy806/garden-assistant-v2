import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { IndividualPlantDataType } from "../../api/api";

export type PlantProfileProps = {
  plantProfile: IndividualPlantDataType
}

const PlantProfile = ({plantProfile}: PlantProfileProps) => {

  return (
    <div className=' flex flex-row mx-auto space-x-10 mt-0'>
      <PlantProfileQuickFacts plantProfile={plantProfile}/>
    </div>
  );
};

export default PlantProfile;