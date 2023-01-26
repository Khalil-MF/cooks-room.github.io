import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiPestleMortar, GiNoodles} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() { 
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink >
        <SLink to={'/cuisine/Latin American'}>
            <GiPestleMortar/>
            <h4>Latin</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiNoodles/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    gap : 10px
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transform: scale(0.8rem);
h4 {
    color: #ffffff;
    font-size: 0.8rem;
}
svg {
    color : white;
    font-size : 1.5rem;
}

&.active {
    background: linear-gradient(to right , #f27121, #e94057);
    svg{
        color: #ffffff;
    }
    h4{
        color: #ffffff;
    }
}

`;


export default Category;