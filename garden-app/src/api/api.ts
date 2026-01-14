import { defineEnvValidationSchema } from "wasp/env";
import * as z from 'zod';
import { env } from "wasp/server";
//This file is for all API functions.

export type PlantDataType = {
    'id': number;
    'common_name'?: string;
    'scientific_name': string;
    'image_url'?: string;
    'slug': string;
    'family_common_name'?: string
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

const API_BASE_URL = 'https://trefle.io'

// export const envValidationSchema = defineEnvValidationSchema(
//     z.object({
//         API_SECRET_KEY: z.string({
//             required_error: 'API_SECRET_KEY is required.'
//         }),
//     })
// )

// export const fetchAllPlants = async (): Promise<RawDataType> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/api/v1/plants?token=${env.API_SECRET_KEY}`)
//         if(!response.ok) {
//             throw new Error(`Response Error status: ${response.status}`)
//         }
//         const rawData: RawDataType = await response.json()
//         return rawData
//     } catch (err) {
//         console.log(`Error fetching plants: ${err}`)
//         throw err
//     }
// }