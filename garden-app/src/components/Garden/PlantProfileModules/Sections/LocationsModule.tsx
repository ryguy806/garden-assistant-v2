const LocationsModule = (plantLocation = "") => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Location: {plantLocation}
        </div>
    )
}

export default LocationsModule;