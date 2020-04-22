import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { Flex, SearchBar } from 'antd-mobile'

import './index.css'

class Search extends Component {
  state = {
    keyword: ''
  }

  renderTopNav = () => {
    const { push } = this.props.history
    return (
      <Flex justify="around" className="topNav">
        <div className="searchBox">
          <div className="city" onClick={() => { push('/citylist') }} >
            北京<i className="iconfont icon-arrow" />
          </div>
          <SearchBar
            value={this.state.keyword}
            onChange={(v) => this.setState({ keyword: v })}
            placeholder="请输入小区或地址"
          />
        </div>
        <div className="map" onClick={() => { push('/map') }}>
          <i key="0" className="iconfont icon-map" />
        </div>
      </Flex>
    )
  }
  render() {
    return (
      <>
        {
          this.renderTopNav()
        }
      </>
    );
  }
}

export default withRouter(Search);