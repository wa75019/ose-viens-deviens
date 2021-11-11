import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './card.scss';

const CardBootstrap = (props) => {
  let title;
  if (props.title){
    title = <Card.Text className='ovd-card-title ovd-p-bold text-center'>
              {props.title}
            </Card.Text>
  }
  let fonction;
  if (props.fonction){
    fonction = <Card.Text className='ovd-card-title text-center'>
                {props.fonction}
              </Card.Text>
  }
  let contenu2;
  if (props.content2){
    contenu2 = <Card.Text className="text-center"style={{color:'$dark-color'}}>
                {props.content2}
              </Card.Text>
  }
  let contenu3;
  if (props.content3){
    contenu3 = <Card.Text className="text-center" style={{color:'black'}}>
                {props.content3}
              </Card.Text>
  }
  let contenu4;
  if (props.content4){
    contenu4 = <Card.Text className="text-center" style={{color:'black'}}>
                {props.content4}
              </Card.Text>
  }
    return (
        <Card className="ovd-card" style={{border: 'none', background:`${props.backgroundColor}`}}>
          <Image roundedCircle={props.roundedCircle} variant="top" src={props.imgSrc} style={{width: `${props.widthPic}`, margin: '0px auto 20px auto'}}/>
          <Card.Body>

             {title}

            {fonction}
            <Card.Text className="text-center" style={{color:'black'}}>
              {props.content1}
            </Card.Text>
            {contenu2}
            {contenu3}
            {contenu4}
          </Card.Body>
        </Card>
    )
}

export default CardBootstrap
