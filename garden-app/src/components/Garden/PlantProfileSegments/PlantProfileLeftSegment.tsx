import DescriptionModule from "../PlantProfileModules/Sections/DescriptionModule";
import LocationsModule from "../PlantProfileModules/Sections/LocationsModule";

type PlantProfileLeftSegmentProps = {
    description: string
}

const PlantProfileLeftSegment = ({description}: PlantProfileLeftSegmentProps) => {

    return (
        <div className='flex w-full flex-col h-full space-y-5 mt-0'>
            <LocationsModule/>
            <div className="flex h-3/4">
                <DescriptionModule plantDescription={description}/>
            </div>
        </div>
    )
}

export default PlantProfileLeftSegment;
