import { type PlantProfileItem } from 'wasp/entities'
import { HttpError } from 'wasp/server';
import { type GetPlantById, type GetAllPlants } from 'wasp/server/operations'

export const getPlantById: GetPlantById<
    {id: number},
    PlantProfileItem | null
> = async ({id}, context) => {
    return context.entities.PlantProfileItem.findUnique({
        where: {id},
        include: {
            images: true,
            duration: true,
        }
    })
}

export const getAllPlants: GetAllPlants<void, PlantProfileItem[] | null> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'You must be logged in to view plants');
  }

  try {
    const plants = await context.entities.PlantProfileItem.findMany({
      include: {
        user: {
          select: {
            id: true,
          },
        },
        images: true,
        duration: true,
      },
      orderBy: {
        createdDate: 'desc',
      },
    });

    return plants;
  } catch (error) {
    throw new HttpError(500, 'Failed to fetch plants.');
  }
};