import { NoteItem, PlantProfileItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { PlantProfileItems } from "wasp/server/crud/PlantProfileItems.js";

type CreatePlantProfileInput = {
  name: string;
  plantedDate: Date;
  details: string;
  noteItems: NoteItem[];
  imageURL: string;
  type: string;
  group: string;
  fertilizerNeeds: string;
  garden: string;
};

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
    noteItems,
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
      // noteItems,
      type,
      group,
      imageURL,
      fertilizerNeeds,
      garden,
    },
  });
};
