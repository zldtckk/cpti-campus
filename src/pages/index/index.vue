<template>
  <view class="home-page">
    <view class="home-logo">💞</view>
    <view class="home-title">
      <text class="h1">CPTI 校园版</text>
      <text class="sub">测一测你和TA是什么关系类型</text>
      <view class="badge">🏫 大学生 / 高中生专属</view>
    </view>

    <view class="home-features">
      <view class="home-feature-item">
        <text class="icon">🧠</text>
        <view class="text"><strong>5维人格测评</strong>基于主导性·温暖度·理性度·社交度·叛逆度</view>
      </view>
      <view class="home-feature-item">
        <text class="icon">🎯</text>
        <view class="text"><strong>25种关系类型</strong>从灵魂伴侣到欢喜冤家，找到专属标签</view>
      </view>
      <view class="home-feature-item">
        <text class="icon">🤝</text>
        <view class="text"><strong>好友配对匹配</strong>邀请TA一起测，看看你们是什么关系CP</view>
      </view>
    </view>

    <view class="home-actions">
      <button class="btn btn-primary btn-block" @click="goTest">🚀 开始测试</button>
      <button class="btn btn-secondary btn-block" @click="goMatch">💞 和好友配对</button>
      <view class="flex-row">
        <button class="btn btn-outline btn-sm flex-1" @click="goResult">📊 我的结果</button>
        <view style="width:10px"></view>
        <button class="btn btn-outline btn-sm flex-1" @click="goTypes">📖 25种类型</button>
      </view>
    </view>

    <text class="home-footer">CPTI Campus Personality Type Indicator</text>
  </view>
</template>

<script setup>
import { store } from '@/utils/store.js'

const goTest = () => uni.navigateTo({ url: '/pages/test/index' })
const goMatch = () => {
  if (store.getScores()) {
    uni.navigateTo({ url: '/pages/match/index' })
  } else {
    uni.navigateTo({ url: '/pages/test/index?mode=match' })
  }
}
const goResult = () => {
  if (store.getScores()) {
    uni.navigateTo({ url: '/pages/result/index' })
  } else {
    uni.showToast({ title: '先做个测试吧！', icon: 'none' })
  }
}
const goTypes = () => uni.navigateTo({ url: '/pages/types/index' })
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex; flex-direction: column; align-items: center;
  padding: 0 30px; position: relative; overflow: hidden;
}
.home-logo {
  margin-top: 80px; width: 90px; height: 90px;
  background: rgba(255,255,255,0.15); border-radius: 24px;
  display: flex; align-items: center; justify-content: center;
  font-size: 44px; border: 1px solid rgba(255,255,255,0.2);
}
.home-title { margin-top: 20px; color: #fff; text-align: center; }
.home-title .h1 { font-size: 32px; font-weight: 800; letter-spacing: 2px; display: block; }
.home-title .sub { font-size: 15px; opacity: 0.8; margin-top: 8px; display: block; }
.home-title .badge {
  display: inline-block; margin-top: 12px; padding: 4px 16px; border-radius: 20px;
  background: rgba(255,255,255,0.15); font-size: 13px; color: #feca57;
}
.home-features { margin-top: 40px; width: 100%; }
.home-feature-item {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px; padding: 14px 18px; display: flex; align-items: center;
  gap: 12px; color: #fff; margin-bottom: 10px;
}
.home-feature-item .icon { font-size: 22px; }
.home-feature-item .text { font-size: 14px; }
.home-feature-item .text strong { display: block; font-size: 15px; margin-bottom: 2px; }

.home-actions { margin-top: auto; margin-bottom: 40px; width: 100%; }
.home-actions .btn { font-size: 17px; padding: 16px; border-radius: 30px; margin-bottom: 10px; }
.home-actions .btn-primary { background: #fff; color: #5a67d8; }
.flex-row { display: flex; }
.flex-1 { flex: 1; }
.btn-outline {
  background: transparent; color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.3); padding: 12px 16px;
  border-radius: 30px; font-size: 14px; text-align: center;
}
.home-footer { color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 8px; margin-bottom: 12px; }
</style>
