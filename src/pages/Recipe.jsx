import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function Recipe() {
  const [details,setDetails]=useState({});
  const [activeTab,setActiveTab]=useState('instructions');
  let params = useParams();

  const fetchDetail = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.detail}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData)
    
  }

  useEffect(()=>{
    fetchDetail();
  },[params.detail]);

  return (
    <DetailWrapper  animate={{ opacity : 1 }}
      initial={{opacity:0}}
      transition={{ ease: "easeOut", duration:2 }} key={details.id}>
      <div>
        <h2>{details.title}</h2>
        <Image src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' :''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' :''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button> 
        {activeTab === 'instructions' && (
        <div>
          <h5 dangerouslySetInnerHTML={{__html: details.instructions}}></h5>
        </div>
        )}
        {activeTab ==='ingredients' && (<ul>
          {details.extendedIngredients.map((ingredients)=>
             <li key={ingredients.id}>
                {ingredients.original}
            </li>
          )}
        </ul>)}

        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.dev)`
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg ,#494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: rgb(90, 90, 90);
  }
  ul {
   margin-top: 2rem;
  }
`;

const Button = styled.button`
  min-width: 120px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  border: 2px solid #212529;
  color: #212529;


`;

const Info = styled.div`
  margin-left: 3rem;
`;

const Image = styled.img`
  max-width: 550;
  max-height: 350;
  border: none;
  border-radius: 20%;

`;


export default Recipe;