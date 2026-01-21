import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import { PlantProfileProps } from '../../pages/Garden/PlantProfile';

const PlantProfileQuickFacts = ({plantProfile}: PlantProfileProps) => {

    return (
        <div className=' flex flex-row mx-auto justify-between content-center my-auto'>
            <PlantProfileLeftSegment />
            <PlantProfileCenterSegment plantPhotos={plantProfile["images"] ? plantProfile["images"] : plantProfile["images"]} />
            <PlantProfileRightSegment commonName={plantProfile.common_name ? plantProfile.common_name : plantProfile.scientific_name} scientificName={plantProfile.scientific_name} ligneousType={plantProfile.ligneous_type ? plantProfile.ligneous_type : ""} duration={plantProfile.duration ? plantProfile.duration[0] : ""} />
        </div>
    );
}

export default PlantProfileQuickFacts;