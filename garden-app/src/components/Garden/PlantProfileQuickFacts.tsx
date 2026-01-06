import PlantProfileLeftSegment from '../PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from '../PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from '../PlantProfileSegments/PlantProfileRightSegment';

const PlantProfileQuickFacts = () => {
    return (
        <div className=' flex flex-row mx-auto space-x-10 mt-24'>
            <PlantProfileLeftSegment />
            <PlantProfileCenterSegment />
            <PlantProfileRightSegment />
        </div>
    );
}

export default PlantProfileQuickFacts;