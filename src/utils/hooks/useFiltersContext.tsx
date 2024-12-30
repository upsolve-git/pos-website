import React, { useContext, createContext, ReactNode, useState } from "react";

export interface ActiveCats{
    'allproducts': boolean,
    'nails': boolean,
    'manicure': boolean,
    'pedicure': boolean
}

// Define the context's types
interface FiltersContextProps {
    priceRange: number[],
    priceRangeChange: (priceRange: number[]) => void,
    rating: number[],
    ratingFilterChange: (ratings: number[]) => void,
    activeCats: ActiveCats,
    activeCatsChange: (cats: ActiveCats) => void,
    sortBy: string,
    sortByChange: (sortKey: string)=>void,
    searchProd: string,
    searchProdChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    clearAll: ()=>void
}

// Create the context
export const FiltersContext = createContext<FiltersContextProps | undefined>(undefined);

// Custom hook to use the FiltersContext
export const useFiltersContext = () => {
    const filters = useContext(FiltersContext);
    if (!filters) {
        throw new Error("useFiltersContext must be used within a FiltersProvider");
    }
    return filters;
};

// Context provider component
export const FiltersContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    let [priceRange, setPriceRange] = useState<number[]>([0, 0]);
    let [rating, setRating] = useState<number[]>([0, 5]);
    let [searchProd, setSearchProd] = useState<string>('')
    let [activeCats, setActiveCats] = useState<ActiveCats>({
        allproducts: true,
        nails: false,
        manicure: false,
        pedicure: false,
    });
    let [sortBy, setSortBy] = useState<string>('')

    const priceRangeChange = (priceRange: number[]): void => setPriceRange(priceRange)
    const activeCatsChange = (cats: ActiveCats): void => setActiveCats(cats)
    const ratingFilterChange = (ratings: number[]): void => setRating(ratings)
    const sortByChange = (sortKey:string):void=>setSortBy(sortKey)
    const searchProdChange = (e: React.ChangeEvent<HTMLInputElement>):void=>{setSearchProd(e.target.value); console.log(searchProd)}
    const clearAll = ()=>{
        setPriceRange([0,0])
        setRating([])
        setSearchProd('')
        setSortBy('')
    }

    return (
        <FiltersContext.Provider
            value={{
                priceRange,
                priceRangeChange,
                rating,
                ratingFilterChange,
                activeCats,
                activeCatsChange,
                sortBy,
                sortByChange,
                searchProd,
                searchProdChange,
                clearAll
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};