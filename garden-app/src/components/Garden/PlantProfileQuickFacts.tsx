import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import {useState} from 'react'

const PlantProfileQuickFacts = () => {

    return (
        <div className=' flex flex-row mx-auto justify-between mt-24'>
            <PlantProfileLeftSegment />
            <PlantProfileCenterSegment />
            <PlantProfileRightSegment />
        </div>
    );
}

export default PlantProfileQuickFacts;