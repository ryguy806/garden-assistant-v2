import DescriptionModule from "../PlantProfileModules/Sections/DescriptionModule";
import LocationsModule from "../PlantProfileModules/Sections/LocationsModule";

const PlantProfileLeftSegment = () => {

    return (
        <div className='flex w-1/2 flex-col h-full space-y-10 mt-0'>
            <LocationsModule/>
            <DescriptionModule plantDescription="This is the description of the plant."/>
        </div>
    )
}

export default PlantProfileLeftSegment;
