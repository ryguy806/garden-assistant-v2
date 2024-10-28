import { JournalItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { CreateJournalItem } from "wasp/server/operations";

type CreateJournalItemPayload = Pick<JournalItem, "entry">;

export const createJournalItem: CreateJournalItem<
  CreateJournalItemPayload,
  JournalItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }
  return context.entities.JournalItem.create({
    data: { entry: args.entry, user: { connect: { id: context.user.id } } },
  });
};
