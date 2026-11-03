import { useEffect, useState } from "react";
import { searchForPerenualPlants, useQuery } from "wasp/client/operations";
import { Link } from "wasp/client/router";

const PlantSearch = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [debouncedTerm, setDebouncedTerm] = useState("")
    const shouldFetch = debouncedTerm.length >= 3

    const {data: results, isLoading, error} = useQuery(
        searchForPerenualPlants,
        debouncedTerm,
        {enabled: shouldFetch}
    )

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [searchTerm])

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="flex flex-col h-full w-full">
            <input className="flex mx-auto border-black border w-1/3 p-1 pl-2" type="text" placeholder="Search (must be at least 3 characters)..." value={searchTerm} onChange={handleSearchInput}/>

            {isLoading && <div className="flex mx-auto pt-5">Searching...🔎🌱</div>}
            <div className="flex flex-col space-y-3 text-black mx-10 justify-center">
                {searchTerm.length > 0 && searchTerm.length < 3 && (
                    <div className="flex mx-auto text-lg pt-3">Please enter at least 3 characters to search.</div>
                )}
                <div className="flex flex-col w-full">
                    {results && results.data.length > 0 && (
                        results.data.map((plant) => (
                            <Link to="/search/:plant" params={{plant: plant.id}} key={plant.id} className="flex mx-auto my-4 px-4 py-5 w-1/2 justify-center hover:ring-2 ring-[#F6CF3F] first:mt-5">
                                <p>{plant.common_name && `${plant.common_name} | `}<i>{plant.scientific_name}</i></p>
                            </Link>
                        ))
                    )}
                </div>
                {shouldFetch && !isLoading && results?.data.length === 0 && (
                    <div className="flex mx-auto">No results found.</div>
                )}
            </div>
        </div>
    )
}

export default PlantSearch;
