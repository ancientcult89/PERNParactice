import React from 'react';
import Col from "react-bootstrap/Col";
import {Card, Image} from "react-bootstrap";
import star from "../assets/star.png"
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

export const DeviceItem = ({device}) => {
    const  hystory = useHistory();
    return (
        <Col md={3} className={"mt-4"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image src={device.img} width={150} height={150}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18} ></Image>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};