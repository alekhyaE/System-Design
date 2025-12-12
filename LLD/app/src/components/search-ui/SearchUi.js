import { useEffect, useState } from "react";

const SearchUi=()=>{
    const [searchText,setSearchText]= useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isResultsVisible,setIsResultVisible]=useState(false);
    const [cache,setCache]= useState({});

    useEffect(()=>{
    //Debouncing logic
      const s= setTimeout(()=> fetchData(),600);
       return ()=>clearTimeout(s);
    },[searchText]);

    
    const fetchData= async()=>{
        if(cache[searchText]){
            setSearchResults(cache[searchText]);
        }
        else{
        const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.google.com/complete/search?client=firefox&q="+searchText);
        const jsonData= await data.json();
        console.log(jsonData);
        setSearchResults(jsonData[1]);
        cache[searchText]=jsonData[1];
        }
    }
    return (
        <div>
            <div className="m-10">
                <input type="text" className="border border-black w-96 shadow-lg p-2 rounded-lg shadow-md" value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                onFocus={() => setIsResultVisible(true)}
                onBlur={() => setIsResultVisible(false)}
                ></input>
                {searchResults.length>0 && isResultsVisible &&
                    <ul className="border border-black w-96 shadow-lg p-2 pt-2">
                    {searchResults.map((result)=>(
                        <li className="hover:bg-gray-200 cursor-pointer">{result}</li>
                    ))}
                    
                </ul>}
            </div>
        </div>
    );
}
export default SearchUi;
