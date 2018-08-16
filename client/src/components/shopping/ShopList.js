import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getShopList } from "../../actions/shopListActions";

import ListElement from "./ListElement";
import AddElement from "./AddElement";

class ShopList extends Component {
  componentDidMount() {
    this.props.getShopList();
  }

  render() {
    const { shopList } = this.props.shopList;

    return (
      <div>
        <div className="title">
        <div className="container">
          <h3 className="title-shopList">Zakupy</h3>
        </div>
        </div>
        <div className="container">
          {shopList.length === 0 ? (
            <div className="empty">Brak zakupów do zrobienia :)</div>
          ) : (
            <ul className="list">
              {shopList.map(ShopListItem => (
                <ListElement
                  key={ShopListItem._id}
                  ShopListItem={ShopListItem}
                />
              ))}
            </ul>
          )}

          <AddElement />
        </div>
      </div>
    );
  }
}

ShopList.propTypes = {
  getShopList: PropTypes.func.isRequired,
  shopList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shopList: state.shopList
});

export default connect(
  mapStateToProps,
  { getShopList }
)(ShopList);
