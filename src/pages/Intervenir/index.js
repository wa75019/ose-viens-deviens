import { Container, Form, Button } from 'react-bootstrap';
import { useContext, useState, useEffect, useRef } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import emailjs, { init } from 'emailjs-com';
import './intervenir.css';
import Jumbotron from '../../components/Jumbotron';

const Intervenir = () => {
        /*Initialize firebase context*/   
        const firebase = useContext(FirebaseContext)

        /*Getting content for Site Title*/ 
        const [intervenirData, setIntervenirData] = useState([]) 
        var myData = []
    
        useEffect(()=> {
            const getData = () => { firebase.intervenir()
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
                    setIntervenirData(myData)         
                })
            })
        }
            getData()
        }, [])

        const form = useRef();
        init(`${process.env.REACT_APP_GMAIL_USER_ID}`);
        const [toSend, setToSend] = useState({
            from_name: '',
            message: '',
            reply_to: '',
        });
        const handleChange = (e) => {
            setToSend({ ...toSend, [e.target.name]: e.target.value });
        };

        const onSubmit = (e) => {
            e.preventDefault();
            
            emailjs.sendForm(`${process.env.REACT_APP_GMAIL_SERVICE_ID}`, `${process.env.REACT_APP_GMAIL_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_GMAIL_USER_ID}`)
                .then((result) => {
                    alert('Merci pour votre message, nous vous répondrons dès que possible.');
                    setToSend({
                        from_name: '',
                        message: '',
                        reply_to: '',
                    })
                }, (error) => {
                    alert('Une erreure est survenue, merci de réessayer et veillez à remplir tout les champs');
                });
        };

    return (

        <>
        
            {/*header image*/}
            <Jumbotron className="ovd-jumbotron-intervenir"
                        imgSrc ='images/intervenir-head.jpg' 
                        backgroundPosX = {50}
                        backgroundPosY = {10}
                        color = 'black'
            />
            {/*intervenir titre*/}
            <Container className="pt-3 pt-md-4 pt-xl-5">              
                    <h3 className="mb-3 mb-md-4 underline text-center">{intervenirData[0]}</h3>                                 
            </Container>
            {/*intervenir content*/}
            <Container className="pb-3 pt-md-4 pb-md-4 pb-xl-5">              
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div>
                            <h4 className="text-center">{intervenirData[1]}</h4>
                            <p className="text-justify intervenir-text">{intervenirData[2]}</p>
                        </div>
                        <div>
                            <h4 className="text-center">{intervenirData[3]}</h4>
                            <p className="text-justify intervenir-text">{intervenirData[4]}</p>
                        </div>
                        <div>
                            <h4 className="text-center">{intervenirData[5]}</h4>
                            <p className="text-justify intervenir-text">{intervenirData[6]}</p>
                        </div>
                    </div>                       
            </Container>
            {/*formulaire section*/}
            <Container fluid className="dark">
                <h3 className="dark underline text-center mb-5 pt-4">Nous contacter</h3>
                <div className="container contact flex-column flex-md-row d-flex justify-content-between">
                    <div className="contact-tel">
                        <p>Si vous souhaitez participer en tant qu'intervenant et/ ou pour plus de renseignements, vous pouvez nous contacter via le formulaire ci-contre. </p>
                        <p>Nous vous répondrons avec plaisir.</p>
                    </div>
                    <div className="formulaire">
                        <Form ref={form} onSubmit={onSubmit}>
                            <Form.Group className=" pb-2" controlId="form.Name">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control  
                                    type="text" 
                                    placeholder="Entrer votre nom"
                                    name="from_name" 
                                    value={toSend.from_name} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>
                            <Form.Group className=" pb-2" controlId="form.Email">
                                <Form.Label>Adresse e-mail</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="nom@example.com"
                                    name="reply_to" 
                                    value={toSend.reply_to}
                                    onChange={handleChange}

                                />
                            </Form.Group>
                            <Form.Group className=" pb-5" controlId="form.Textarea">
                                <Form.Label>Votre message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={6} 
                                    name="message"
                                    placeholder="Entrer votre message"
                                    value={toSend.message}
                                    onChange={handleChange}

                                />
                            </Form.Group>
                            <Button className="mb-3 mb-md-4 mb-xl-5 formButton" type="submit">
                                Envoyez
                            </Button>
                            
                           
                        </Form>
                    </div>
                </div>             
                
            </Container>
    </>
    )
}

export default Intervenir
