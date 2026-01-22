import DescriptionModule from "../PlantProfileModules/Sections/DescriptionModule";
import LocationsModule from "../PlantProfileModules/Sections/LocationsModule";

const PlantProfileLeftSegment = () => {

    return (
        <div className='flex w-full flex-col h-full space-y-5 mt-0'>
            <LocationsModule/>
            <div className="flex h-full flex-grow">
                <DescriptionModule plantDescription="This is the description of the plant."/>
            </div>
        </div>
    )
}

export default PlantProfileLeftSegment;
