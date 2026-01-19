import { env } from "wasp/server";
import { GetPlantAPIData } from "wasp/server/operations";
import { PlantItems } from "wasp/client/crud";
//This file is for all API functions.

export const API_BASE_URL = 'https://trefle.io/api/v1/species'

export type PlantDataType = {
    'id': number;
    'common_name': string | null | undefined;
    'scientific_name': string;
    'image_url': string | null | undefined;
    'slug': string;
}

export type IndividualPlantDataType = {
    'id': number;
    'common_name': string | null | undefined;
    'scientific_name': string;
    "images": {
        "flower": ImageFieldType[],
        "leaf": ImageFieldType[],
        "habit": ImageFieldType[],
        "fruit": ImageFieldType[],
        "bark": ImageFieldType[],
        "other": ImageFieldType[],
    },
    'slug': string;
}

export type RawDataType = {
    "data": [
        {
            "author": string | null,
            "bibliography": string | null,
            "common_name": string | null,
            "family": string,
            "family_common_name": string | null,
            "genus": string,
            "genus_id": number,
            "id": number,
            "image_url": string | null,
            "links": {
                "genus": string,
                "plant": string,
                "self": string,
            },
            "plant_id": number,
            "rank": string,
            "scientific_name": string,
            "slug": string,
            "status": string,
            "synonyms": string[],
            "year": number
        },
    ],
    "links": {
        "first": string,
        "last": string,
        "next": string,
        "self": string
    },
    "meta": {
        "total": number
    }
}

type ImageFieldType = {
    "id" : number,
    "image_url": string,
    "copyright": string | null,
}

type ZoneType = {
    "id": number,
    "name": string,
    "slug": string,
    "tdwg_code": string,
    "tdwg_level": number,
    "species_count": number,
    "links": {
        "self": string,
        "plant": string,
        "species": string,
    },
}

export type RawIndividualDataType = {
    "data": {
        "author": string | null,
        "bibliography": string | null,
        "common_name": string | null,
        "duration": string[] | null,
        "distribution": {
            "native": ZoneType[] | null,
            "introduced": ZoneType[] | null,
            "doubtful": ZoneType[] | null,
            "absent": ZoneType[] | null,
            "extinct": ZoneType[] | null,
        },
        "edible_parts": (string | null)[] | null,
        "edible": boolean | null,
        "flower": {
            "color": (string | null)[] | null,
            "conspicuous": boolean | null,
        }
        "foliage": {
            "texture": string | null,
            "color": (string | null)[] | null,
            "leaf_retention": boolean | null,
        }
        "fruit_or_seed": {
            "conspicuous": boolean | null,
            "color": (string | null)[] | null,
            "shape": string | null,
            "seed_persistance": boolean | null,
        },
        "vegetable": boolean | null,
        "family": string,
        "family_common_name": string | null,
        "genus": string,
        "genus_id": number,
        "growth": {
            "days_to_harvest": number | null,
            "description": string | null,
            "sowing": string | null,
            "ph_max": number | null,
            "ph_min": number | null,
            "light": number | null,
            "atmospheric_humidity": number | null,
            "growth_months": (string | null)[] | null,
            "fruit_months": (string | null)[] | null,
            "row_spacing": {
                'cm': number | null,
            },
            "spread": {
                'cm': number | null,
            },
            "minimum_precipitation": {
                'mm': number | null,
            },
            "maximum_precipitation": {
                'mm': number | null,
            },
            "minimum_root_depth": {
                "cm": number | null,
            },
            "minimum_temperature": {
                "deg_f": number | null,
                "deg_c": number | null,
            },
            "maximum_temperature": {
                "deg_f": number | null,
                "deg_c": number | null,
            },
            "soil_nutriments": number | null,
            "soil_salinity": number | null,
            "soil_texture": string | null,
            "soil_humidity": string | null,
        },
        "observations": string,
        "id": number,
        "images": {
            "flower": ImageFieldType[],
            "leaf": ImageFieldType[],
            "habit": ImageFieldType[],
            "fruit": ImageFieldType[],
            "bark": ImageFieldType[],
            "other": ImageFieldType[],
        },
        "links": {
            "genus": string,
            "plant": string,
            "self": string,
        },
        "plant_id": number,
        "rank": string,
        "scientific_name": string,
        "slug": string,
        "specifications": {
            "ligneous_type": string | null,
            "growth_habit": string | null,
            "growth_rate": string | null,
            "growth_form": string | null,
            "average_height": {
                "cm": number | null,
            },
            "max_height": {
                "cm": number | null,
            },
            "nitrogen_fixation": string | null,
            "shape_and_orientation": string | null,
            "toxicity": string | null,
        }
        "status": string,
        "synonyms": {
            "id": number,
            "author": string | null,
            "name": string,
        }[],
        "sources" :{
            "id": number,
            "name": string,
            "citation": string | null
            "url": string | null,
            "last_update": string
        },
        "year": number | null
        "extras": any
    },
    "meta": {
        "total": number
    }
}

export const fetchAllPlants = async (): Promise<PlantDataType[]> => {
    let allPlantData: PlantDataType[] = []
    try {
        const response = await fetch(`${API_BASE_URL}?token=${env.API_SECRET_KEY}`)
        if(!response.ok) {
            throw new Error(`Response Error status: ${response.status}`)
        }   
        const rawData: RawDataType = await response.json()
        rawData.data.map((plant) => {
            allPlantData.push({
                'id': plant.id,
                'common_name': plant.common_name,
                'scientific_name': plant.scientific_name,
                'image_url': plant.image_url,
                'slug': plant.slug
            })
        })
    
        return allPlantData
    } catch (err) {
        console.log(`Error fetching plants: ${err}`)
        throw err
    }
}

export const lookForSpecificPlant = async (plantScientificName: string): Promise<IndividualPlantDataType> => {
    let specificPlant: IndividualPlantDataType = {} as IndividualPlantDataType
    try {
        const response = await fetch(`${API_BASE_URL}?token=${env.API_SECRET_KEY}&filter[scientific_name]=${plantScientificName}`)
        if(!response.ok) {
            throw new Error(`Response Error status: ${response.status}`)
        }   
        const rawData: RawIndividualDataType = await response.json()
    
        specificPlant = {
            "id": rawData.data.id,
            "common_name": rawData.data.common_name,
            "scientific_name": rawData.data.scientific_name,
            "images": rawData.data.images,
            "slug": rawData.data.slug,
        }

        return specificPlant
    } catch (err) {
        console.log(`Error fetching specific plant: ${err}`)
        throw err
    }
}