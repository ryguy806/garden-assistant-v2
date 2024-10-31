import { GardenMap, TreeProfileItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { GardenMapItems } from "wasp/server/crud/GardenMapItems.js";
import { TreeItems } from "wasp/server/crud/TreeItems.js";

type CreateGardenInput = { name: string };
type CreateTreeInput = { name: string };

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

export const createTreeItem: TreeItems.CreateAction<
  CreateTreeInput,
  TreeProfileItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const { name } = args;
  const { TreeProfileItem } = context.entities;

  return await TreeProfileItem.create({
    data: {
      user: { connect: { id: context.user.id } },
      name: name,
      details: "",
    },
  });
};
