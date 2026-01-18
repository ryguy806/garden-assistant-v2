import PlantGroupModule from "../PlantProfileModules/Sections/PlantGroupModule";
import PlantNamesModule from "../PlantProfileModules/Sections/PlantNamesModule";
import PlantTypeModule from "../PlantProfileModules/Sections/PlantTypeModule";

type PlantProfileRightSegmentProps = {
    commonName: string;
    scientificName: string;
}

const PlantProfileRightSegment = ({ commonName, scientificName }: PlantProfileRightSegmentProps) => {

    return (
        <div className='flex w-1/2 flex-col h-full space-y-10 mt-0o'>
            <PlantNamesModule plantName={commonName} scientificName={scientificName}/>
            <PlantGroupModule plantGroup="perennial"/>
            <PlantTypeModule plantType="tree"/>
        </div>
    )
}

export default PlantProfileRightSegment;
