import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
function Searched() {

    const [searchedRecipes,setSearchedRecipes]=useState([]);
    let params = useParams();

    const getSearched = async (query) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
      }

    useEffect(()=>{
        getSearched(params.search);
    }, [params.search]);
    

  return (
    <Grid  animate={{ opacity : 1 }}
    initial={{opacity:0}}
  transition={{ ease: "easeOut", duration: 1.5 }}>
            {searchedRecipes.map((searched)=> {
                return (
                    <Card key={searched.id}>
                       <Link to={'/recipe/'+searched.id}>
                    <img src={searched.image} alt="cuisine" />
                    <h4>{searched.title}</h4>
                    </Link>
                    </Card>
                );
            })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem
`;

const Card = styled.div`
img {
  width: 100%;
  border-radius: 2rem;
}
a {
  text-decoration: none;
}
h4 {
  text-align: center;
  padding: 1rem;
}
`;


export default Searched;