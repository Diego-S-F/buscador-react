import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}){
    //console.log(results);
    return(
        <div style={{
            width:"93%",
            padding:"0rem 2rem 0rem 2rem"
        }}>
            {!results?.length && isSearching && <p >no hay resultados</p>}
            {results?.map((value)=> <SearchResultsItem key={value.id} {...value}/>)}
        </div>
    );
}
/*

*/