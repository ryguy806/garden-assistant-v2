import { useState } from "react";


const LocationsModule = () => {

    const [locationsSet, setLocationsSet] = useState<boolean>(false);
    const [locations, setLocations] = useState<string[]>([]);

    return (
        <div className='flex flex-col text-3xl font-bold items-center'>
            <div>Locations:</div>
            <div>
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