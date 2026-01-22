import {Sun, CloudSun} from 'lucide-react'

type PlantLightModuleProps = {
    light: number | null;
}

const PlantLightModule = ({ light }: PlantLightModuleProps) => {

    return (
        <div className='flex flex-col items-center border-black border-2 p-4'>
            {light !== null ? (
                <>
                <div className="mb-4 text-2xl">Light Requirements:</div>
                <div className="flex flex-row items-center w-full space-x-2">
                    <CloudSun color="#133963" />
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        value={light}
                        className="w-full h-2 bg-gradient-to-r from-black to-white border-black border-2 rounded-lg appearance-none accent-green-500 cursor-default range-sm"
                    />
                    <Sun color={"#f4bf2f"}/>
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

