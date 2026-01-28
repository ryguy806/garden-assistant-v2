import PlantProfile from "../Garden/PlantProfile"

const PlantProfileAPI = () => {

    const handleAddPlantButton = () => {

    }

    return (
        <div className="flex flex-col size-full">
            <div className="flex m-auto">
                <PlantProfile/>
            </div>
            <div className="flex flex-col mt-5 m-auto">
                <div>
                    Add plant to your garden?
                </div>
                <button className='border border-green-300 bg-green-300'>Add Plant</button>
            </div>
        </div>
    )
}

export default PlantProfileAPI