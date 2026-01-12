import DescriptionModule from "../PlantProfileModules/Sections/DescriptionModule";
import LocationsModule from "../PlantProfileModules/Sections/LocationsModule";

const PlantProfileLeftSegment = () => {

    return (
        <div className='flex w-1/2 flex-col space-y-4'>
            <LocationsModule/>
            <DescriptionModule plantDescription="This is the description of the plant."/>
        </div>
    )
}

export default PlantProfileLeftSegment;
