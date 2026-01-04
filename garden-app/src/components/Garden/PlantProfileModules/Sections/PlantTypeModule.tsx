import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantTypeModuleProps = {
    plantType: string;
}

const PlantTypeModule = ({ plantType = "" }: PlantTypeModuleProps) => {

    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            {toSentenceCase(plantType)}
        </div>
    )
}

export default PlantTypeModule;