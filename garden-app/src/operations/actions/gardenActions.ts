import { PlantProfileItem, PlantItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { PlantProfileItems } from "wasp/server/crud/PlantProfileItems";
import { PlantItems } from "wasp/server/crud/PlantItems";
import { ImageFieldType } from "../../api/api";

// type CreatePlantProfileInput = {
//   name: string;
//   plantedDate: Date;
//   details: string;
//   imageURL: string;
//   type: string;
//   group: string;
//   fertilizerNeeds: string;
//   garden: string;
// };

type CreatePlantProfileInput = {
  id: number,
  common_name: string | null,
  scientific_name: string
  images: {
    flower: ImageFieldType[],
    leaf: ImageFieldType[],
    bark: ImageFieldType[],
    habit: ImageFieldType[],
    fruit: ImageFieldType[],
    other: ImageFieldType[],
  },
  slug: string,
  duration: string[] | null
  growth_habit: string | null
  light: number | null
  image_url: string | null
}

type CreatePlantItemInput = {
  id: number
  image_url: string;
  common_name: string;
  scientific_name: string;
  slug: string
}

// export const createPlantProfileItem: PlantProfileItems.CreateAction<
//   CreatePlantProfileInput,
//   PlantProfileItem
// > = async (args, context) => {
//   if (!context.user) {
//     throw new HttpError(401, "Access denied");
//   }

//   const {
//     name,
//     plantedDate,
//     details,
//     type,
//     group,
//     imageURL,
//     fertilizerNeeds,
//     garden,
//   } = args;

//   const { PlantProfileItem } = context.entities;

//   return await PlantProfileItem.create({
//     data: {
//       user: { connect: { id: context.user.id } },
//       name,
//       plantedDate,
//       details,
//       type,
//       group,
//       imageURL,
//       fertilizerNeeds,
//       garden,
//     },
//   });
// };

export const createPlantProfileItem: PlantProfileItems.CreateAction<
  CreatePlantProfileInput,
  PlantProfileItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const {
    id,
    common_name,
    scientific_name,
    images,
    slug,
    duration,
    growth_habit,
    light,
    image_url
  } = args;

  const { PlantProfileItem } = context.entities;

  return await PlantProfileItem.create({
    data: {
      id,
      common_name,
      scientific_name,
      slug,
      growth_habit,
      light,
      image_url,
      userId: context.user.id, // Don't forget to set the user relationship
      // Create the related ImageItem with nested image types
      images: {
        create: {
          flower: {
            create: images.flower.map(img => ({
              id: img.id,
              image_url: img.image_url,
              copyright: img.copyright
            }))
          },
          leaf: {
            create: images.leaf.map(img => ({
              id: img.id,
              image_url: img.image_url,
              copyright: img.copyright
            }))
          },
          bark: {
            create: images.bark.map(img => ({
              id: img.id,
              image_url: img.image_url,
              copyright: img.copyright
            }))
          },
          habit: {
            create: images.habit.map(img => ({
              id: img.id,
              image_url: img.image_url,
              copyright: img.copyright
            }))
          },
          fruit: {
            create: images.fruit.map(img => ({
              id: img.id,
              image_url: img.image_url,
              copyright: img.copyright
            }))
          },
          other: {
            create: images.other.map(img => ({
              id: img.id,
              image_url: img.image_url,
              copyright: img.copyright
            }))
          }
        }
      },
      // Create the duration items
      duration: duration && duration.length > 0 ? {
        create: duration.map((dur, index) => ({
          id: id * 1000 + index, // You'll need a strategy for unique IDs
          duration: dur
        }))
      } : undefined
    }
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

