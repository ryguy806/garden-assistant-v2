type LocationsModuleProps = {
    plantLocations: string[];
}

const LocationsModule = ({ plantLocations }: LocationsModuleProps) => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Location: {plantLocations}
        </div>
    )
}

export default LocationsModule;