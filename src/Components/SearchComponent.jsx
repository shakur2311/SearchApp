import React, {useContext} from 'react';
import ResultsComponent from './ResultsComponent';
import { indexContext } from '../Contexts/indexContext';

const SearchComponent = () => {
    const {input,setInput,inputDOM} = useContext(indexContext);

    return (
        <div>
            <p>Results: </p>
            <input type="text" ref={inputDOM} className='form-control' value={input} onChange={(e)=>setInput(e.target.value)} />
            <ResultsComponent/>          
        </div>
    );
}

export default SearchComponent;
