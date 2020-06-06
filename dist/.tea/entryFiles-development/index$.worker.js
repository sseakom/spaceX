if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/list/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/list/item/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/loading/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/activity-indicator/index?hash=042b43ca0e7da723eeb96be5c6adeb14ffbf1da0');
require('../../npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/button/index?hash=042b43ca0e7da723eeb96be5c6adeb14ffbf1da0');
require('../../npm/_taro-ui@2.3.4@taro-ui/dist/weapp/components/load-more/index?hash=f653f848e09607be9918e2fd3c9e8aaf1f9db176');
require('../../pages/index/index?hash=32d6e6c5392813e672efbe68845df76dbd2a0065');
require('../../pages/index/detail?hash=450adcf720fb494a436cfcf7d0526a2b85340271');
require('../../pages/webview?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}