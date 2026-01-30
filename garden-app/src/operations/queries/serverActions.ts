import { type ImageItem, type PlantProfileItem } from 'wasp/entities'
import { HttpError } from 'wasp/server';
import { type GetPlantById, type GetAllPlants, type GetImageItemById } from 'wasp/server/operations'

export const getImageItemById: GetImageItemById<
    {plant_profile_id: number},
    ImageItem | null
> = async ({plant_profile_id}, context) => {
    try {
        const imageItem = context.entities.ImageItem.findUnique({
            where: {
                plant_profile_id: plant_profile_id
            },
            include: {
                fruit: true,
                leaf: true,
                habit: true,
                bark: true,
                other: true,
                flower: true
            }
        })

        return imageItem
    } catch (error) {
        throw new HttpError(500, "Failed to retrieve images.")
    }
}

export const getPlantById: GetPlantById<
    {id: number},
    PlantProfileItem | null
> = async ({id}, context) => {
    if(!context.user) {
        throw new HttpError(401, "You must be logged in to see your plant.")
    }
    try {
        const plant = await context.entities.PlantProfileItem.findUnique({
            where: {
                id: id,
            },
            include: {
                images: true,
                duration: {
                    select: {
                        duration: true
                    }
                }
            },
        });

        if (!plant) {
            throw new HttpError(404, 'Plant not found');
        }

        return plant;
    } catch (error) {
        throw new HttpError(500, "Failed to fetch plant data.")
    }
}

export const getAllPlants: GetAllPlants<void, PlantProfileItem[] | null> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, 'You must be logged in to view plants');
  }

  try {
    const plants = await context.entities.PlantProfileItem.findMany({
        where: {
            userId: context.user.id
        }
    })

    return plants;
  } catch (error) {
    throw new HttpError(500, 'Failed to fetch plants.');
  }
};