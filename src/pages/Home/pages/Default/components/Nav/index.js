import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { Flex } from 'antd-mobile'

import Nav1 from '../../../../../../assets/images/nav-1.png'
import Nav2 from '../../../../../../assets/images/nav-2.png'
import Nav3 from '../../../../../../assets/images/nav-3.png'
import Nav4 from '../../../../../../assets/images/nav-4.png'
import './index.css'

// 首页栏目导航的数据
const navs = [
  {
    id: 1,
    img: Nav1,
    title: '整租',
    path: '/home/house'
  },
  {
    id: 2,
    img: Nav2,
    title: '合租',
    path: '/home/house'
  },
  {
    id: 3,
    img: Nav3,
    title: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    img: Nav4,
    title: '去出租',
    path: '/rent/add'
  }
]

class Nav extends Component {
  render() {
    return (
      <Flex className="nav">
        {navs.map((item) => {
          return <Flex.Item onClick={() => {
            this.props.history.push(item.path)
          }} key={item.id}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </Flex.Item>
        })}

      </Flex>
    );
  }
}

export default withRouter(Nav);