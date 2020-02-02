import React from "react";
import styles from "./Product.css";
// import { render } from "react-dom";
import ProductFile from './ProductFile';
import {
  Card,
  Col,
  CardImg,
  CardBody,
//   CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
//   Button
} from "reactstrap";


class Product extends React.Component{
    render(){
  return (
    <Col sm="5">
      <Card className="Card" body outline color="primary">
        <CardBody>
          <CardImg className= "CardImg" src={this.props.img} />
          <CardImg src={this.props.img2} />

          {/* http://huevoscoliumo.cl/#Productos */}

          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.price}</CardSubtitle>
          <CardText>{this.props.description}</CardText>
          <ProductFile props={this.props} />
          {/* <Button className="Button">Comprar</Button> */}
          {/* <Button className="Button">Ver Detalles</Button> */}
        </CardBody>
      </Card>
    </Col>
  )
}
}
//   );
// }
export default Product;
