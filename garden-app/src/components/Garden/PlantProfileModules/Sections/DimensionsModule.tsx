import { toSentenceCase } from "../../../../pages/Journal/JournalView"

type DimensionsModuleProps = {
    plantDimensions: {
        type: string | null
        min_value: number,
        max_value: number,
        unit: string
    }[]
}

const DimensionsModule = ({ plantDimensions }: DimensionsModuleProps) => {

    return (
        <div className='w-1/2 text-xl h-7/8 rounded-lg font-normal items-start border-black border-2 p-2'>
            {
                plantDimensions && 
                plantDimensions.map((dimension, index) => (
                    <div key={index} className="flex flex-row w-full">
                        {dimension.type ? (<div className="font-bold">{toSentenceCase(dimension.type)}:</div>) : "Height:"}
                        <div className="m-auto text-lg"><p>{dimension.min_value !== dimension.max_value ? (dimension.min_value + "-" + dimension.max_value) : (dimension.max_value)} {dimension.unit}</p></div>
                    </div>
                ))
            }
        </div>
    )
}

export default DimensionsModule;

