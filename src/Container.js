import React, {Component} from 'react';
import Entry from './Entry';
import Output from './Output';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: [],
            entries: [{id: 1, name: '', numBlocks: ''}]
        }

        this.addEntry = this.addEntry.bind(this);
        this.updateEntry = this.updateEntry.bind(this);
        this.removeEntry = this.removeEntry.bind(this);
        this.genOrder = this.genOrder.bind(this);
    }

    addEntry() {
        const {entries} = this.state;
        const oldEntries = [...entries];
        oldEntries.push({id: oldEntries.length + 1, name: '', numBlocks: ''})
        this.setState({entries: oldEntries});
    }

    updateEntry(id, field, value) {
        const {entries} = this.state;
        const oldEntries = [...entries];
        const entry = oldEntries.find(el => el.id === id);
        entry[field] = value;
        this.setState({entries: oldEntries});
    }

    removeEntry(id) {
        const {entries} = this.state;
        const oldEntries = [...entries];
        const el = oldEntries.find(el => el.id === id);
        const idx = oldEntries.indexOf(el);

        oldEntries.splice(idx, 1);
        this.setState({entries: oldEntries});
    }

    genOrder() {
        const {entries} = this.state;
        const oldEntries = [...entries];

        let newOutput = [];
        oldEntries.forEach(entry => {
            if(entry.name !== '' && entry.numBlocks > 0){
                for(let i = 0; i < entry.numBlocks; i++){
                    newOutput.push(entry.name);
                }
            }
        })

        newOutput = this.shuffleArray(newOutput);
        this.setState({output: newOutput});
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    render() {
        const {output, entries} = this.state;
        
        return (
            <div id="container">
                <div className="heading">
                    <h3 className="header">Name</h3>
                    <h3 className="header">Number of blocks</h3>
                </div>
                <div className="entries">
                    {entries.map(entry => 
                        <Entry key={entry.id} id={entry.id} name={entry.name} numBlocks={entry.numBlocks} update={this.updateEntry} remove={this.removeEntry}></Entry>
                    )}
                </div>
                <button className="groupButton" onClick={this.addEntry}>Add A Person</button>
                <Output generateOrder={this.genOrder} output={output} />
            </div>
        )
    }
}

export default Container;