import React from "react";
import {XYPlot, MarkSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, Hint} from "react-vis";
import 'react-vis/dist/style.css';
import './CommentTable.css';

export class CommentTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {comments: [], hoveredNode: null};
    }

    addComments(comments) {
        this.setState({comments: comments});
    }

    render() {
        const data = this.state.comments.map((comment) => {
            return {
                x: comment.sentiment,
                y: comment.score,
                ...comment
            }
        });


        return (
            <div>
                <XYPlot className="data-plot" height={600} width={600}
                        onMouseLeave={() => this.setState({hoveredNode: null})}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <MarkSeries onValueMouseOver={d => this.setState({hoveredNode: d})}
                                className="mark-series-example" opacity="0.8" strokeWidth={2} data={data}/>
                    <XAxis title="Comment Sentiment"/>
                    <YAxis title="Comment Score"/>
                    { this.state.hoveredNode && ( <Hint value={{
                        score: this.state.hoveredNode.y,
                        sentiment: this.state.hoveredNode.x,
                        subreddit: this.state.hoveredNode.subreddit,
                        text: this.state.hoveredNode.text
                    }} />)}
                </XYPlot>
            </div>
        );
    }
}