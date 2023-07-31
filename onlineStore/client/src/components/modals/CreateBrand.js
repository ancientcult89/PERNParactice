import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {createBrand} from "../../http/deviceApi";
import {SHOP_ROUTE} from "../../utils/consts";

const CreateBrand = ({show, onHide}) => {
    const[value, setValue] = useState('');
    const navigate = useNavigate();
    const addBrand = () => {
        createBrand({name: value})
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
                    Adding Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Enter new Brand"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={addBrand} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;