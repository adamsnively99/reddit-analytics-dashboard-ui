import * as React from "react";

export class UsernameInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {username: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.username);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" name="submit"/>
            </form>
        );
    }
}