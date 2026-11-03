type HardinessModuleProps = {
    plantHardiness: {
        min: number;
        max: number;
    }
}

const HardinessModule = ({ plantHardiness = { min: 0, max: 0 } }: HardinessModuleProps) => {
    return (
        <div className='flex flex-row w-1/2 text-xl rounded-lg font-normal items-start border-black border-2 p-2'>
            <div className="font-bold">{plantHardiness.min !== plantHardiness.max ? "Zones:" : "Zone: "}</div>
            {plantHardiness.min !== plantHardiness.max ? (<div className="flex mx-auto text-lg"><p>{plantHardiness.min} - {plantHardiness.max}</p></div>) : (<div className="flex m-auto text-lg"><p>{plantHardiness.min}</p></div>)}
        </div>
    )
}

export default HardinessModule;