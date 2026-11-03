import { JournalItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { JournalItems } from "wasp/server/crud/JournalItems";

type CreateJournalInput = { entry: string, plant_id: number };

export const createJournalItem: JournalItems.CreateAction<
  CreateJournalInput,
  JournalItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const { entry, plant_id } = args;
  const { JournalItem } = context.entities;

  return await JournalItem.create({
    data: {
      user: { connect: { id: context.user.id } },
      plantProfile: { connect: { id: plant_id } },
      entry: entry,
    },
  });
};
