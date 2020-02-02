import React from "react";
import Product from "./Product";
import './ProductFile.css';
import {
  Modal,
  Button,
  Container,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";


class ProductFile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Modal: false
    };
    this.toggle = this.toggle.bind(this);
    console.log(props.props);
  }
  toggle() {
    this.setState(prevState => ({
      Modal: !prevState.Modal
    }));
    // console.log(this.props);
  }
  render() {
    return (
      <Container>
        {/* <Button color='success' onClick={this.toggle}>Comprar</Button> */}
        <Button color="secondary" onClick={this.toggle}>Ver Información</Button>
        <Modal isOpen={this.state.Modal}>
    <ModalHeader>{this.props.props.title}</ModalHeader>
          <ModalBody>
          huevitos body

          </ModalBody>
          <ModalFooter className= "modalFooter" >
          <Button color="success" onClick={this.toggle}>Agregar al Carrito</Button>
          <Button color="info"onClick={this.toggle}>Volver Atrás</Button>

          </ModalFooter>
          huevitos modal
        </Modal>
      </Container>
    );
  }
}
export default ProductFile;
