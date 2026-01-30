import { capitalizeWords } from "../../../../pages/Journal/JournalView";

type PlantNamesModuleProps = {
    plantName: string;
    scientificName: string;
}

const PlantNamesModule = ({ plantName = "", scientificName = "" }: PlantNamesModuleProps) => {
    return (
        <div className='flex flex-col items-center border-black border-2 p-4'>
            <div className="text-2xl font-bold">{capitalizeWords(plantName)}</div>
            <div className="text-md font-normal"><i>{scientificName}</i></div>
        </div>
    )
}

export default PlantNamesModule;