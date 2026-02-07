import { type PerenualPlantProfileItem } from 'wasp/entities'
import { HttpError } from 'wasp/server';
import { type GetPerenualPlantById, type GetAllPerenualPlants } from 'wasp/server/operations'

export const getPerenualPlantById: GetPerenualPlantById<
    {id: number},
    PerenualPlantProfileItem | null
> = async ({id}, context) => {
    if(!context.user) {
        throw new HttpError(401, "You must be logged in to see your plant.")
    }
    try {
        const plant = await context.entities.PerenualPlantProfileItem.findUnique({
            where: {
                id: id,
            },
            include: {
                hardiness: true,
            }
        });

        if (!plant) {
            throw new HttpError(404, 'Plant not found');
        }

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