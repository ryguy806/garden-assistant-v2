import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import { PerenualIndividualPlantDataType } from 'wasp/src/api/newApi';

export type PlantProfileProps = {
    plantProfile: PerenualIndividualPlantDataType
}

const PlantProfileQuickFacts = ({plantProfile}: PlantProfileProps) => {

    return (
        <>
            <div className='flex flex-row h-full justify-between content-center'>
                <span className="flex w-7/12 flex-grow">
                    <PlantProfileLeftSegment description={plantProfile.data.description}/>
                </span>
                <PlantProfileCenterSegment image_url={plantProfile.data.default_image} />
                <PlantProfileRightSegment commonName={plantProfile.data.common_name ? plantProfile.data.common_name : plantProfile.data.scientific_name} scientificName={plantProfile.data.scientific_name} growth_habit={plantProfile.data.type} duration={plantProfile.data.cycle} light={plantProfile.data.sunlight} />
            </div>
        </>
    );
}

export default PlantProfileQuickFacts;