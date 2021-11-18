import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Modal } from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <h4>You have created a product Successfully.</h4>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
const AddProduct = () => {
    const [modalShow, setModalShow] = React.useState(false);
    let [productInfo, setProductInfo] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
        console.log(productInfo);
    }

    const handSubmit = e => {
        e.preventDefault();
        const result = {
            ...productInfo
        }
        // send to DB
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setModalShow(true);

                }

            })

    }

    return (
        <div id="add-product">
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <form onSubmit={handSubmit}>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Property Name"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleOnBlur} type="text" name="name" required />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Property Price"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleOnBlur} type="number" name="price" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingImg" label="Properties Image URL">
                    <Form.Control onBlur={handleOnBlur} type="url" name="url" required />
                </FloatingLabel><br />

                <div className="form-floating">
                    <textarea onBlur={handleOnBlur} required name="description" className="form-control" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Write Property Details</label>
                </div><br />
                <Button type='submit' variant="light">Create New Product</Button>
            </form>
        </div>
    );
};

export default AddProduct;