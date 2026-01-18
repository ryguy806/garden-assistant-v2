import { useState } from "react";


const LocationsModule = () => {

    const [locationsSet, setLocationsSet] = useState<boolean>(false);
    const [locations, setLocations] = useState<string[]>([]);

    return (
        <div className='flex flex-col items-start border-2 border-black p-4'>
            <div className="text-3xl font-bold">Locations:</div>
            <div className="text-lg font-normal">
                {locationsSet ? (
                    <p>List of locations will go here.</p>
                ) : (
                    <p>No locations set for this plant yet.</p>
                )}
            </div>
        </div>
    )
}

export default LocationsModule;