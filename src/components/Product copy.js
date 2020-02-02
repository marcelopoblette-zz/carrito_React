import React from 'react';
import styles from './Product.css';
import { render } from 'react-dom';
import {Card, Col, CardImg,CardBody, CardHeader,  CardTitle,CardSubtitle, CardText, Button } from 'reactstrap';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
// import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';



const style= {
    color: "#cf57e4"
    }
const style2= {
        color: "#d0a3d7"
    }
const style3= {
        color: "#e91e63"
    }



function Product(props){

    return(
        <Col sm ="3">
            <Card className= "Card" body outline color="primary">
            <CardBody>
            {/* <CardHeader><h4 style ={style}>Huevitos Regimar</h4></CardHeader> */}
    
    <CardImg src ={props.img}/>
    <CardImg src ={props.img2}/>
    
    
    {/* <CardImg src = "http://huevoscoliumo.cl/#Productos"/> */}
        
        <CardTitle><h4 style ={style2}>{props.title}</h4></CardTitle>
        <CardSubtitle><h4 style ={style}>{props.price}</h4></CardSubtitle>
    <CardText style ={style3}>{props.description}</CardText>
        <Button className= "Button">Comprar</Button>
        <Button className= "Button">Ver Detalles</Button>

        {/* <div className="text-wrapper">
      <LoremIpsum startWithLoremIpsum={1} />
    </div> */}
    </CardBody>
  
          
            </Card>
        </Col>
    );


}
export default Product;