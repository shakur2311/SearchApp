import React,{ createContext,useMemo,useState,useEffect, useRef } from 'react';
import {people,calendar,emails} from '../Data/Data';

export const indexContext = createContext();

const IndexContext = ({children}) => {
    const [results, setResults] = useState(null);
    const [selected, setSelected] = useState(null);
    const [resultsOpened,setResultsOpened] = useState(false);
    const [input,setInput] = useState('');
    const [selectedResult,setSelectedResult] = useState(null);
    const inputDOM = useRef(null);
    const categorySelected = useMemo(()=>selected,[selected])
    

    const searchResults = ()=>{
        if(input!=""){
            setResultsOpened(true);
            switch(categorySelected){
                case "all":
                    setResults([...people,...calendar,...emails].filter((element,index)=>element.toLowerCase().includes(input) || element.includes(input)));
                    break;
                case "people":       
                    setResults(people.filter((element,index)=>element.toLowerCase().includes(input) || element.includes(input)));
                    break;
                case "calendar":        
                    setResults(calendar.filter((element,index)=>element.toLowerCase().includes(input) || element.includes(input)));
                    break;
                case "emails":        
                    setResults(emails.filter((element,index)=>element.toLowerCase().includes(input) || element.includes(input)));
                    break;
            }
        }else if(input==""){
            setResults(null);
            setResultsOpened(false);
        }
        
        
    }

    const handleClick= (e)=>{
        if(!inputDOM.current || !inputDOM.current.contains(e.target)){
            setResultsOpened(false)
        }else if(inputDOM.current.contains(e.target) ){
            setResultsOpened(true)
        }
    }

    /* Agregando eevento click a toda la app */
    document.addEventListener("click",handleClick);

    useEffect(() => {
        searchResults();
    }, [input]);

    
    return (
        <indexContext.Provider value={
            {results,
            setResults,
            selected,
            setSelected,
            input,
            inputDOM,
            setInput,
            categorySelected,
            searchResults,
            resultsOpened,
            selectedResult,
            setSelectedResult}}>

            {children}
        </indexContext.Provider>
    );
}

export default IndexContext;
