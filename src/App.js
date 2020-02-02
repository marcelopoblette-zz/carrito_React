import React from "react";
// import logo from './logo.svg';
import Product from "./components/Product";
import "./App.css";
import { Container, Row } from "reactstrap";

function App() {
  return (
    <Container>
      <Row sm="1">
        <Product
          title="Bandeja 30 Huevitos Extra Color"
          img="https://cdn.pixabay.com/photo/2018/05/20/23/54/eggs-3417135_960_720.jpg"
          // img="https://cdn.pixabay.com/photo/2016/07/23/15/24/egg-1536990_960_720.jpg"
          description="* Incluye Despacho Gratutito dentro de la Comuna San Miguel"
          price="$4.000"
        />

        <Product
          title="Bandeja 30 Huevitos Super Color"
          img="https://cdn.pixabay.com/photo/2019/10/14/07/20/egg-4548052_960_720.jpg"
          // img="https://scontent.fscl21-1.fna.fbcdn.net/v/t1.0-9/83881529_183305219696917_7125831793286053888_o.jpg?_nc_cat=101&_nc_oc=AQkbmRC8DMgkep9pJgyY7N_LZXDKMLDqF3HTFJAyFfpwp4GBx7qqfENjMkTx5MV1R-I&_nc_ht=scontent.fscl21-1.fna&oh=f271970f9f0b0bba1b945d45138e5f2e&oe=5EC25D3C"
          description="* Incluye Despacho Gratutito dentro de la Comuna San Miguel"
          price="$4.500"
        />
        <Product
          title="Bandeja 20 Huevitos Jumbo Color"
          img="https://cdn.pixabay.com/photo/2016/12/06/19/25/eggs-1887395_960_720.jpg"
          description="* Incluye Despacho Gratutito dentro de la Comuna San Miguel"
          price="$4.000"
        />
        <Product
          title="Bolsa Ecológica 10 kg"
          // img="https://scontent.fscl21-1.fna.fbcdn.net/v/t1.0-9/69844384_123490049011768_4377604184761958400_n.jpg?_nc_cat=110&_nc_oc=AQkd_jS9SjhueXY9rRwm1xbtbTEVLQlO-Ls8_FOt335Y9FFQ81UpIlIhUv0RmATTmMM&_nc_ht=scontent.fscl21-1.fna&oh=ed46255bfe46ba1ba8b490f6bd93b94f&oe=5ECCEDFC"
          img="https://scontent.fscl21-1.fna.fbcdn.net/v/t1.0-9/69562697_123489999011773_4629328906560733184_n.jpg?_nc_cat=103&_nc_oc=AQkQXekak8GmDTAvc8f7IvSn3cRsIfF72tDoX0inOcUbAw4gVNEv5jXipb0McOmWUx4&_nc_ht=scontent.fscl21-1.fna&oh=7c5945424d01e1cd912c26ca6061b457&oe=5EC6D935"
          description="* Incluye Despacho Gratutito dentro de la Comuna San Miguel"
          price="$800"
        />
      </Row>
    </Container>
  );
}

export default App;
