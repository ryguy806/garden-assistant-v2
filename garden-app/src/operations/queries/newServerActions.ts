import { type PerenualPlantProfileItem, type HardinessItem, type DimensionsItem } from 'wasp/entities'
import { HttpError } from 'wasp/server';
import { type GetPerenualPlantById, type GetAllPerenualPlants } from 'wasp/server/operations'

type PerenualPlantType = {
    hardiness: {
        id: number
        min: number;
        max: number;
    } | null,
    dimensions: {
        id: number
        type: string,
        min_value: number,
        max_value: number,
        unit: string,
    }[]
}

export const getPerenualPlantById: GetPerenualPlantById<
    {id: number},
    (PerenualPlantProfileItem & PerenualPlantType) | null
> = async ({id}, context) => {
    if(!context.user) {
        throw new HttpError(401, "You must be logged in to see your plant.")
    }
    try {
        const plant: (PerenualPlantProfileItem & PerenualPlantType) | null = await context.entities.PerenualPlantProfileItem.findUnique({
            where: {
                id: id,
            },
            include: {
                hardiness: true,
                dimensions: true,
            }
        });

        if (!plant) {
            throw new HttpError(404, 'Plant not found');
        }

        console.log(plant)
        return plant;
    } catch (error) {
        throw new HttpError(500, "Failed to fetch plant data.")
    }
}

export const getAllPerenualPlants: GetAllPerenualPlants<void, PerenualPlantProfileItem[] | null> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'You must be logged in to view plants');
  }

  try {
    const plants = await context.entities.PerenualPlantProfileItem.findMany({
        where: {
            userId: context.user.id
        },
    })

    return plants;
  } catch (error) {
    throw new HttpError(500, 'Failed to fetch plants.');
  }
};