import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import NavBar from '../Home/NavBar/NavBar';


// const socket = io.connect('http://localhost:4300/')

const Message = () => {

	const [ state, setState ] = useState({ message: "", name: "" })
    const [chat, setChat] = useState([])
    console.log(chat);


    const socketRef = useRef()

    useEffect(
        () => {
            socketRef.current = io.connect("http://localhost:4300/")
            socketRef.current.on("message", ({ name, message }) => {
                setChat([...chat, { name, message }])
            })
            return () => socketRef.current.disconnect()
        },
        [chat]
    )

    const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <form onSubmit={onMessageSubmit}>
                                    <h4>Let's Chat</h4>
                                    <div className="mb-3">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" onChange={e => onTextChange(e)} value={state.name} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Message</label>
                                        <input type="text" name="message" onChange={e => onTextChange(e)} value={state.message} />
                                    </div>
                                    <div className="mb-3">
                                        <button className="logInBtn">Send Message</button>
                                    </div>
                                </form>

                            </div>
                            <div className="col-md-6">
                                <div className="render-Chat">
                                    <h3>Chat Log</h3>
                                    {renderChat()}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;