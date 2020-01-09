import React from 'react';
import axios from 'axios';

const url = "https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles";


export default class Messages extends React.Component {

    constructor(props) {
        super(props)
        this.getMessages = this.getMessages.bind(this)
        this.renderMessages = this.renderMessages.bind(this)
        this.toggleSort = this.toggleSort.bind(this)
    }

    state = {
        messages: [],
        titleAsc: null
    }

    componentDidMount() {
        this.getMessages();
    }

    render() {
        return (
            <div id="messages" className="container">
                <div className="card mb-2 p-2">
                    <div className="row m-0 justify-content-between align-items-center">
                        <div>

                        </div>
                        <div>
                            <button type="button" className="btn btn-danger" onClick={() => this.setState({ messages: [] })}>Удалить все</button>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Avatar</th>
                            <th scope="col" 
                                style={{cursor: "pointer"}}
                                onClick={this.toggleSort}
                            >
                                Title { this.state.titleAsc !== null && (this.state.titleAsc ? <b>&uarr;</b> : <b>&darr;</b>)}
                            </th>
                            <th scope="col">Text</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMessages()}
                    </tbody>
                </table>
            </div>
        )
    }

    toggleSort() {
        this.state.titleAsc = !this.state.titleAsc;
        const k = (this.state.titleAsc) ? -1 : 1;
        this.setState({ messages: this.state.messages.sort((msg1, msg2) => (msg2.text > msg1.text) ? k * 1 : k * -1 ) });
    }

    renderMessages = () => (
        this.state.messages.map(message => (
            <tr key={message.id}>
                <th scope="row">{message.id}</th>
                <td>
                    <img src={message.avatar} alt={message.text} className="img-rounded" />
                </td>
                <td>{message.text}</td>
                <td>{message.title}</td>
                <td>{message.createdAt}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => this.remove(message.id)}>Удалить</button>
                </td>
            </tr>
        ))
    )

    remove(messageId) {
        console.log(messageId);
        this.setState({
            messages: this.state.messages.filter(message => message.id != messageId)
        })
    }

    async getMessages() {
        let resp;
        try {
            resp = await axios.get(url);
        } catch (e) {
            e.response
                ? alert(e.response.data.message)
                : alert("Не удается соединиться с сервером!");
            this.messages = [];
            return;
        }

        this.setState({ messages: resp.data });
    }
}