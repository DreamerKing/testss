import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userLoginAction } from '@/actions/user'
import './index.scss';
class Guide extends Component {

  render() {
    return (
      <div className="index" onClick={this.props.hanldleLogin}>点击</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hanldleLogin: () => {
      dispatch(userLoginAction);
    }
  }
}


export default connect(null, mapDispatchToProps)(Guide);
