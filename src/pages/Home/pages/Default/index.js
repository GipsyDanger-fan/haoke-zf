import React, { Component } from 'react';
import { Carousel } from 'antd-mobile'
// import { getSwiperList } from '../../../../utils/requset/home'
import { getHomeDatasAll } from '../../../../utils/requset/home'
import Nav from './components/Nav/index'
import Group from './components/Group/index'
import News from './components/News/index'
import Search from './components/Search/index'
import './index.css'
class Default extends Component {
  state = {
    swiper: [],
    imgHeight: '170px',
    autoplay: false
  }
  renderCarousel = () => {
    return (
      <Carousel
        autoplay={this.state.autoplay}
        infinite
      >
        {
          this.state.swiper.map(val => (
            <a
              key={val.id}
              href="http://www.itheima.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, background: '#fff' }}
            >
              <img
                src={`http://api-haoke-dev.itheima.net${val.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))
        }
      </Carousel>
    )
  }

  async componentDidMount() {
    // const swiperList = await getSwiperList()
    const [swiperList] = await getHomeDatasAll()
    this.setState({
      swiper: swiperList
    }, () => {
      this.setState({
        autoplay: true
      })
    })
  }

  render() {
    return (
      <div className="default">
        <Search />
        {
          this.renderCarousel()
        }
        <Nav />
        <Group />
        <News />
      </div>
    );
  }

}

export default Default;