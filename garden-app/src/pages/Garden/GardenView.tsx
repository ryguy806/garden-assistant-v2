import { Link } from "wasp/client/router";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { GardenMapItems, TreeItems } from "wasp/client/crud";
import { GardenMap, TreeProfileItem } from "wasp/entities";

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

type ListViewProps = {
  data: any[];
};

const ListView = ({ data }: ListViewProps) => {
  const gardenData = data[0];
  const treeData = data[1];

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
        <div className='text-lg font-bold underline'>Gardens</div>
        {gardenData.data.map((garden: GardenMap) => {
          return (
            <Link
              className='my-3'
              to={`/garden/:garden`}
              params={{ garden: garden.name }}
              key={garden.id}
            >
              {titleCase(garden.name)}
            </Link>
          );
        })}
        <Link
          to='/garden/new-garden'
          className='border-2 p-2 bg-green-400 w-40 mt-3'
        >
          Add Garden
        </Link>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg font-bold underline'>Trees</div>
        {treeData.data.map((tree: TreeProfileItem) => {
          return (
            <Link
              className='my-3'
              to={`/garden/:garden`}
              params={{ garden: tree.name }}
              key={tree.id}
            >
              {titleCase(tree.name)}
            </Link>
          );
        })}
        <Link
          to='/garden/new-tree'
          className='border-2 p-2 bg-green-400 w-40 mt-3'
        >
          Add Tree
        </Link>
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
  const getAllData = () => {
    const gardenData = GardenMapItems.getAll.useQuery();
    const treeData = TreeItems.getAll.useQuery();

    return [gardenData, treeData];
  };

  const data = getAllData();

  const handleViewChange = () => {
    setView(view === "list" ? "map" : "list");
  };

  if (data[0].isLoading || data[1].isLoading) return <div>Loading...</div>;
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
            {view === "list" ? <ListView data={data} /> : <MapView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenView;
