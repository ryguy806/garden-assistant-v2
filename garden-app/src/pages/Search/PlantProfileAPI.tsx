import { PlantProfileItems } from "wasp/client/crud"
import PlantProfile from "./PlantProfile"
import { lookForSpecificPlantScientificName } from "wasp/client/operations"
import { useParams } from "react-router"
import { IndividualPlantDataType } from "../../api/api"
import { useState } from "react"

const PlantProfileAPI = () => {
    const {plant} = useParams()

    const createPlantItem = PlantProfileItems.create.useAction()

    const [clickedButton, setClickedButton] = useState(false)

    const handleAddPlantButton = async () => {
        try {
            const data: IndividualPlantDataType = await lookForSpecificPlantScientificName(parseInt(plant!))
            createPlantItem({
                id: data.id,
                common_name: data.common_name!,
                scientific_name: data.scientific_name,
                slug: data.slug,
                growth_habit: data.growth_habit,
                light: data.light,
                image_url: data.image_url,
                images: data.images,
                duration: data.duration
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