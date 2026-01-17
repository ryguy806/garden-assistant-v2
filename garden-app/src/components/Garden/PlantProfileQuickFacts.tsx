import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import {useState} from 'react'
import { PlantProfileProps } from '../../pages/Garden/PlantProfile';

const PlantProfileQuickFacts = ({plantProfile}: PlantProfileProps) => {

    return (
        <div className=' flex flex-row mx-auto justify-between mt-24'>
            <PlantProfileLeftSegment />
            <PlantProfileCenterSegment />
            <PlantProfileRightSegment commonName={plantProfile.common_name ? plantProfile.common_name : ''} scientificName={plantProfile.scientific_name} />
        </div>
    );
}

export default PlantProfileQuickFacts;