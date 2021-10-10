import React from "react";
import ItemLists from "./item-lists-comp";

class MCI_COMP extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({name: e.target.value})
    }

    handleSubmit (e) {
        e.preventDefault()
        if (this.state.name.length === 0) return

        const newItem = {
            name: this.state.name,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            name: ""
        }))


    }

    render() {
        return (
            <div>
                <h1>MCI APPLICATION</h1>
                <ItemLists mciItems={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label><br/>
                    <label>{this.state.name}</label><br/>
                    <input id="name" onChange={this.handleChange} value={this.state.name}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default MCI_COMP;