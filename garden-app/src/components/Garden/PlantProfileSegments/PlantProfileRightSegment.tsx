import PlantGroupModule from "../PlantProfileModules/Sections/PlantGroupModule";
import PlantLightModule from "../PlantProfileModules/Sections/PlantLightModule";
import PlantNamesModule from "../PlantProfileModules/Sections/PlantNamesModule";
import PlantTypeModule from "../PlantProfileModules/Sections/PlantTypeModule";

type PlantProfileRightSegmentProps = {
    commonName: string;
    scientificName: string;
    duration: string;
    growth_habit: string;
    light: string | null;
}

const PlantProfileRightSegment = ({ commonName, scientificName, duration, growth_habit, light }: PlantProfileRightSegmentProps) => {

    return (
        <div className='flex w-1/2 flex-col h-full space-y-5 mt-0'>
            <PlantNamesModule plantName={commonName} scientificName={scientificName}/>
            <PlantGroupModule plantGroup={growth_habit}/>
            <PlantTypeModule plantType={duration}/>
            <PlantLightModule light={light}/>
        </div>
    )
}

export default PlantProfileRightSegment;
