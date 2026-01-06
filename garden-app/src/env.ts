import * as z from 'zod'

import { defineEnvValidationSchema } from 'wasp/env'

export const envValidationSchema = defineEnvValidationSchema(
  z.object({
    API_SECRET_KEY: z.string({
      required_error: 'API_SECRET_KEY is required.',
    }),
  })
)