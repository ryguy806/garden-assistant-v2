import PlantGroupModule from "../PlantProfileModules/Sections/PlantGroupModule";
import PlantLightModule from "../PlantProfileModules/Sections/PlantLightModule";
import PlantNamesModule from "../PlantProfileModules/Sections/PlantNamesModule";
import PlantTypeModule from "../PlantProfileModules/Sections/PlantTypeModule";

type PlantProfileRightSegmentProps = {
    commonName: string;
    scientificName: string;
    duration: string;
    ligneousType: string;
    light: number | null;
}

const PlantProfileRightSegment = ({ commonName, scientificName, duration, ligneousType, light }: PlantProfileRightSegmentProps) => {

    return (
        <div className='flex w-1/2 flex-col h-full space-y-5 mt-0'>
            <PlantNamesModule plantName={commonName} scientificName={scientificName}/>
            <PlantGroupModule plantGroup={ligneousType}/>
            <PlantTypeModule plantType={duration}/>
            <PlantLightModule light={light}/>
        </div>
    )
}

export default PlantProfileRightSegment;
