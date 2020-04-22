import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { TabBar } from 'antd-mobile'

// tabBar列表数据
const tabItems = [
  {
    title: '首页',
    path: '/home',
    icon: 'icon-ind'
  },
  {
    title: '找房',
    path: '/home/house',
    icon: 'icon-findHouse'
  },
  {
    title: '我的',
    path: '/home/user',
    icon: 'icon-my'
  },
]

class TabBarList extends Component {
  state = {
    selectedTab: this.props.location.pathname
  }
  unlisten

  listenRouter = () => {
    this.unlisten = this.props.history.listen(location => {
      location.pathname !== this.state.selectedTab && this.setState({
        selectedTab: location.pathname
      })
    })
  }

  async componentDidMount() {
    this.listenRouter()
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        noRenderContent={true}
      >
        {tabItems.map((item, i) =>
          <TabBar.Item
            title={item.title}
            key={i}
            icon={
              <i className={`iconfont ${item.icon}`} />
            }
            selectedIcon={<i className="iconfont icon-ind" />
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
              this.props.history.push(item.path)
            }}
          />
        )}
      </TabBar>
    );
  }
}

export default withRouter(TabBarList);