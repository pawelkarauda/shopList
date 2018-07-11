import React, { Component } from "react";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addElement } from "../../actions/shopListActions";

class AddElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newElement = {
      name: this.state.name
    };

    this.props.addElement(newElement);
    this.setState({ name: "" });
  }

  render() {
    return (
      <div className="list-group add-element">
        <form onSubmit={this.onSubmit}>
          <div className="list-group-item">
            <TextAreaFieldGroup
              placeholder="Dodaj zakup :)"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-dark">
              Wyślij
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddElement.propTypes = {
  addElement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addElement }
)(AddElement);
