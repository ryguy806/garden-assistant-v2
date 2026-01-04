import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantNamesModuleProps = {
    plantName: string;
    scientificName: string;
}

const PlantNamesModule = ({ plantName = "", scientificName = "" }: PlantNamesModuleProps) => {
    return (
        <div className='flex flex-col text-3xl font-bold bg-blue-300 items-center'>
            <div>{toSentenceCase(plantName)}</div>
            <div><i>{scientificName}</i></div>
        </div>
    )
}

export default PlantNamesModule;