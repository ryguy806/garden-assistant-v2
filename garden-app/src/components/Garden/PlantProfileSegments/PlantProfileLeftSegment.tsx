import DescriptionModule from "../PlantProfileModules/Sections/DescriptionModule";
import LocationsModule from "../PlantProfileModules/Sections/LocationsModule";

type PlantProfileLeftSegmentProps = {
    description: string
}

const PlantProfileLeftSegment = ({description}: PlantProfileLeftSegmentProps) => {

    return (
        <div className='flex w-full flex-col h-full justify-between space-y-4 mt-0'>
            <LocationsModule/>
            <div className="flex h-auto">
                <DescriptionModule plantDescription={description}/>
            </div>
        </div>
    )
}

export default PlantProfileLeftSegment;
