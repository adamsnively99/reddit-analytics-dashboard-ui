import * as React from "react";
import {UsernameInput} from "./UsernameInput";

export class UsernameInputForm extends React.Component {
    render() {
        return (
            <div>
                <span>Enter a username to view their comments</span>
                <UsernameInput onSubmit={this.props.onSubmit}/>
            </div>
        );
    }
}