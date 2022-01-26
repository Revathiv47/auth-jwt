import React from 'react';
import {Container, Row, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="main">
            <Container>
                <Row>
                   <div className="intro-text">
                       <div>
                           <h1 className="title">Welcome to TODO App</h1>
                           <p className="subtitle">List your Tasks!</p>
                       </div>
                       <div className="buttonContainer">
                       <Link to="/login">
                            <Button size="lg" type="button" class="btn btn-primary btn-lg">Login</Button>
                           </Link>
                           <Link to="/register">
                               <Button  size="lg" class="btn btn-primary btn-lg">Signup</Button>
                           </Link>

                       </div>

                   </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
