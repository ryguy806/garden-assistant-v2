import { env } from "wasp/server";
//This file is for all API functions.

export const API_BASE_URL = 'https://perenual.com/api/v2/'

export type PerenualPlantDataType = {
    data: {
        id: number,
        default_image: string,
        common_name: string,
        scientific_name: string,
    }
}

export type PerenualRawDataType = {
    data: {
        id: number,
        common_name: string,
        scientific_name: string[],
        other_name: string[],
        family: string,
        hybrid: string,
        authority: string,
        subspecies: string,
        cultivar: string,
        variety: string,
        species_epithet: string,
        genus: string,
        default_image: {
            license: 0,
            license_name: string,
            license_url: string,
            original_url: string,
            regular_url: string,
            medium_url: string,
            small_url: string,
            thumbnail: string,
        } 
    }[],
    to: number,
    per_page: number,
    current_page: number,
    from: number,
    last_page: number,
    total: number
}

export type PerenualIndividualPlantDataType = {
 data: {
        id: number,
        default_image: string,
        common_name: string,
        scientific_name: string,
        type: string,
        dimensions: {
            type: string,
            min_value: number,
            max_value: number,
            unit: string
        }[],
        cycle: string,
        watering: string,
        description: string,
        soil: string,
        sunlight: string,
        hardiness: {
            min: number,
            max: number
        }
    }
}

export type PerenualIndividualRawDataType = {
    data: {
        id: number,
        common_name: string,
        scientific_name: string[],
        other_name: string[],
        family: string,
        hybrid: true,
        authority: string,
        subspecies: string,
        cultivar: string,
        variety: string,
        species_epithet: string,
        genus: string,
        origin: string[],
        type: string,
        dimensions: {
            type: string,
            min_value: number,
            max_value: number,
            unit: string
        }[],
        cycle: string,
        attracts: string[],
        propagation: string[],
        hardiness: {
            min: string,
            max: string
        },
        hardiness_location: {
            full_url: string,
            full_iframe: string
        },
        watering: string,
        watering_general_benchmark: {
            value: string,
            unit: string
        },
        plant_anatomy: {
                part: string,
                color: string[]
        }[],
        sunlight: string[],
        pruning_month: string[],
        pruning_count: {
            amount: number,
            interval: string
        },
        seeds: true,
        maintenance: string,
        care_guides: string,
        soil: string[],
        growth_rate: string,
        drought_tolerant: true,
        salt_tolerant: true,
        thorny: true,
        invasive: true,
        tropical: true,
        indoor: true,
        care_level: string,
        pest_susceptibility: string[],
        flowers: true,
        flowering_season: string,
        cones: true,
        fruits: true,
        edible_fruit: true,
        harvest_season: string,
        leaf: true,
        edible_leaf: true,
        cuisine: true,
        medicinal: true,
        poisonous_to_humans: true,
        poisonous_to_pets: true,
        description: string,
        default_image: {
            license: number,
            license_name: string,
            license_url: string,
            original_url: string,
            regular_url: string,
            medium_url: string,
            small_url: string,
            thumbnail: string
        },
        other_images: {
            license: number,
            license_name: string,
            license_url: string,
            original_url: string,
            regular_url: string,
            medium_url: string,
            small_url: string,
            thumbnail: string
        }[],
    }
}

export const fetchAllPerenualPlants = async (): Promise<PerenualPlantDataType[]> => {
    let allPlantData: PerenualPlantDataType[] = []
    try {
        const response = await fetch(`${API_BASE_URL}species-list?key=${env.NEW_API_SECRET_KEY}`)
        if(!response.ok) {
            throw new Error(`Response Error status: ${response.status}`)
        }   
        const rawData: PerenualRawDataType = await response.json()
        rawData.data.map((plant) => {
            allPlantData.push({
                data: {
                    id: plant.id,
                    default_image: plant.default_image.original_url,
                    common_name: plant.common_name,
                    scientific_name: plant.scientific_name[0],
                }

            })
        })
    
        return allPlantData
    } catch (err) {
        console.log(`Error fetching plants: ${err}`)
        throw err
    }
}

//GET THE ID FROM THE SCIENTIFIC NAME, THEN pass along the ID to get the specific plant!
export const searchForPerenualPlants = async (searchTerm: string) => {

    if(searchTerm.length < 3) {
        return {data: [], to: 0, per_page: 0, current_page: 0, from: 0, last_page: 0, total: 0} as PerenualRawDataType
    }

    try {
        const response = await fetch(`${API_BASE_URL}species-list?q=${searchTerm}&&key=${env.NEW_API_SECRET_KEY}`)
        if (!response.ok) throw new Error(`Response Error status: ${response.status}`)
        const rawData: PerenualRawDataType = await response.json()

        return rawData

    } catch (err) {
        throw err
    }
}

export const lookForSpecificPerenualPlantScientificName = async (plantID: number): Promise<PerenualIndividualPlantDataType> => {
    let specificPlant: PerenualIndividualPlantDataType = {} as PerenualIndividualPlantDataType

    try {
        const response = await fetch(`${API_BASE_URL}species/details/${plantID}?key=${env.NEW_API_SECRET_KEY}`)
        if(!response.ok) {
            throw new Error(`Response Error status: ${response.status}`)
        }
        const rawData = await response.json()

        specificPlant = {
           data: {
            id: rawData.id,
            common_name: rawData.common_name,
            scientific_name: rawData.scientific_name[0],
            default_image: rawData.default_image.original_url,
            hardiness: {
                min: parseInt(rawData.hardiness.min),
                max: parseInt(rawData.hardiness.max),
            },
            watering: rawData.watering,
            sunlight: rawData.sunlight[0],
            cycle: rawData.cycle,
            description: rawData.description,
            dimensions: rawData.dimensions,
            soil: rawData.soil[0],
            type: rawData.type
           }
        }

        return specificPlant
    } catch (err) {
        console.log(`Error fetching specific plant: ${err}`)
        throw err
    }
}