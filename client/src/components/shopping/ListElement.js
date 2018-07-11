import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteElement, getShopList } from "../../actions/shopListActions";

class ListElement extends Component {
  onDeleteClick(e) {
    this.props.deleteElement(e.ShopListItem._id);
    setTimeout(() => {
      this.props.getShopList();
    }, 400);
  }

  render() {
    const { ShopListItem } = this.props;

    return (
      <div>
        {ShopListItem.bought === false ? (
          <div className="to-buy list-group">
            <div className="list-group-item">
              {ShopListItem.name}
              <div className="buttons">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.onDeleteClick.bind(this, { ShopListItem })}
                  aria-label="Right Align"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bought">{ShopListItem.name}</div>
        )}
      </div>
    );
  }
}

ListElement.propTypes = {
  deleteElement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteElement, getShopList }
)(ListElement);
