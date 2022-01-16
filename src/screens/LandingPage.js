import React from 'react';
import {Container, Row, Button} from "react-bootstrap";
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="main">
            <Container>
                <Row>
                   <div className="intro-text">
                       <div>
                           <h1 className="title">Welcome to Note Zipper</h1>
                           <p className="subtitle">List your Notes!</p>
                       </div>
                       <div className="buttonContainer">
                           <a href ='/login'>
                               <Button size="lg" type="button" class="btn btn-primary btn-lg">Login</Button>
                           </a> 
                           <a href ='/register'>
                               <Button  size="lg" class="btn btn-primary btn-lg">Signup</Button>
                           </a>

                       </div>

                   </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
