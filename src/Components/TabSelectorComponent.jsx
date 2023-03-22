import React,{useContext} from 'react';
import {indexContext} from '../Contexts/indexContext'

const TabSelectorComponent = () => {
    const {categorySelected,setSelected,setResults,selectedResult} = useContext(indexContext);
    return (
        <div>
            <div>
                Categoria Seleccionada : {categorySelected} 
            </div>
            <div className='display'>
                <button className='btn btn-primary' onClick={()=>{setSelected("all"); setResults([])}}>All</button>
                <button className='btn btn-success' onClick={()=>{setSelected("people"); setResults([])}}>People</button>
                <button className='btn btn-dark' onClick={()=>{setSelected("calendar"); setResults([])}}>Calendar</button>
                <button className='btn btn-danger' onClick={()=>{setSelected("emails"); setResults([])}}>Emails</button>
            </div>
            <div>
                You selected: {selectedResult}
            </div>
        </div>
    );
}

export default TabSelectorComponent;
