import { CalendarItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { CalendarItems } from "wasp/server/crud/CalendarItems";

type CreateCalendarInput = { title: string; details: string; eventDate: Date };

export const createCalendarItem: CalendarItems.CreateAction<
  CreateCalendarInput,
  CalendarItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const { eventDate, title, details } = args;
  const { CalendarItem } = context.entities;

  return await CalendarItem.create({
    data: {
      eventDate: eventDate,
      user: { connect: { id: context.user.id } },
      title: title,
      details: details,
    },
  });
};
