import React, {useState} from "react";
import {Card, CardBody, CardText, Col, CardFooter} from "reactstrap";

const MovieItem = ({title, link, image, pubDate, director, actor, userRating}) => {

    return (
        <Col xs="12" sm="4" md="4" lg="4">
            <a href={link} style={{textDecoration:"none", color:"black" }}>
                <Card style={{backgroundColor: "#eaffe0", width: "90%"}} className="m-3 p-1">
                    <CardBody style={{backgroundColor: "#ffffff", height: "250px"}} className="p-2">
                        <CardText>
                            <img src={image} alt="image"/>
                            <h5>{title}</h5>
                            <h6>개봉년도 : {pubDate}</h6>
                            <h6>평점 : {userRating}</h6>
                        </CardText>
                    </CardBody>
                    <CardFooter style={{backgroundColor: "#ffffff"}} className="p-2">
                        <CardText>
                            <h6>감독 : {director.join(",")}</h6>
                            <h6>주연 : {actor.join(",")}</h6>
                        </CardText>
                    </CardFooter>
                </Card>
            </a>
        </Col>
    )
}

export default MovieItem;