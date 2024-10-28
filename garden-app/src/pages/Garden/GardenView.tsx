import { Link } from "wasp/client/router";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";

const gardenNames = [
  "vegetable-garden",
  "monkey-puzzle-garden",
  "rock-garden",
  "rhodie-garden",
  "triangle-garden",
  "well-head-garden",
];

const treeNames = [
  "monkey-puzzle",
  "magnolia",
  "large-oak",
  "little-oaks",
  "tree-line",
  "willow",
  "chestnuts",
  "triangle-oaks",
];

const ListView = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
        <div className='text-lg font-bold underline'>Gardens</div>
        {gardenNames.map((garden) => {
          return (
            <Link className='my-3' to={`/garden/:garden`} params={{ garden }}>
              {titleCase(garden)}
            </Link>
          );
        })}
        <button className='border-2 p-2 bg-green-400 w-40 mt-3'>
          Add Garden
        </button>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg font-bold underline'>Trees</div>
        {treeNames.map((tree: string) => {
          return (
            <Link
              className='my-3'
              to={`/garden/:garden`}
              params={{ garden: tree }}
            >
              {titleCase(tree)}
            </Link>
          );
        })}
        <button className='border-2 p-2 bg-green-400 w-40 mt-3'>
          Add Tree
        </button>
      </div>
    </div>
  );
};

const MapView = () => {
  return (
    <div className='flex flex-row justify-between'>
      This will be the map view.
    </div>
  );
};

const GardenView = () => {
  const [view, setView] = useState("list");

  const handleViewChange = () => {
    setView(view === "list" ? "map" : "list");
  };
  return (
    <div className='container mx-auto -mt-16'>
      <div className='flex flex-col items-start space-y-10'>
        <h1 className='font-bold text-xl flex m-auto'>Garden View</h1>
        <div className='flex flex-col space-y-10'>
          <div>
            Here we are going to have a grid map of the yard, with clickable
            gardens regions.
          </div>
          <div>Map layout and List layout.</div>
          <div className='flex flex-col'>
            <div
              className='flex justify-end space-y-5'
              onClick={handleViewChange}
            >
              <button className='border-2 p-2 bg-green-400 w-40 mb-3'>
                {view === "list" ? "Map View" : "List View"}
              </button>
            </div>
            {view === "list" ? <ListView /> : <MapView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenView;
