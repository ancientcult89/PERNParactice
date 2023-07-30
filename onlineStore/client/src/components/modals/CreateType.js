import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CreateType = ({show, onHide}) => {
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
                    <Form.Control placeholder="Enter new type"></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant={"outline-danger"}>Close</Button>
                <Button onClick={onHide} variant={"outline-success"}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;