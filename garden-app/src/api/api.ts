import { env } from "wasp/server";
//This file is for all API functions.

export const API_BASE_URL = 'https://trefle.io/api/v1/plants'

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

export const fetchAllPlants = async (): Promise<RawDataType> => {
    try {
        const response = await fetch(`${API_BASE_URL}?token=${env.API_SECRET_KEY}`)
        if(!response.ok) {
            throw new Error(`Response Error status: ${response.status}`)
        }
        const rawData: RawDataType = await response.json()
        return rawData
    } catch (err) {
        console.log(`Error fetching plants: ${err}`)
        throw err
    }
}