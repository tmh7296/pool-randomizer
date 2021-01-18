import React, {Component} from 'react';

class Output extends Component {
    render() {
        const {output, generateOrder} = this.props;
        return (
            <div className="output">
                <button className="groupButton" onClick={generateOrder}>Generate Order</button>
                <div className="output-order">
                    {output.map((name, idx) => 
                        <div className="output-item" key={idx}>{`${idx + 1}. ${name}`}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default Output;