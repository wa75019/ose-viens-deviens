import { Container, CardGroup } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import CardBootstrap from '../../components/CardBootstrap';
import { FirebaseContext } from '../../components/Firebase';
import './qui.css';

const Qui = () => {
    /*Initialize firebase context*/   
    const firebase = useContext(FirebaseContext)

    /*Getting content for Site Title*/ 
    const [quiData, setQuiData] = useState([]) 
    var myData = []

    useEffect(()=> {
        const getData = () => { firebase.qui()
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
                setQuiData(myData)         
            })
        })
    }
        getData()
    }, [])


    return (
        <>
        {/*texte haut de page*/} 
        <Container>
            <h3 className="text-center pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-5 pb-xl-5 underline">{quiData[0]}</h3>
            <p className="text-center">{quiData[1]}</p>
        </Container>
        {/*presentation personnes asso*/} 
        <Container>
            <CardGroup>
                <CardBootstrap 
                    backgroundColor = {'transparent'}
                    imgSrc ='images/qui-saida.png' 
                    roundedCircle = {true}
                    title = {quiData[2]}
                    fonction = {quiData[3]}
                    widthPic = {'70%'}
                    content1 = {quiData[4]}
                    content2 = {quiData[5]}
                />
                <CardBootstrap 
                    backgroundColor = {'transparent'}
                    imgSrc ='images/qui-benoit.png' 
                    roundedCircle = {true}
                    title = {quiData[6]}
                    fonction = {quiData[7]}
                    widthPic = {'70%'}
                    content1 = {quiData[8]}
                    content2 = {quiData[9]}
                    content3 = {quiData[10]}
                    content4 = {quiData[11]}
                />
                <CardBootstrap
                    backgroundColor = {'transparent'}
                    imgSrc ='images/qui-ksenia.png' 
                    roundedCircle = {true}
                    title = {quiData[12]}
                    fonction = {quiData[13]}
                    widthPic = {'70%'}
                    content1 = {quiData[14]}
                    content2 = {quiData[15]}
                />
                <CardBootstrap 
                    backgroundColor = {'transparent'}
                    imgSrc ='images/qui-olga.png' 
                    roundedCircle = {true}
                    title = {quiData[16]}
                    fonction = {quiData[17]}
                    widthPic = {'70%'}
                    content1 = {quiData[18]}
                    content2 = {quiData[19]}
                    content3 = {quiData[20]}
                />
            </CardGroup>
        </Container>
        {/*notre approche section*/}
        <Container fluid className="dark">               
                <div className="container d-md-flex pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5">
                    <img src="images/jobresearch.png" alt="" className="qui-img mb-3" /> 
                    <div className="qui-p">
                        <h3 className='underline dark mb-4 mb-md-5'>{quiData[21]}</h3>
                        <p className='mb-3'>{quiData[22]}</p>
                        <p className='mb-3'>{quiData[23]}</p>
                        <p className='mb-3'>{quiData[24]}</p>
                    </div>          
                </div>
        </Container>
        {/*notre accompagnement section*/}
        <Container>      
            <h3 className='underline mt-4 mt-md-5 mb-4 mb-md-5'>{quiData[25]}</h3>         
                <div className="d-md-flex pb-3 pb-md-4 pb-xl-5">
                    <div className="qui-p">
                        <p className='mb-4'>{quiData[26]}</p>
                        <p className='mb-3'>{quiData[27]}</p>
                        <ul className='mb-4 mb-md-5'>
                            <li>{quiData[28]}</li>
                            <li>{quiData[29]}</li>
                            <li>{quiData[30]}</li>
                            <li>{quiData[31]}</li>
                        </ul>
                    </div>      
                    <img src="images/accompagnement.png" alt="" className="qui-img mb-3" />     
                </div>
            </Container>
        {/*notre programme section*/}
        <Container fluid className="dark">               
                <div className="container d-md-flex pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5">
                <div className="qui-p order-md-2">
                        <h3 className='underline dark mb-4 mb-md-5'>{quiData[32]}</h3>
                        <p className='mb-3'>{quiData[33]}</p>
                        <p className='mb-3'>{quiData[34]}</p>
                        <p className='mb-4'>{quiData[35]}</p>
                    </div>   
                <img src="images/programme.png" alt="" className="order-md-1 qui-img" /> 
                           
                </div>
        </Container>
        </>

    )
}

export default Qui
