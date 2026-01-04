import PlantGroupModule from "../PlantProfileModules/Sections/PlantGroupModule";
import PlantNamesModule from "../PlantProfileModules/Sections/PlantNamesModule";
import PlantTypeModule from "../PlantProfileModules/Sections/PlantTypeModule";

const PlantProfileRightSegment = () => {

    return (
        <div className='flex w-1/2 flex-col space-y-4'>
            <PlantNamesModule plantName="big tree" scientificName="bigitus tree-itus"/>
            <PlantGroupModule plantGroup="perennial"/>
            <PlantTypeModule plantType="tree"/>
        </div>
    )
}

export default PlantProfileRightSegment;
