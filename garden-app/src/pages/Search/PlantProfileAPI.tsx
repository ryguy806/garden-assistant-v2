import PlantProfile from "../Garden/PlantProfile"

const PlantProfileAPI = () => {

    const handleAddPlantButton = () => {

    }

    return (
        <div className="flex flex-col h-full ">
            <div className="flex m-auto size-full object-fill">
                <PlantProfile/>
            </div>
            <div className="flex flex-col m-auto p-10 space-y-5 h-full">
                <div className="flex m-auto">
                    Add plant to your garden?
                </div>
                <button className='border border-green-300 bg-green-300 h-full'>Add Plant</button>
            </div>
        </div>
    )
}

export default PlantProfileAPI