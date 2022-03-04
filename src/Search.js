import  SearchIcon from '@material-ui/icons/Search';
import  MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react';
import './Search.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue()
    const [input, setInput] = useState('') 
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log(input);

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }
    return (
        <form clasName="search">
            {!hideButtons ? (
                <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input  value={input} onChange={e => setInput(e.target.value)}/>    
                <MicIcon />
            </div>
            ):(
                <div className="search_inputSearch Search">
                    <SearchIcon className="search_inputIcon"/>
                    <input  value={input} onChange={e => setInput(e.target.value)}/>    
                    <MicIcon />
                </div>
            )}
            
            {!hideButtons ? (
            <div className="search_buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Cool</Button>   
            </div>
            ):(
            <div className="search_buttons">
                <Button className="search_buttonHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search_buttonHidden" variant="outlined">I'm Feeling Cool</Button>   
            </div>
            )}
            
        </form>
  )
}

export default Search;