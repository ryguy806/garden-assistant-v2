import { JournalItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { type GetAllJournalItems } from "wasp/server/operations";

export const getAllJournalItems: GetAllJournalItems<
  void,
  JournalItem[]
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Not today Satan!");
  }
  return context.entities.JournalItem.findMany({
    where: { user: { id: context.user.id } },
    orderBy: { date: "asc" },
  });
};
