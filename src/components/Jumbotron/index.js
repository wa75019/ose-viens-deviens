import React from 'react';
import './jumbotron.scss';


const Jumbotron = ({imgSrc, title, content, content1, content2, backgroundPosX, backgroundPosY, color}) => {
    const jumboStyle = {
        background : `url('${imgSrc}')`,
        backgroundPosX : `${backgroundPosX}%`,
        backgroundPosY : `${backgroundPosY}%`,
        color : `${color}`,
    }


    return (
        <div className="jumbotron jumbotron-fluid" style={{background: jumboStyle.background, backgroundPosition : `${jumboStyle.backgroundPosX} ${jumboStyle.backgroundPosY}`, backgroundRepeat : 'no-repeat', backgroundColor: 'white'}}>
            <div className="container" >
                <div className="jumbo-text pt-5">
                    {title && <h1 className="display-4 text-center" style={{backgroundColor: 'white'}}>{title}</h1>}
                    {content && <p className="lead " style= {{"color" : `${jumboStyle.color}`}}>{content}</p>}
                    {content1 && <p className="lead " style= {{"color" : `${jumboStyle.color}`}}>{content1}</p>}
                    {content2 && <p className="lead pb-2 pb-md-3" style= {{"color" : `${jumboStyle.color}`}}>{content2}</p>}
                </div>
            </div>
        </div>

    )
}

export default Jumbotron

