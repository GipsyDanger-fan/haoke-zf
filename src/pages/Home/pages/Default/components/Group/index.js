import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { Flex, Grid } from 'antd-mobile'

import { getGroupsList } from '../../../../../../utils/requset/home'
import { BASE_URL } from '../../../../../../utils/axios'

import './index.css'

class Group extends Component {
  state = {
    groups: []
  }

  async componentDidMount() {
    const res = await getGroupsList()
    this.setState({
      groups: res
    })
  }

  renderGroups = () => {
    return (
      <>
        <Flex className="group-title" justify="between">
          <h3>租房小组</h3>
          <span>更多</span>
        </Flex>
        <Grid
          data={this.state.groups}
          columnNum={2}
          // 关闭默认正方形
          square={false}
          //关闭边框
          hasLine={false}
          renderItem={item => {
            return (
              // item结构
              <Flex key={item.id} className="grid-item" justify="between">
                <div className="desc">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <img src={`${BASE_URL}${item.imgSrc}`} alt="" />
              </Flex>
            )
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div className="group">
        {
          this.renderGroups()
        }
      </div>
    );
  }
}

export default withRouter(Group);