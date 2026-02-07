import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import { IndividualPlantDataType } from "../../api/api";
import {PerenualIndividualPlantDataType} from "../../api/newApi"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { lookForSpecificPlantScientificName, lookForSpecificPerenualPlantScientificName } from "wasp/client/operations";

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