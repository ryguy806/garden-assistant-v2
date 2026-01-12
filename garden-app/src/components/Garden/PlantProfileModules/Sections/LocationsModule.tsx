type LocationsModuleProps = {
    plantLocations: string[];
}

const LocationsModule = ({ plantLocations }: LocationsModuleProps) => {
    return (
        <div className='flex flex-col text-3xl font-bold items-center'>
            <div>Locations:</div>
            <div>{plantLocations}</div>
        </div>
    )
}

export default LocationsModule;