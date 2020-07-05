import React, {useState} from 'react';
import {Button, Form, Input, Col} from "reactstrap";
import {Link} from "react-router-dom";
import imgLogo from "../images/main_logo.png";
import "./Main.css";

const Main = () => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const keywordChange = (e) => setSearchKeyword(e.target.value)

    return(
        <>
            <img class="main-image" src={imgLogo} />
            <div class="search-container">
                <Input type="text" placeholder="영화 검색어를 입력하세요 ex: 해리포터" className="search-text" value={searchKeyword} onChange={keywordChange}/>
                <Link to={`/search/${searchKeyword}`}>
                    <Button type="submit" color="primary" className="search-button">검색</Button>
                </Link>
            </div>
        </>
    );
    
}

export default Main;