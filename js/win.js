window.onbeforeunload = function() {
  //刷新后页面自动回到顶部
  document.documentElement.scrollTop = 0; //ie下
  document.body.scrollTop = 0; //非ie
};
