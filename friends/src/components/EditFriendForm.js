import React from "react";
import { Link } from "react-router-dom";

export class EditFriendForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log("CDM");
  }

  render() {
    return (
      <form onSubmit={this.props.submitFriendEdits}>
        <input
          required
          type="text"
          value={this.props.potentialFriendChanges.name}
          name="name"
          onChange={this.props.handleChanges}
          placeholder="name"
        />
        <input
          type="number"
          value={this.props.potentialFriendChanges.age}
          name="age"
          onChange={this.props.handleChanges}
          placeholder="age (shh...)"
        />
        <input
          type="text"
          value={this.props.potentialFriendChanges.email}
          name="email"
          onChange={this.props.handleChanges}
          placeholder="email address"
        />
        <input
          type="text"
          value={this.props.potentialFriendChanges.color}
          name="color"
          onChange={this.props.handleChanges}
          placeholder="color"
        />
        <input
          type="text"
          value={this.props.potentialFriendChanges.favefood}
          name="favefood"
          onChange={this.props.handleChanges}
          placeholder="favorite food"
        />
        <input
          type="text"
          value={this.props.potentialFriendChanges.quotation}
          name="quotation"
          onChange={this.props.handleChanges}
          placeholder="quotation"
        />
        <button className="edit-friend" type="submit">
          Submit Friend Edits
        </button>
        <Link to="/friendslist">Back to List of Friends</Link>
      </form>
    );
  }
}
