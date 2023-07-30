import React, {useEffect, useState} from "react";
import {Button, Card, Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import bigStar from "../assets/bigStar.png"
import {useParams} from "react-router-dom"
import {fetchOneDevices} from "../http/deviceApi";

const DevicePage = () => {
    const [device, setDevice]  = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data));
    }, []);

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL +  device.img}></Image>
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
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent"}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;