import React, {useState, useEffect, Component} from 'react';
import {Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Link, BrowserRouter, Switch, Route, useHistory, Redirect} from "react-router-dom";
import "./Main.css";
import imgLogo from "../images/main_logo.png";

const Main = () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const keywordChange = (e) => setSearchKeyword(e.target.value)

    return(
        <Form>
            <img class="main-image" src={imgLogo} />
            <div class="search-container">
                <Input type="text" placeholder="영화 검색어를 입력하세요 ex: 해리포터" className="search-text" value={searchKeyword} onChange={keywordChange}/>
                <Link to={`/search/${searchKeyword}`}>
                    <Button type="submit" color="primary" className="search-button">검색</Button>
                </Link>
            </div>
        </Form>
    );
    
}

export default Main;