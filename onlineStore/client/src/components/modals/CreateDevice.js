import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Dropdown, Form, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../../index";
const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title: "", description:"", number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adding Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown >
                        <Dropdown.Toggle className={"mt-2"}>Enter type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className={"mt-2"}>Enter brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className={"mt-2"} placeholder={"Enter device name"}/>
                    <Form.Control className={"mt-2"} placeholder={"Enter device price"}/>
                    <Form.Control className={"mt-2"} placeholder={"Pickup image"} type={"file"}/>
                    <hr/>
                    <Button variant={"outline-dark"} onClick={addInfo}>
                        Add new property
                    </Button>
                    {info.map(i =>
                            <Row className={"mt-3"} key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder={"Enter property name"}/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder={"Enter property description"}/>
                                </Col>
                                <Col md={4}>
                                    <Button variant={"outline-danger"} onClick={() => removeInfo(i.number)}>Delete</Button>
                                </Col>
                            </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={onHide} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;