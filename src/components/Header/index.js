import './header.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

const Header = () => {

/*Initialize firebase context*/   
const firebase = useContext(FirebaseContext)

/*Getting content for Site Title*/ 
const [siteTitle, setSiteTitle] = useState([]) 
var myDataTitle = []

useEffect(()=> {
    const getDataTitle = () => { firebase.header()
    .then( querySnapshot => {
        querySnapshot.forEach((doc) => {       
            for (var i = 0; i < doc.data().fields.length; i++){
                myDataTitle.push(doc.data().fields[i].defaultValue)
            }
            setSiteTitle(myDataTitle)         
        })
    })
}
    getDataTitle()
}, [])

/*Getting content for Header Menu*/ 
const [menu, setMenu] = useState([]) 
var myMenu = []

useEffect(()=> {
    const getDataMenu = () => { firebase.menu()
    .then( querySnapshot => {
        querySnapshot.forEach((doc) => {       
            for (var i = 0; i < doc.data().fields.length; i++){
                myMenu.push(doc.data().fields[i].defaultValue)
            }
            setMenu(myMenu)   
        })
    })
}
    getDataMenu()
}, [])

/*Handle css changes when menu is clicked*/
const [linkActive, setLinkActive] = useState(false)
const handleClick = () =>{
    setLinkActive(true)
}

const handleHomeClick = () => {
        setLinkActive(false)
}

    return (
 
        <Navbar expand="md">
            <Container className="ovd-header">
                <LinkContainer to="/">
                        <Nav.Link className='ovd-headerTitle d-block d-md-none' onClick={handleHomeClick}>{siteTitle}</Nav.Link>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ovd-flexNav">
                        <div className="ovd-headerLogo">
                            <LinkContainer to="/">
                                <Nav.Link className='ovd-headerTitle d-none d-md-block' onClick={handleHomeClick}>{siteTitle}</Nav.Link>
                            </LinkContainer>
                        </div>
                        <div className="ovd-headerLink">
                            {menu.map((item) =>(              
                                <LinkContainer to={item.replace(" ?", "").replace("'", "-").replace(" ", "-")} key={item} className= 'ovd-link'>
                                    <Nav.Link onClick={handleClick}>{item}</Nav.Link>
                                </LinkContainer> 
                            ))} 
                        </div> 
                    </Nav>        
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header
