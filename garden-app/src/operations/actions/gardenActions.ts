import { PlantProfileItem, PlantItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { PlantProfileItems } from "wasp/server/crud/PlantProfileItems";
import { PlantItems } from "wasp/server/crud/PlantItems";

type CreatePlantProfileInput = {
  name: string;
  plantedDate: Date;
  details: string;
  imageURL: string;
  type: string;
  group: string;
  fertilizerNeeds: string;
  garden: string;
};

type CreatePlantItemInput = {
  id: number
  image_url: string;
  common_name: string;
  scientific_name: string;
  slug: string
}

export const createPlantProfileItem: PlantProfileItems.CreateAction<
  CreatePlantProfileInput,
  PlantProfileItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const {
    name,
    plantedDate,
    details,
    type,
    group,
    imageURL,
    fertilizerNeeds,
    garden,
  } = args;

  const { PlantProfileItem } = context.entities;

  return await PlantProfileItem.create({
    data: {
      user: { connect: { id: context.user.id } },
      name,
      plantedDate,
      details,
      type,
      group,
      imageURL,
      fertilizerNeeds,
      garden,
    },
  });
};

export const createPlantItem: PlantItems.CreateAction<
  CreatePlantItemInput,
  PlantItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const {
    id,
    image_url,
    common_name,
    scientific_name,
    slug
  } = args;

  const { PlantItem } = context.entities;

  return await PlantItem.create({
    data: {
      id,
      image_url,
      common_name,
      scientific_name,
      slug
    },
  });
};

