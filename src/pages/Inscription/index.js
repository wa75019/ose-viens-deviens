import { Container, Form, Button } from 'react-bootstrap';
import { useContext, useState, useEffect, useRef } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import emailjs, { init } from 'emailjs-com';
import './inscription.css';

const Inscription = () => {
    /*Initialize firebase context*/   
    const firebase = useContext(FirebaseContext)

    /*Getting content for Site Title*/ 
    const [inscriptionData, setInscriptionData] = useState([]) 
    var myData = []

    useEffect(()=> {
        const getData = () => { firebase.inscription()
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
                setInscriptionData(myData)         
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
                    alert('Une erreur est survenue, merci de réessayer et veillez à remplir tout les champs');
                });
        };

    return (
        <>
            {/*header section*/}
                <Container>
                    <h2 className="underline text-center mt-3 mt-md-4 mt-xl-5 mb-3 mb-md-4 mb-xl-5">{inscriptionData[0]}</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5">
                        <div className="citations">
                            <ul>
                                <li style={{listStyle: 'disc'}}>{inscriptionData[1]}</li>
                                <li style={{listStyle: 'disc'}}>{inscriptionData[2]}</li>
                                <li style={{listStyle: 'disc'}}>{inscriptionData[3]}</li>
                            </ul>
                            <p>{inscriptionData[4]}</p>
                            <p>{inscriptionData[5]}</p>
                        </div>
                        <img src="images/presidente.png" alt="" />
                    </div>
                </Container>
            {/*participer section*/}
                <Container fluid className="dark">               
                    <div className="container pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5">
                        <h3 className="dark underline participer-title">{inscriptionData[6]}</h3>
                        <div className="d-flex flex-column flex-md-row mt-3 mt-md-4 mt-xl-5">
                            <div className="programme col-12 col-md-6">
                                <h4 className="dark">{inscriptionData[7]}</h4>
                                <ul>
                                    <li style={{listStyle: 'disc'}}>{inscriptionData[8]}</li>
                                    <li style={{listStyle: 'disc'}}>{inscriptionData[9]}</li>
                                    <li style={{listStyle: 'disc'}}>{inscriptionData[10]}</li>                                    
                                </ul>
                                <p>{inscriptionData[11]}</p>
                            </div>
                            <div className="atelier col-12 col-md-6">
                                <h4 className="dark">{inscriptionData[12]}</h4>
                                <ul>
                                    <li style={{listStyle: 'disc'}}>{inscriptionData[13]}</li>
                                    <li style={{listStyle: 'disc'}}>{inscriptionData[14]}</li>                             
                                </ul>
                                <p>{inscriptionData[15]}</p>
                            </div>
                        </div>               
                    </div>
                    <div className=" container formulaire">
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
                                Envoyer
                            </Button>
                            
                           
                        </Form>
                    </div>
                </Container>
            {/*calendrier section*/}
                <Container className="d-flex flex-column pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-5 pb-xl-5">              
                        <h3 className="mb-3 mb-md-4 mb-xl-5 underline">{inscriptionData[16]}</h3>
                        <img src='images/calendrier.png' alt='calendrier' />                                
                </Container>
            {/*contenu section*/}
                <Container fluid className="dark">               
                    <div className="container pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5">
                        <h3 className="dark underline participer-title mb-3 mb-md-4 mb-xl-5">{inscriptionData[17]}</h3>
                        <div className="contenu-formation d-flex flex-column flex-md-row">
                            <div className="col-12 col-md-6"> 
                                <div>
                                    <h4>{inscriptionData[18]}</h4>
                                    <ul>
                                        <li>{inscriptionData[19]}</li>
                                        <li>{inscriptionData[20]}</li>
                                        <li>{inscriptionData[21]}</li>
                                        <li>{inscriptionData[22]}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>{inscriptionData[23]}</h4>
                                    <ul>
                                        <li>{inscriptionData[24]}</li>
                                        <li>{inscriptionData[25]}</li>
                                        <li>{inscriptionData[26]}</li>
                                        <li>{inscriptionData[27]}</li>
                                        <li>{inscriptionData[28]}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div>
                                    <h4>{inscriptionData[29]}</h4>
                                    <ul>
                                        <li>{inscriptionData[30]}</li>
                                        <li>{inscriptionData[31]}</li>
                                        <li>{inscriptionData[32]}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>{inscriptionData[33]}</h4>
                                    <ul>
                                        <li>{inscriptionData[34]}</li>
                                        <li>{inscriptionData[35]}</li>
                                        <li>{inscriptionData[36]}</li>
                                        <li>{inscriptionData[37]}</li>
                                        <li>{inscriptionData[38]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>          
                    </div>
                </Container>
            {/*quote section*/}
                <Container fluid>               
                    <div className="container pt-3 pt-md-4 pt-xl-5 pb-3 pb-md-4 pb-xl-5 text-center">
                        <q> Nous croyons à la force du <br />« collectif solidaire et optimiste » <br />et à un nouveau mode de coaching <br /> engagé, responsable et inclusif. </q>
                        <h4 className="text-end pt-2 pt-md-3 pt-xl-4" style={{color: 'black'}}>- Saïda Laurore</h4>                  
                    </div>
                </Container>
        </>
    )
}

export default Inscription
