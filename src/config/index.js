import Taro from "@tarojs/taro";

// 跳转到tab页面，关闭其他非tab页面
export const SwitchTab = async (options) => {
  await Taro.switchTab(options);
};

// 关闭所有页面，打开到应用内的某个页面
export const ReLaunch = async (options) => {
  await Taro.reLaunch(options);
};

// 跳转到非Tab页面，关闭当前
export const RedirectTo = async (options) => {
  await Taro.redirectTo(options);
};

// 跳转到非Tab页面，保留当前页面
export const NavigateTo = async (options) => {
  await Taro.navigateTo(options);
};

export const Routes = [
  '/pages/home/home',
  '/pages/devices/home',
  '/pages/profit/home',
];
