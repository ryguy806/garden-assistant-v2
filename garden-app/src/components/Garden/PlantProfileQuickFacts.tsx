import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import { PlantProfileProps } from '../../pages/Garden/PlantProfile';

const PlantProfileQuickFacts = ({plantProfile}: PlantProfileProps) => {

    return (
        <div className=' flex flex-row mx-auto justify-between content-center my-auto'>
            <PlantProfileLeftSegment />
            <PlantProfileCenterSegment plantPhotos={plantProfile.image_url ? [plantProfile.image_url] : []}/>
            <PlantProfileRightSegment commonName={plantProfile.common_name ? plantProfile.common_name : plantProfile.scientific_name} scientificName={plantProfile.scientific_name} />
        </div>
    );
}

export default PlantProfileQuickFacts;