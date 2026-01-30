import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import { IndividualPlantDataType } from 'wasp/src/api/api';

export type PlantProfileProps = {
    plantProfile: IndividualPlantDataType
}

const PlantProfileQuickFacts = ({plantProfile}: PlantProfileProps) => {

    return (
        <>
            <div className='flex flex-row h-full justify-between content-center'>
                <span className="flex w-7/12 flex-grow"><PlantProfileLeftSegment /></span>
                <PlantProfileCenterSegment plantPhotos={plantProfile["images"] ? plantProfile["images"] : plantProfile["images"]} image_url={plantProfile.image_url} />
                <PlantProfileRightSegment commonName={plantProfile.common_name ? plantProfile.common_name : plantProfile.scientific_name} scientificName={plantProfile.scientific_name} growth_habit={plantProfile.growth_habit ? plantProfile.growth_habit : ""} duration={plantProfile.duration ? plantProfile.duration[0] : ""} light={plantProfile.light} />
            </div>
        </>
    );
}

export default PlantProfileQuickFacts;