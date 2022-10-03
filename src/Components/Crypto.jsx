
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 import Coin from './Coin';
import Spinner from './Spinner';



function Crypto(){
 
  const [loading,setloading] = useState(false);
  
  const [coins,setCoins] =useState([]);
  const [search,setSearch] = useState('')
   
  
  useEffect(()=>{
    
  axios.get(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false")
   .then(res => {
    setCoins(res.data)
    setloading(true)
   }).catch(error => console.log(error));
  
  },[]);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    
    <div className="coin-app">
      <div className="coin-search">
        <form action="">
          <input type="text" placeholder='search' className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      <div className='cointag-div'>
        <div className="coindiv"><h3 className="tag">coin</h3></div>
       <div className="otherdiv">
       <h3 className="tag">price</h3>
        <h3 className="tag">volume</h3>
        <h3 className="tag">mkt cap</h3>
        <h3 className="tag">24h</h3></div> 
      </div>
     
      {loading?filteredCoins.map(coin => {
        return(
          <>
      
          <Coin 
          rank={coin.market_cap_rank}
          key={coin.id}
           name={coin.name}
            image={coin.image}
            symbo={coin.image}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
             
          
            />
           
            </>
        )
      }):<Spinner/>}
       
    </div>
    
  );
}
 

export default Crypto;