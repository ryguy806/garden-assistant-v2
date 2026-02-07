import { PerenualPlantProfileItems } from "wasp/client/crud"
import PlantProfile from "./PlantProfile"
import { lookForSpecificPerenualPlantScientificName } from "wasp/client/operations"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { PerenualIndividualPlantDataType } from "../../api/newApi"

const PlantProfileAPI = () => {
    const {plant} = useParams()

    // const createPlantItem = PlantProfileItems.create.useAction()
    const createPerenualPlantItem = PerenualPlantProfileItems.create.useAction()

    const [clickedButton, setClickedButton] = useState(false)
    const [individualPlantData, setIndividualPlantData] = useState<PerenualIndividualPlantDataType>({} as PerenualIndividualPlantDataType)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getIndividualPlantData = async () => {
            const plantData: PerenualIndividualPlantDataType = await lookForSpecificPerenualPlantScientificName(parseInt(plant!))
            setIndividualPlantData(plantData)
            setIsLoading(false)
        }

        try {
            getIndividualPlantData().catch((err) => {
                setError(err)
            })
        } catch (err) {
            throw err
        }
    }, [])

    const handleAddPlantButton = async () => {
        try {
            createPerenualPlantItem({
                id: individualPlantData.data.id,
                common_name: individualPlantData.data.common_name!,
                scientific_name: individualPlantData.data.scientific_name,
                cycle: individualPlantData.data.cycle,
                type: individualPlantData.data.type,
                default_image: individualPlantData.data.default_image,
                soil: individualPlantData.data.soil[0],
                dimensions: individualPlantData.data.dimensions,
                sunlight: individualPlantData.data.sunlight[0],
                watering: individualPlantData.data.watering,
                hardiness: individualPlantData.data.hardiness,
                description: individualPlantData.data.description
            })
        } catch(err) {
            throw err
        }

        setClickedButton(true)
    }

    if(isLoading) return (<div>Loading...</div>)
    if(error) return (<div>Error: {error}</div>)

    return (
        <div className="flex flex-col h-full ">
            <div className="flex m-auto size-full object-fill">
                <PlantProfile individualPlantData={individualPlantData}/>
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