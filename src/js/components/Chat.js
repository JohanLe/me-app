import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

class Chat extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            username: "",
            messages: []    
        };

        this.handleJoinChat = this.handleJoinChat.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDataRecived = this.handleDataRecived.bind(this);
    }
    componentDidMount(){
        socket.on('connect', function() {
            console.info("Connected");
        });

        socket.on('chat message', this.handleDataRecived);

        socket.on('disconnect', function() {
            this.setState({username: ""});
        });
    }

    handleDataRecived(message) {
        var messages = this.state.messages;
        messages.push(message);
        this.setState({messages:messages});
    }

    handleJoinChat(event) {
        event.preventDefault();

        socket.emit('chat message', 
        {
            username: this.state.username + " joined the chat.",
            text: "",
            time: ""
        });
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
     }

    handleSubmit(event) {
        event.preventDefault();
        var date = new Date();

        if(this.state.username === ""){
            return;
        }
        socket.emit('chat message', 
        {
            username: this.state.username,
            text: this.state.text,
            time: " | " + date.getHours() + " : " + date.getMinutes()
        });
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }



    render() {
        return  <div className="chat-container">

                    


                    <h4>Chat</h4>
                    <form onSubmit={this.handleJoinChat} className="message-form">
                        <label>Username</label>
                        <input type="text" className="message-form-username" onChange={this.handleChangeUsername}/>
                        <input type="submit" value="Join chat" />
                    </form>
                    <div className="all-messages">
                    {this.state.messages.map((msg, index) => (
                        <div key={index} className="message">
                            <p className="all-messages-username"> {msg.username} {msg.time} </p>
                            <p className="all-messages-text">  {msg.text}</p>
                        </div>

                    ))}

                    </div>

                    <form onSubmit={this.handleSubmit} className="message-form">
                        <label>Message</label>
                        <input type="text" className="message-form-text" onChange={this.handleChangeText}/>
                        <input type="submit" value="Skicka" />
                    </form>
                    
                </div>
    }
}






export default Chat;