import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { datetime } from '@/utils/index.js'
import { AtList, AtListItem, AtLoadMore } from "taro-ui"

export default class Detail extends Component {
  config = {
    navigationBarTitleText: 'spaceX',
    enablePullDownRefresh: true
  }
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        rocket: {}
      },
    };
  }

  componentWillMount () {
    this.getDetail()
  }

  async getDetail () {
    const id = this.$router.params.id || 1
    const res = await Taro.request({
      url: 'https://api.spacexdata.com/v3/launches/' + id
    })
    console.log('res: ', res);
    this.setState({
      detail: res.data || {}
    })
    Taro.setNavigationBarTitle({
      title: this.state.detail.mission_name
    })
  }
  async onPullDownRefresh () {
    await this.getDetail()
    Taro.stopPullDownRefresh()
  }
  link (link) {
    if (link.article_link) {
      Taro.navigateTo({
        url: `/pages/webview?url=`+ link.article_link
      })
    }
  }
  render () {
    return (
      <View className='index'>
        <AtListItem title='任务名称' extraText={this.state.detail.mission_name} />
        <AtListItem title='详情' note={this.state.detail.details} />
        <AtListItem title='发射年份' extraText={this.state.detail.launch_year} />
        <AtListItem title='发射时间' extraText={datetime(this.state.detail.launch_date_unix)} />
        <AtListItem title='发射成功' extraText={this.state.detail.launch_success ? '是' : '否'} />
        <AtListItem title='火箭名称' extraText={this.state.detail.rocket && this.state.detail.rocket.rocket_name} />
        <AtListItem title='火箭类型' extraText={this.state.detail.rocket && this.state.detail.rocket.rocket_type} />
        <AtListItem title='链接'  arrow='right' onClick={() => this.link(this.state.detail.links)} />
      </View>
    )
  }
}
