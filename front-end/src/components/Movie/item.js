import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardText, CardTitle, Col, Row, CardHeader, CardFooter} from "reactstrap";
import {Button, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const MovieItem = ({title, link, image, pubDate, director, actor, userRating}) => {

    return (
        <Col xs="4" sm="4" md="4" lg="4">
            <a href={link} style={{textDecoration:"none", color:"black" }}>
                <Card style={{backgroundColor: "#eaffe0"}} className="m-3 p-1">
                    <CardBody style={{backgroundColor: "#ffffff", height: "300px"}} className="p-2">
                        <CardText>
                            <img src={image} alt="image"/>
                            <h5>{title}</h5>
                            <h6>개봉년도 : {pubDate}</h6>
                            <h6>평점 : {userRating}</h6>
                        </CardText>
                    </CardBody>
                </Card>
            </a>
        </Col>
    )
}

export default MovieItem;