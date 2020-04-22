import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { Flex, WingBlank } from 'antd-mobile'

import { getNewsList } from '../../../../../../utils/requset/home'
import { BASE_URL } from '../../../../../../utils/axios'

import './index.css'
class News extends Component {
  state = {
    news: []
  }
  async componentDidMount() {
    const res = await getNewsList()
    this.setState({
      news: res
    })
  }
  renderNews() {
    return this.state.news.map(item => (
      <div className="news-item" key={item.id}>
        <div className="imgwrap">
          <img
            className="img"
            src={`${BASE_URL}${item.imgSrc}`}
            alt=""
          />
        </div>
        <Flex className="content" direction="column" justify="between">
          <h3 className="title">{item.title}</h3>
          <Flex className="info" justify="between">
            <span>{item.from}</span>
            <span>{item.date}</span>
          </Flex>
        </Flex>
      </div>
    ))
  }
  render() {
    return (
      <div className="news">
        <h3 className="group-title">最新资讯</h3>
        <WingBlank size="md">{this.renderNews()}</WingBlank>
      </div>
    );
  }
}

export default withRouter(News);