import { PerenualPlantProfileItem } from "wasp/entities";
import { HttpError, prisma } from "wasp/server";
import {PerenualPlantProfileItems} from "wasp/server/crud/PerenualPlantProfileItems"

type CreatePerenualPlantProfileInput = {
  plant_id: number,
  common_name: string,
  scientific_name: string,
  type: string,
  cycle: string,
  description: string,
  default_image: string,
  hardiness: {
    min: number,
    max: number,
  },
  soil: string,
  dimensions: {
    type: string,
    min_value: number,
    max_value: number,
    unit: string,
  }[],
  watering: string,
  sunlight: string
  pruning_months: string[],
  attracts: string[],
  flowering_season: string,
  pest_susceptibility: string[]
  growth_rate: string,
  maintenance: string
}

/** 
 * Utility function used to rest the database during development. 
 * USE ONLY IN DEVELOPMENT, NOT FOR PRODUCTION!
 * 
 * To use, uncomment out the function call, then recomment out the call once the database has been reset.
*/ 
async function resetTable(tableName: string) {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE '"${tableName}"' RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`SELECT setval(pg_get_serial_sequence('"${tableName}"', 'id'), coalesce(max(id)+1, 1), false) FROM '"${tableName}"';`
  } catch (error) {
    console.error(`Error resetting table ${tableName}:`, error);
  }
}

// resetTable("PerenualPlantProfileItem")

export const createPerenualPlantProfileItem: PerenualPlantProfileItems.CreateAction<
  CreatePerenualPlantProfileInput,
  PerenualPlantProfileItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  const {
    plant_id,
    common_name,
    scientific_name,
    hardiness,
    type,
    cycle,
    default_image,
    watering,
    description,
    soil,
    dimensions,
    sunlight,
    pruning_months,
    attracts,
    flowering_season,
    pest_susceptibility,
    growth_rate,
    maintenance
  } = args;

  const { PerenualPlantProfileItem } = context.entities;

  return await PerenualPlantProfileItem.create({
    data: {
      plant_id,
      userId: context.user.id,
      common_name,
      scientific_name,
      hardiness: {
        create: {
          min: hardiness.min,
          max: hardiness.max
        }
      },
      type: type ? type : "No type data.",
      cycle: cycle ? cycle  : "No data.",
      default_image: default_image ? default_image : "No image.",
      watering: watering ? watering : "No data.",
      description,
      soil: soil ? soil : "No data.",
      dimensions: dimensions && dimensions.length > 0 ? {
        create: dimensions.map((item) => ({
          type: item.type ? item.type : "Height",
          min_value: item.min_value,
          max_value: item.max_value,
          unit: item.unit
        }))
      } : undefined,
      sunlight: sunlight ? sunlight : "No data.",
      pruning_months: pruning_months && pruning_months.length > 0 ? {
        create: pruning_months.map((item) => ({
          month: item
        }))
      } : undefined,
      attracts: attracts && attracts.length > 0 ? {
        create: attracts.map((item) => ({
          species: item
        }))
      } : undefined,
      pest_susceptibility: pest_susceptibility && pest_susceptibility.length > 0 ? {
        create: pest_susceptibility.map((item) => ({
          species: item
        }))
      } : undefined,
      growth_rate: growth_rate ? growth_rate : "No data.",
      flowering_season: flowering_season ? flowering_season  : "No data.",
      maintenance: maintenance ? maintenance : "No data."
    }
  });
};