import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Dropdown, Form, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";
const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])
    const addInfo = () => {
        setInfo([...info, {title: "", description:"", number: Date.now()}])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(data => onHide());
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
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
                        <Dropdown.Toggle className={"mt-2"}>{ device.selectedType.name || 'Enter type'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className={"mt-2"}>{ device.selectedBrand.name || 'Enter brand'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={"mt-2"}
                        placeholder={"Enter device name"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className={"mt-2"}
                        placeholder={"Enter device price"}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className={"mt-2"}
                        placeholder={"Pickup image"}
                        type={"file"}
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button variant={"outline-dark"} onClick={addInfo}>
                        Add new property
                    </Button>
                    {info.map(i =>
                            <Row className={"mt-3"} key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder={"Enter property name"}
                                        onChange={e => changeInfo('title', e.target.value, i.number)}
                                        value={i.title}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder={"Enter property description"}
                                        onChange={e => changeInfo('description', e.target.value, i.number)}
                                        value={i.description}
                                    />
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
                <Button onClick={addDevice} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;