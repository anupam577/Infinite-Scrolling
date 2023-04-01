
import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material'; 

import { Link } from 'react-router-dom';
//  import About from '../about/about';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import AuthContext from '../../context/authcontext';
import AuthContext from '../context/authcontext';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: right;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }

`



const Header = () => {

    
    const navigate = useNavigate();
    const{user,setuser}=useContext(AuthContext)
    const logout =()=>{
        // localStorage.clear();
            
        
    }
    return (
        

        <Component>
            <Container>
              
                
              
                <Link to='/' onClick={logout} >LOGOUT </Link>
                
               
               
                    
                
                     </Container>
        </Component>
       
    )
}

export default Header;