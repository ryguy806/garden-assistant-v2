import { PlantProfileItems } from "wasp/client/crud";
import { useParams } from "react-router";
import PlantProfileQuickFacts from "../../components/Garden/PlantProfileQuickFacts";
import {useState, useEffect} from 'react'
import { IndividualPlantDataType, PlantDataType } from "../../api/api";

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