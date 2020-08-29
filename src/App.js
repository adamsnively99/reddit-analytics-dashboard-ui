import React from 'react';
import './App.css';
import {UsernameInputForm} from "./UsernameInputForm";
import {CommentTable} from "./CommentTable";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.commentTable = React.createRef();
        this.submitUsername = this.submitUsername.bind(this);
    }

    submitUsername(username) {

        let comments = [];

        fetch('http://reddit-analytics-dashboard-dev.us-east-2.elasticbeanstalk.com/top-comments/' + username)
            .then(response => response.json())
            .then(data => {
                comments = data.comments;
                this.commentTable.current.setState({comments: comments});
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <UsernameInputForm onSubmit={this.submitUsername}/>
                <CommentTable ref={this.commentTable}/>
            </div>
        );
    }
}

export default App;
