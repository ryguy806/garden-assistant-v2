import { app, crud, page, query, route } from "@wasp.sh/spec";

// -- Root / server config
import App from "./src/App" with { type: "ref" };
import { serverEnvValidationSchema } from "./src/env" with { type: "ref" };

// -- Pages
import Login from "./src/Auth/Login" with { type: "ref" };
import Signup from "./src/Auth/Signup" with { type: "ref" };
import { MainPage } from "./src/MainPage" with { type: "ref" };
import Yard from "./src/pages/Garden/Yard" with { type: "ref" };
import PlantProfile from "./src/pages/Garden/PlantProfile" with { type: "ref" };
import PlantLookUp from "./src/pages/Search/PlantLookUp" with { type: "ref" };
import PlantProfileAPI from "./src/pages/Search/PlantProfileAPI" with { type: "ref" };
import CalendarView from "./src/pages/Calendar/CalendarView" with { type: "ref" };
import CalendarNewEvent from "./src/pages/Calendar/CalendarNewEvent" with { type: "ref" };
import CalendarDayView from "./src/pages/Calendar/CalendarDayView" with { type: "ref" };
import JournalView from "./src/pages/Journal/JournalView" with { type: "ref" };

// -- Queries
import {
  fetchAllPerenualPlants,
  lookForSpecificPerenualPlantScientificName,
  searchForPerenualPlants,
} from "./src/api/newApi" with { type: "ref" };
import {
  getAllPerenualPlants,
  getPerenualPlantById,
} from "./src/operations/queries/newServerActions" with { type: "ref" };

// -- CRUD overrides
import { createJournalItem } from "./src/operations/actions/journalActions" with { type: "ref" };
import { createCalendarItem } from "./src/operations/actions/calendarActions" with { type: "ref" };
import { createPerenualPlantProfileItem } from "./src/operations/actions/gardenActions" with { type: "ref" };

export default app({
  name: "Garden_Assistant",
  title: "BumbleBot Garden App",
  wasp: { version: "^0.26.0" },
  head: [
    '<link rel="shortcut icon" href="/favicon.ico" />',
    "<link rel='manifest' href='/manifest.json' />",
  ],
  client: {
    rootComponent: App,
  },
  server: {
    envValidationSchema: serverEnvValidationSchema,
  },
  auth: {
    userEntity: "User",
    methods: {
      usernameAndPassword: {},
    },
    onAuthFailedRedirectTo: "/login",
    onAuthSucceededRedirectTo: "/",
  },
  spec: [
    // Queries
    query(fetchAllPerenualPlants),
    query(lookForSpecificPerenualPlantScientificName),
    query(searchForPerenualPlants),
    query(getAllPerenualPlants, { entities: ["PerenualPlantProfileItem"] }),
    query(getPerenualPlantById, {
      entities: ["PerenualPlantProfileItem", "HardinessItem", "DimensionsItem"],
    }),

    // Auth routes
   route("LoginRoute", "/login", page(Login)),
    route("SignupRoute", "/signup", page(Signup)),

    // Main route
    route("RootRoute", "/", page(MainPage, { authRequired: true })),

    // Plant routes
    route("YardRoute", "/garden", page(Yard, { authRequired: true })),
    route(
      "PlantProfileRoute",
      "/garden/:plant",
      page(PlantProfile, { authRequired: true }),
    ),

    // Search routes
    route("PlantSearchRoute", "/search", page(PlantLookUp, { authRequired: true })),
    route(
      "PlantProfileFromSearchRoute",
      "/search/:plant",
      page(PlantProfileAPI, { authRequired: true }),
    ),

    // Calendar routes
    route("CalendarRoute", "/calendar", page(CalendarView, { authRequired: true })),
    route(
      "CalendarNewEventRoute",
      "/calendar/new",
      page(CalendarNewEvent, { authRequired: true }),
    ),
    route(
      "CalendarDayViewRoute",
      "/calendar/:day",
      page(CalendarDayView, { authRequired: true }),
    ),
    route(
      "CalendarNewEventDayRoute",
      "/calendar/:day/new",
      page(CalendarNewEvent, { authRequired: true }),
    ),

    // Journal routes
    route("JournalRoute", "/journal", page(JournalView, { authRequired: true })),

    // CRUD
    crud("JournalItems", "JournalItem", {
      getAll: {},
      create: { overrideFn: createJournalItem },
    }),
    crud("CalendarItems", "CalendarItem", {
      getAll: {},
      create: { overrideFn: createCalendarItem },
    }),
    crud("PerenualPlantProfileItems", "PerenualPlantProfileItem", {
      getAll: {},
      get: {},
      create: { overrideFn: createPerenualPlantProfileItem },
      update: {},
    }),
    crud("GardenMapItems", "GardenMap", {
      getAll: {},
      create: {},
    }),
  ],
});