import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantGroupModuleProps = {
    plantGroup: string;
}

const PlantGroupModule = ({ plantGroup = "" }: PlantGroupModuleProps) => {
    return (
        <div className='flex text-3xl font-bold mx-auto justify-center'>
            {toSentenceCase(plantGroup)}
        </div>
    )
}

export default PlantGroupModule;