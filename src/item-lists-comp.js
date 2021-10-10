import React from "react";

class ItemLists extends React.Component
{
    render() {
        return (
            <ul>
                {this.props.mciItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        )
    }
}

export default ItemLists;