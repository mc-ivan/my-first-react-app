import React from "react";

class MCI_COMP extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>MCI APPLICATION</h1>
                <form>
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