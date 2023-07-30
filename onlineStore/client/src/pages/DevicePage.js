import React from "react";
import {Button, Card, Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import bigStar from "../assets/bigStar.png"

const DevicePage = (id) => {
    const device = {
        id: 1,
        name: "IPhone 12",
        price: 25000,
        rating: 5,
        img: "https://m.media-amazon.com/images/I/71ZhhSe9cML.__AC_SX300_SY300_QL70_ML2_.jpg",
    }
    const description = [
        {id: 1, title: "RAM", description: "32Gb"},
        {id: 2, title: "Camera", description: "12Mpx"},
        {id: 3, title: "CPU", description: "core i7"},
        {id: 4, title: "CPU cores", description: "2"},
        {id: 5, title: "Battery", description: "4000"},
    ];
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}></Image>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>
                            {device.name}
                        </h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: "cover"}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height:300, fontSize: 300, border:"5px solid lightgray"}}
                    >
                        <h2>From: {device.price}</h2>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Characteristics</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent"}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;