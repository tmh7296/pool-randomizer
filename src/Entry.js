import React, {Component} from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.updateEntry = this.updateEntry.bind(this);
    }

    updateEntry(field, event) {
        const {id, update} = this.props;
        update(id, field, event.target.value)
    }

    render() {
        const {name, numBlocks, remove, id} = this.props;
        return (
            <div className="entry">
                <div className="inputs">
                    <input className="name" type="text" value={name} onChange={e => this.updateEntry("name", e)}></input>
                    <input className="numBlocks" type="number" value={numBlocks} onChange={e => this.updateEntry("numBlocks", e)}></input>
                </div>
                <button onClick={() => {remove(id)}}>Remove</button>
            </div>
        )
    }
}

export default Entry;