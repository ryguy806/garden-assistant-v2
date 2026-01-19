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

export const fetchAllPlants = async (): Promise<PlantDataType[]> => {
    let pageNumber = 1
    let allPlantData: PlantDataType[] = []
    try {
        while (pageNumber < 20865){
        const response = await fetch(`${API_BASE_URL}?token=${env.API_SECRET_KEY}&page=${pageNumber}`)
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
        pageNumber++
        }
        return allPlantData
    } catch (err) {
        console.log(`Error fetching plants: ${err}`)
        throw err
    }
}