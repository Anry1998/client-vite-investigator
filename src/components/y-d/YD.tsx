

import  {FC} from "react";

import {  Container,  } from 'react-bootstrap';

// import './MainPage.scss'
import Images from "../images/Images";

const YDPage: FC = () => {

    return(
        <Container>
 
                        <div style={{display: 'flex', justifyContent: "center", }}>
                            <div>Уголовные дела</div>
                            <div>Материаоы КУСП</div>
                        </div>
        
        </Container>
    )
}

export default YDPage