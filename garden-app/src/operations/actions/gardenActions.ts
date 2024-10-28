import { GardenMap } from "wasp/entities";
import { HttpError } from "wasp/server";
import { GardenMapItems } from "wasp/server/crud/GardenMapItems.js";

type CreateCalendarInput = { title: string; details: string; eventDate: Date };

export const createCalendarItem: GardenMapItems.CreateAction<
  CreateCalendarInput,
  GardenMap
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const { eventDate, title, details } = args;
  const { GardenMap } = context.entities;

  return await GardenMap.create({
    data: {
      user: { connect: { id: context.user.id } },
      name: title,
    },
  });
};
