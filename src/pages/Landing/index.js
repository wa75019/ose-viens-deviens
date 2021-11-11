import { Container, CardGroup, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Jumbotron from '../../components/Jumbotron';
import CardBootstrap from '../../components/CardBootstrap';
import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import Mailchimp from '../../components/Mailchimp'
import './landing.scss';


const Landing = () => {
/*Initialize firebase context*/   
const firebase = useContext(FirebaseContext)

/*Getting content for landing page*/ 
const [landingData, setLandingData] = useState([]) 
var myData = []

useEffect(()=> {
    const getData = () => { firebase.landing()
    .then( querySnapshot => {
        querySnapshot.forEach((doc) => {       
            for (var i = 0; i < doc.data().fields.length; i++){
                if(doc.data().fields[i].options){
                    for (var j = 0; j < doc.data().fields[i].options.length; j++){
                        myData.push(doc.data().fields[i].options[j].defaultValue)
                    }            
                }
                else{
                    myData.push(doc.data().fields[i].defaultValue)
                }
            }
            setLandingData(myData)         
        })
    })
}
    getData()
}, [])

let backgroundCard = 'rgba(253, 251, 245)'


    return (

        <>
            {/*header image*/}
            <Jumbotron className="ovd-jumbotron"
                imgSrc ='images/landing-head.jpg' 
                content = {landingData[0]}
                content1 = {landingData[1]}
                content2 = {landingData[2]}
                backgroundPosX = {50}
                backgroundPosY = {39}
                color = 'black'
            />
            {/*newsletter section*/}
            <Container className="dark ovd-newsletter">
                <div className="ovd-newsletter-form">
                    <Mailchimp />
                    
                </div>
            </Container>

            {/*qui sommes nous section*/}
            <Container className="ovd-qui pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-5 pb-xl-5">
                <h3 className="mb-3 mb-md-4 mb-xl-5 underline">{landingData[3]}</h3>
                <div className="row">
                    <p className="mt-4 mt-md-0 col-md-6 ovd-qui-content">{landingData[4]}</p>
                    <p className="col-md-6 ovd-qui-content">{landingData[5]}</p>
                </div>
            </Container>

            {/*cards section*/}
            <Container fluid className="dark ovd-cards">
                <div className="container">
                    <p className="ovd-p-bold ovd-cards-accroche text-center pt-3 pt-md-4 pt-xl-5">{landingData[6]}</p>
                    <p className="ovd-cards-accroche-text text-center pt-1 pb-4">{landingData[7]}</p>
                    <CardGroup className='pb-3 pb-md-4 pb-xl-5'>
                        <CardBootstrap
                            backgroundColor = {backgroundCard}
                            imgSrc ='images/picto-confiance.png'
                            title = 'Mieux se connaître'
                            roundedCircle = {false}
                            widthPic = {'40%'}
                            content1 = {landingData[8]}
                        />
                        <CardBootstrap
                        backgroundColor = {backgroundCard}
                            imgSrc ='images/picto-equipe.png'
                            title = 'Croire en son potentiel'
                            roundedCircle = {false}
                            widthPic = {'55%'}
                            content1 = {landingData[9]}                       
                        />
                        <CardBootstrap
                        backgroundColor = {backgroundCard}
                            imgSrc ='images/picto-accompagnement.png'
                            title = 'Se faire accompagner' 
                            roundedCircle = {false}
                            widthPic = {'55%'}
                            content1 = {landingData[10]}                     
                        />
                    </CardGroup>
                </div>
            </Container>
            {/*notre vision section*/}
            <Container className="pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-5 pb-xl-5">              
                    <h3 className="mb-3 mb-md-4 mb-xl-5 underline">{landingData[11]}</h3>
                    <div className="row">
                        <p className=" mt-4 mt-md-0 col-md-4 ovd-qui-content">{landingData[12]}</p>
                        <p className=" col-md-4 ovd-qui-content">{landingData[13]}</p>
                        <img src='images/labyrinthe_transp.png' alt='labyrinthe' className='col-md-4 ovd-landing-vision-img'/>
                    </div>                                  
            </Container>
            {/*quote section*/}
            <Container fluid className="dark">               
                <div className="container pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5 text-center">
                    <q> Si vous voulez réussir,  <br />sachez ce que vous faites, <br />aimez ce que vous faites, <br />et croyez en ce que vous faites. </q>
                    <h4 className="text-end pt-2 pt-md-3 pt-xl-4" style={{color: 'white'}}>- Will Rogers</h4>                  
                </div>
            </Container>
            {/*participer section*/}
            <Container className="pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-5 pb-xl-5">              
                    <h3 className="mb-3 mb-md-4 mb-xl-5 underline">{landingData[14]}</h3>
                    <div className="row">
                        <div className="col-12 col-md-6 mt-4 mt-md-0 mb-3 mb-md-4 mb-xl-5">
                            <h5 className="col-md-6 ovd-qui-content" style= {{width: "100%"}}>{landingData[15]}</h5>
                            <ul>
                                <li>{landingData[16]}</li>
                                <li>{landingData[17]}</li>
                                <li>{landingData[18]}</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="col-md-6 ovd-qui-content" style= {{width: "100%"}}>{landingData[19]}</h5>
                            <ul>
                                <li>{landingData[20]}</li>
                                <li>{landingData[21]}</li>
                            </ul>
                        </div>
                        <LinkContainer to="/Je-m-inscris" className="mb-3 mb-md-4 mb-xl-5" style={{marginLeft: "auto", marginRight: "auto"}}>
                            <Nav.Link className='ovd-sub-link'>Je m'inscris</Nav.Link>
                        </LinkContainer>
                    </div>  
                    <div className="col-12 mt-3 mt-md-4 mt-xl-5 d-flex justify-content-center">
                        <img src='images/group.jpg' alt='group' className= 'img-landing-end'/>
                    </div>
                       
            </Container>


        </>

    )
}

export default Landing
