import React from "react";
import styles from "./Product.css";
import { render } from "react-dom";
import {
  Card,
  Col,
  CardImg,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

function Product(props) {
  return (
    <Col sm="3">
      <Card className="Card" body outline color="primary">
        <CardBody>
          <CardImg src={props.img} />
          <CardImg src={props.img2} />

          {/* http://huevoscoliumo.cl/#Productos */}

          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button className="Button">Comprar</Button>
          <Button className="Button">Ver Detalles</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
export default Product;
