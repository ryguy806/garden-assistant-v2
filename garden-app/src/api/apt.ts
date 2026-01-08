import { defineEnvValidationSchema } from "wasp/env";
import * as z from 'zod';
import { env } from "wasp/server";
//This file is for all API functions.

type PlantDataType = {
    'id': number;
    'common_name'?: string;
    'scientific_name': string;
    'image_url'?: string;
    'slug': string;
    'family_common_name'?: string
}

export const envValidationSchema = defineEnvValidationSchema(
    z.object({
        API_SECRET_KEY: z.string({
            required_error: 'API_SECRET_KEY is required.'
        }),
    })
)

// export const fetchPlants = async () => {
//     var data: PlantDataType = {
//         id: 0,
//         scientific_name: "",
//         slug: ""
//     }
//     try {
//         const response = await fetch(`${env.API_SECRET_KEY}`)
//     }
// }