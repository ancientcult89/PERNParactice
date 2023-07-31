import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {createType} from "../../http/deviceApi";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";

const CreateType = ({show, onHide}) => {
    const[value, setValue] = useState('');
    const navigate = useNavigate();
    const addType = () => {
        createType({name: value})
            .then(data => {
                setValue('')
                onHide()
                navigate(SHOP_ROUTE)}
            );
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
                    Adding Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Enter new type"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={addType} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;