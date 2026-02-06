import { PerenualPlantProfileItems, PlantProfileItems } from "wasp/client/crud"
import PlantProfile from "./PlantProfile"
import { lookForSpecificPerenualPlantScientificName, lookForSpecificPlantScientificName } from "wasp/client/operations"
import { useParams } from "react-router"
import { IndividualPlantDataType } from "../../api/api"
import { useState } from "react"
import { PerenualIndividualPlantDataType } from "../../api/newApi"

const PlantProfileAPI = () => {
    const {plant} = useParams()

    // const createPlantItem = PlantProfileItems.create.useAction()
    const createPerenualPlantItem = PerenualPlantProfileItems.create.useAction()

    const [clickedButton, setClickedButton] = useState(false)

    const handleAddPlantButton = async () => {
        try {
            const data: PerenualIndividualPlantDataType = await lookForSpecificPerenualPlantScientificName(parseInt(plant!))
            createPerenualPlantItem({
                id: data.data.id,
                common_name: data.data.common_name!,
                scientific_name: data.data.scientific_name,
                cycle: data.data.cycle,
                type: data.data.type,
                default_image: data.data.default_image,
                soil: data.data.soil[0],
                dimensions: data.data.dimensions,
                sunlight: data.data.sunlight[0],
                watering: data.data.watering,
                hardiness: data.data.hardiness
            })
        } catch(err) {
            throw err
        }

        setClickedButton(true)
    }

    return (
        <div className="flex flex-col h-full ">
            <div className="flex m-auto size-full object-fill">
                <PlantProfile/>
            </div>
            <div className="flex flex-col m-auto p-10 space-y-5 h-full">
                {!clickedButton && (
                    <>
                        <div className="flex m-auto">
                            Add plant to your garden?
                        </div>
                        <button className='border border-green-300 bg-green-300 h-full' onClick={handleAddPlantButton}>Add Plant</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default PlantProfileAPI