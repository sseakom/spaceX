import Taro, { Component } from '@tarojs/taro'
// 引入 WebView 组件
import { WebView } from '@tarojs/components'

class App extends Component {
  state = {
    src: ''
  }
  
  componentWillMount () {
    console.log('componentWillMount', this.$router.params)
    this.setState({
      src: this.$router.params.url
    })
  }

  handleMessage () {}
  
  render () {
    return (
      <WebView src={ src } onMessage={this.handleMessage} />
    )
  }
}
