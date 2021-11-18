import React, { useState } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleBlur = (e) => {
        setEmail(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    setSuccess(true);
                }
            })

    }
    return (
        <div className="make-admin">

            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingEmail" label="Email">
                    <Form.Control onBlur={handleBlur} type="email" name="email" required />
                </FloatingLabel><br /><br />
                <Button type='submit' variant="primary">Make Admin</Button>
            </form>
            <br />
            {success && <Alert variant="success">
                Success! {email} is now Admin
            </Alert>}
        </div>
    );
};

export default MakeAdmin;