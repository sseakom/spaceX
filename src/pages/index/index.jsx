import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtLoadMore } from "taro-ui"
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'spaceX',
    enablePullDownRefresh: true
  }
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      status: 'more'
    };
  }
  componentWillMount () {
    this.getList()
  }

  async getList () {
    this.setState({
      status: 'loading'
    })
    const res = await Taro.request({
      url: 'https://api.spacexdata.com/v3/launches',
      data: {
        limit: 10,
        offset:  this.state.list.length,
        order: 'desc'
      }
    })
    console.log('res: ', res);
    this.setState({
      list: this.state.list.concat(res.data) || []
    })
    
    if (res.data.length === 10) {
      this.setState({
        status: 'more'
      })
      return
    } 
    // 没有更多了
    this.setState({
      status: 'noMore'
    })
  }
  async onPullDownRefresh () {
    this.state = {
      list: []
    };
    await this.getList()
    Taro.stopPullDownRefresh()
  }
  onReachBottom() {
    this.getList()
  }

  enter (item) {
    Taro.navigateTo({
      url: `/pages/index/detail?id=${item.flight_number}`
    })
  }

  render () {
    return (
      <View className='index'>
        <AtList>
          {
            this.state.list.map(item => {
              return <AtListItem
                title={item.mission_name}
                note={item.details || ''}
                thumb={item.links.mission_patch_small || ''}
                onClick={()=> this.enter(item)}
              />
            })
          }
        </AtList>
        <AtLoadMore
          status={this.state.status}
        />
      </View>
    )
  }
}
