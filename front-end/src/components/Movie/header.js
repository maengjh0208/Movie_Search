import React, {useState, useEffect, Component} from 'react';
import {Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Link, BrowserRouter, Switch, Route, useHistory, Redirect} from "react-router-dom";
import "./header.css";

const Header = ({query}) => {

    const [searchKeyword, setSearchKeyword] = useState(query);
    const keywordChange = (e) => setSearchKeyword(e.target.value)

    return(
            <div class="search-container">
                <Input type="text" className="search-text" value={searchKeyword} onChange={keywordChange}/>
                <a href={`/search/${searchKeyword}`}>
                    <Button type="submit" color="primary" className="search-button">검색</Button>
                </a>
            </div>
    );
    
}

export default Header;