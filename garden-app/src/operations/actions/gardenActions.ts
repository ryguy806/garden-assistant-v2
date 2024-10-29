import { GardenMap } from "wasp/entities";
import { HttpError } from "wasp/server";
import { GardenMapItems } from "wasp/server/crud/GardenMapItems.js";

type CreateGardenInput = { name: string };

export const createGardenItem: GardenMapItems.CreateAction<
  CreateGardenInput,
  GardenMap
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const { name } = args;
  const { GardenMap } = context.entities;

  return await GardenMap.create({
    data: {
      user: { connect: { id: context.user.id } },
      name: name,
    },
  });
};
