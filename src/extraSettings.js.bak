/**
 * 声明，本项目仅帮助大家学习技术及娱乐，切勿将修改后的网站大规模传播及商用，以避免侵权！
 */

// 额外分数：修改数字
let extraScore = 1;

// 无敌模式：true 改为 false
let wuDi = true;

// 第一个水果：修改数字为 0-10, 0 为葡萄，9 为半个西瓜
let firstFruit = 2;

// 水果合成反转：false 改为 true
let reverseLevelUp = false;

// 指定生成的水果：默认值: 不开启反转 0-5 开启反转 6-11，修改对应数字即可控制随机生成的水果范围
const minRandomFruitNum = reverseLevelUp ? 6: 1; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  // 指定前几次生成的水果，可填入任意数量的数字，0 为葡萄，9 为半个西瓜
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [6, 6, 7, 8, 9, 2],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 让水果更 Q 弹：false 改为大于 0 小于 1 的任意小数（推荐 0.9）
let fruitQTan = false;

// 让水果下落缓慢：false 改为大于 0 的任意数，值越大阻力越大，下落越慢（推荐 5）
let fruitSlowDown = false;

// 点击右上方图标更换水果：false 改为 true 即可，暂未支持
let clickChangeFruit = false;

// 广告链接：false 或为空字符串表示不会跳转到广告
let adLink = 'https://mp.weixin.qq.com/s?__biz=MzI5MjMzNzYzOA==&mid=2247483683&idx=1&sn=f4e13200a61ad4ed419f488d9d1d5645&chksm=ec03a3aadb742abc93854f2ded08e84c8e0e6959baaf35eb324e06eafab2b0e0107241be0d86&xtrack=1&scene=90&subscene=93&sessionid=1612765378&clicktime=1612765379&enterid=1612765379&ascene=56&devicetype=android-29&version=28000151&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&exportkey=Ay%2Fm%2B%2F5mQb952t%2F8JzcPKO4%3D&pass_ticket=waKKeCjdR7MBAHyZeoAumU1UFmiiNSBFIkyzDG%2FSAgFQJ8W2X3m9piw%2BG%2FK3nfmq&wx_header=1';

// 修改网页标题：将 "合成大西瓜" 进行替换
document.getElementsByTagName("title")[0].innerText = '合成大茜茜';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;

