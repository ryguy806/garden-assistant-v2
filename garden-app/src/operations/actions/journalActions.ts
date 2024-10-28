import { JournalItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { JournalItems } from "wasp/server/crud/JournalItems.js";

type CreateJournalInput = { entry: string };

export const createJournalItem: JournalItems.CreateAction<
  CreateJournalInput,
  JournalItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const { entry } = args;
  const { JournalItem } = context.entities;

  return await JournalItem.create({
    data: {
      user: { connect: { id: context.user.id } },
      entry: entry,
    },
  });
};
