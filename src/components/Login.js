import React, { useState } from 'react';
import { Card, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data); // handle server response here
      if (data.token) {
        setShowAlert(true); // show success message
        // you can store the token in local storage or cookies here
        window.location.href = '/home'; // redirect to home page after successful login
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <Card>
            <div className="card-header">
              Login
            </div>
            <div className="card-body">
              {showAlert && <Alert color="success">Logged in successfully!</Alert>}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Username / Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email or username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary" block>
                  Login
                </Button>
              </Form>
            </div>
            <div className="card-footer text-center">
              <div className="mb-3">Don't have an account?</div>
              <Link to="/signup" className="btn btn-secondary btn-block">
                Go to Register
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;