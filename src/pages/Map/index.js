import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile'
import './index.css'
class Map extends Component {

  componentDidMount() {
    this.initMap()
  }

  initMap = () => {
    const { BMap } = window
    const map = new BMap.Map("container");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  }

  render() {
    return (
      <div className="map">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack()
          }}
        >
          地图找房
        </NavBar>
        <div id="container"></div>
      </div>
    );
  }
}

export default Map;