import React, {useContext,useEffect} from 'react';
import {indexContext} from '../Contexts/indexContext';

const ResultsComponent = () => {
    const {results,searchResults,resultsOpened,setSelectedResult} = useContext(indexContext);

    

    return (
        <div className='ResultsComponent p-1'>
            {
                resultsOpened?
                <div>
                    {
                        results ?
                        <div>
                            {
                                results.map((result,index)=>{
                                return <a key={index} className="resultado" onClick={()=>setSelectedResult(result)}><div>{result}</div></a> })
                            }
                
                        </div>
                        :
                        <div></div>
                    }
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default ResultsComponent;
