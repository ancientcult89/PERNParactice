import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {
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
                    <Form.Control placeholder="Enter new Brand"></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={onHide} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;