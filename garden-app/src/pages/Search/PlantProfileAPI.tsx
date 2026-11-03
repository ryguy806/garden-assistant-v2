import { PerenualPlantProfileItems } from "wasp/client/crud"
import PlantProfile from "./PlantProfile"
import { lookForSpecificPerenualPlantScientificName } from "wasp/client/operations"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { PerenualIndividualPlantDataType } from "../../api/newApi"

const PlantProfileAPI = () => {
    const {plant} = useParams()

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
                plant_id: individualPlantData.data.id,
                common_name: individualPlantData.data.common_name!,
                scientific_name: individualPlantData.data.scientific_name,
                cycle: individualPlantData.data.cycle,
                type: individualPlantData.data.type,
                default_image: individualPlantData.data.default_image,
                soil: individualPlantData.data.soil ? individualPlantData.data.soil : "No data.",
                dimensions: individualPlantData.data.dimensions,
                sunlight: individualPlantData.data.sunlight,
                watering: individualPlantData.data.watering,
                hardiness: individualPlantData.data.hardiness,
                description: individualPlantData.data.description,
                pest_susceptibility: individualPlantData.data.pest_susceptibility,
                flowering_season: individualPlantData.data.flowering_season,
                growth_rate: individualPlantData.data.growth_rate,
                attracts: individualPlantData.data.attracts,
                pruning_months: individualPlantData.data.pruning_months,
                maintenance: individualPlantData.data.maintenance
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
            <div className="flex m-auto size-full object-fill p-4">
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