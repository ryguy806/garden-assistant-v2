type PlantLightModuleProps = {
    light: string | null;
}

const PlantLightModule = ({ light }: PlantLightModuleProps) => {

    return (
        <div className='flex flex-col items-center border-black border-2 p-4'>
            {light !== null ? (
                <>
                <div className="mb-4 text-2xl">Light Requirements:</div>
                <div className="flex flex-row items-center w-full space-x-2">
                    <p className="text-lg">{light}</p>
                </div>
                
                </>
            ): (
                <p><i>light data unavailable</i></p>
                )
            }       
        </div>
    )
}

export default PlantLightModule;

