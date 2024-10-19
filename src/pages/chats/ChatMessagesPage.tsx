import  {FC, useEffect, useState} from "react";
import { Card, Container, Form, Button , } from 'react-bootstrap';
import ChatService from "../../api/ChatService";
// import { WebsocketProvider, socket } from "../../context/WebsocketContext";
import WebsocketComponent from "../../components/websocket/Websocket";


const ChatMessagesPage: FC = () => {


    return(
        <Container>

            <div>ChatMessagesPage</div>
            <WebsocketComponent/>
            
            {/* <WebsocketProvider value={socket}>
                <WebsocketComponent/>
            </WebsocketProvider>  */}
        </Container>
    )
}

export default ChatMessagesPage


