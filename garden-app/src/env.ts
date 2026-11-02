import * as z from "zod"

import { defineEnvValidationSchema } from "wasp/env"

export const serverEnvValidationSchema = defineEnvValidationSchema(
  z.object({
    NEW_API_SECRET_KEY: z.string({
      error: "NEW_API_SECRET_KEY is required.",
    }),
  })
)

export const clientEnvValidationSchema = defineEnvValidationSchema(
  z.object({
    REACT_APP_NAME: z.string().default("BumbleBot Garden App"),
  })
)