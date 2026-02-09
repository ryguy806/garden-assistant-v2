import { PerenualPlantProfileItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import {PerenualPlantProfileItems} from "wasp/server/crud/PerenualPlantProfileItems"

type CreatePerenualPlantProfileInput = {
  id: number,
  common_name: string,
  scientific_name: string,
  type: string,
  cycle: string,
  description: string,
  default_image: string,
  hardiness: {
    min: number,
    max: number,
  },
  soil: string,
  dimensions: {
    type: string,
    min_value: number,
    max_value: number,
    unit: string,
  }[],
  watering: string,
  sunlight: string
}

export const createPerenualPlantProfileItem: PerenualPlantProfileItems.CreateAction<
  CreatePerenualPlantProfileInput,
  PerenualPlantProfileItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const {
    id,
    common_name,
    scientific_name,
    hardiness,
    type,
    cycle,
    default_image,
    watering,
    description,
    soil,
    dimensions,
    sunlight
  } = args;

  const { PerenualPlantProfileItem } = context.entities;

  return await PerenualPlantProfileItem.create({
    data: {
      id,
      userId: context.user.id,
      common_name,
      scientific_name,
      hardiness: {
        create: {
          min: hardiness.min,
          max: hardiness.max
        }
      },
      type,
      cycle,
      default_image,
      watering,
      description,
      soil,
      dimensions: dimensions && dimensions.length > 0 ? {
        create: dimensions.map((item) => ({
          type: item.type,
          min_value: item.min_value,
          max_value: item.max_value,
          unit: item.unit
        }))
      } : undefined,
      sunlight
    }
  });
};