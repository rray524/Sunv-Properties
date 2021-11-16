import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Modal } from 'react-bootstrap';
import Rating from 'react-rating';
import { useLocation } from 'react-router';

// modal function

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
                <h4>You have created a review Successfully.</h4>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Review = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [reviewInfo, setReviewInfo] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
        console.log(reviewInfo);
    }

    const [rating, setRating] = useState();
    const handleOnClick = e => {
        setRating(parseInt(e));

    }

    const handSubmit = e => {
        e.preventDefault();
        const result = {
            ...reviewInfo, star: rating
        }
        // send to DB
        fetch('http://localhost:5000/reviews', {
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
        <div id="review-form">
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <form onSubmit={handSubmit}>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleOnBlur} type="text" name="client" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingImg" label="Your Image URL( Try: 1200X1200px)">
                    <Form.Control onBlur={handleOnBlur} type="url" name="url" required />
                </FloatingLabel><br />
                <h4>Rate Sunv Properties LTD.</h4>
                <Rating
                    onClick={handleOnClick}
                    name="rating"
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                /><br /><br />

                <div className="form-floating">
                    <textarea onBlur={handleOnBlur} required name="testimonial" className="form-control" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Write Your Testimonial</label>
                </div><br />
                <Button type='submit' variant="light">Create Review</Button>



            </form>
        </div>
    );
};

export default Review;