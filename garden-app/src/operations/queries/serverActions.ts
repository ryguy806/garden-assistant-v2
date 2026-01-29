import { type PlantProfileItem } from 'wasp/entities'
import { type GetPlantById } from 'wasp/server/operations'

export const getPlantById: GetPlantById<
    {id: number},
    PlantProfileItem | null
> = async ({id}, context) => {
    return context.entities.PlantProfileItem.findUnique({
        where: {id}
    })
}

