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
let adLink = 'https://mp.weixin.qq.com/s?__biz=MzI5MjMzNzYzOA==&mid=2247483757&idx=1&sn=42de0d67c6d2357a0610b117f5c55481&chksm=ec03a3e4db742af22982e120e38965256c397b5de5ea0765d46aa77635f2efdb7d950fc0a767&xtrack=1&scene=90&subscene=93&sessionid=1612835535&clicktime=1612835536&enterid=1612835536&ascene=56&devicetype=android-29&version=28000151&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&exportkey=A6ppt%2Fzl73fgef1UdGG%2FK%2Bw%3D&pass_ticket=ATTG9DYIfY1CuBwG%2FmDD375%2ByVoOx3yXNFG%2BP3Filp3hIwRDYW%2Bm0tIiCH%2FKJBsv&wx_header=1';

// 修改网页标题：将 "合成大西瓜" 进行替换
document.getElementsByTagName("title")[0].innerText = '合成大茜茜';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;

