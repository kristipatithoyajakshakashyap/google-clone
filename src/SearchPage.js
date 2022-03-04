import React from 'react'
import { Link } from 'react-router-dom';
import Response from './response';
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{ term = "Tesla" }, dispatch] = useStateValue();
    
    // live api
    const {data} = useGoogleSearch(term); 
    
    // trail
    // const data = Response
        
    console.log(data)
    return (
        <div className="searcPage">
            <div className="searchPage_header">
                <Link to='/'>
                    <img 
                        className="searchPage_logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    />    
                </Link>  
                <div className="searchPage_headerBody">
                     <Search hideButtons />
                     <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to='/all'>All</Link>    
                            </div> 
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div> 
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/maps">more</Link>
                            </div>   
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/setting">Settings</Link>
                            </div> 
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div> 
                        </div>
                     </div>
                </div>       
            </div> 
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCoun">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}   
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                          <a href={item.link}> 
                          {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src &&(
                              <img src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src } alt="" className="searchPage_resultImage" />
                          )}
                          
                          {item.displayLink} </a>   
                          <a href={item.link} className="searchPage_resultTitle"><h2>{item.title}</h2></a>
                          <p className="searchPage_resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
             
        </div>
  )
}

export default SearchPage

{/* https://developers.google.com/ custom-search/v1/using_rest 
 ☝️ for api key

 https://cse.google.com/cse/create/new

            */}
