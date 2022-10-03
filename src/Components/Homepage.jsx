import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
 

function Homepage(props) {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false);

   
  useEffect(() => {
     
    const getArticles = async () => {
      const response = await axios.get(props.newslink)
      setArticles(response.data.articles)
      setloading(true)
       
    }
 
    getArticles()
  }, [props.newslink])
 
   
   
 
  return (

    
    <>
   
      <div className='parentDiv'> 
   <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter">{props.headline}</h3>
            </div>
          </div>
        </div>
         
        <div className='containordiv'>
 
          {loading ? articles.map((element) => {
            return <div className='maindiv'>
              <div className='imgdiv'>
                <img variant="top" src={element.urlToImage} alt="none"></img>
                </div>
                <div className='contentdiv'>
                  <p className='title'>{element.title}</p>
                  <a href={element.url} className="readmore"> read more </a>
                </div>
              
            </div>
          }) : <Spinner />}
        </div>


      </div>

    </>


  )
}

export default Homepage