<template>
  <view class="result-wrap">
    <view class="page-header">
      <text class="h1">🎉 你的关系人格</text>
      <text class="p">基于5维度的个性化分析</text>
    </view>

    <view class="content" v-if="result">
      <view class="card cover">
        <view class="type-icon">{{ result.type.emoji }}</view>
        <text class="type-name">{{ result.type.name }}</text>
        <text class="type-en">{{ result.type.id }}</text>
        <view class="tag">匹配度 {{ result.similarity }}%</view>
      </view>

      <view class="card"><RadarChart :scores="scores" /></view>

      <view class="card">
        <view class="bar-item" v-for="d in dimList" :key="d.key">
          <view class="bar-label">
            <text class="name">{{ d.name }}</text>
            <text class="val">{{ scores[d.key] }}</text>
          </view>
          <view class="bar-track"><view class="bar-fill" :class="d.key.toLowerCase()" :style="'width:'+scores[d.key]+'%'"></view></view>
        </view>
      </view>

      <view class="card desc">
        <text class="title">📖 类型解读</text>
        <text class="text">{{ result.type.description }}</text>
      </view>

      <view class="card tags" v-if="result.tags.length">
        <text class="title">🏷️ 你的标签</text>
        <view class="tag-list">
          <text class="tag-item" v-for="t in result.tags" :key="t">{{ t }}</text>
        </view>
      </view>

      <view class="actions">
        <button class="btn btn-primary" @click="shareCard">🖼️ 分享卡片</button>
        <button class="btn btn-outline" @click="goMatch">💞 邀请好友配对</button>
        <button class="btn btn-outline" @click="goTypes">📖 查看全部25种类型</button>
        <button class="btn btn-outline" @click="goHome">🏠 返回首页</button>
      </view>
    </view>

    <view class="empty" v-else>
      <text>还没有测试数据</text>
      <button class="btn btn-primary" @click="goTest">去测试 →</button>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RadarChart from '@/components/RadarChart.vue'
import { store } from '@/utils/store.js'
import { findPersonalType } from '@/utils/algorithm.js'
import { DIMENSIONS } from '@/utils/data.js'

const scores = ref(null)
const result = ref(null)
const dimList = Object.entries(DIMENSIONS).map(([k, v]) => ({ key: k, ...v }))

onMounted(() => {
  scores.value = store.getScores()
  if (scores.value) {
    result.value = findPersonalType(scores.value)
  }
})

const goTest = () => uni.redirectTo({ url: '/pages/test/index' })
const goHome = () => uni.switchTab ? uni.navigateBack() : uni.redirectTo({ url: '/pages/index/index' })
const goMatch = () => uni.navigateTo({ url: '/pages/match/index' })
const goTypes = () => uni.navigateTo({ url: '/pages/types/index' })

function shareCard() {
  // 小程序分享通过 onShareAppMessage
  // H5 分享降级为复制文案
  const type = result.value.type
  const user = store.getUser() || { name: '我' }
  uni.setClipboardData({
    data: `🎉 我是「${type.name}」型人格！快来测测你是什么关系人格！CPTI 校园版`,
    success: () => uni.showToast({ title: '已复制分享文案', icon: 'success' })
  })
}
</script>

<style scoped>
.page-header { text-align: center; padding: 40px 20px 30px; background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.page-header .h1 { font-size: 28px; font-weight: 800; display: block; }
.page-header .p { font-size: 15px; opacity: 0.9; display: block; margin-top: 8px; }
.content { padding: 16px; max-width: 480px; margin: 0 auto; }
.card { background: #fff; border-radius: 16px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.cover { text-align: center; }
.type-icon { width: 100px; height: 100px; margin: 0 auto 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 44px; background: linear-gradient(135deg, #667eea, #764ba2); box-shadow: 0 8px 30px rgba(102,126,234,0.3); }
.type-name { font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; color: transparent; display: block; }
.type-en { font-size: 14px; color: #b2bec3; display: block; margin-top: 4px; }
.tag { display: inline-block; margin-top: 10px; padding: 4px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; background: rgba(102,126,234,0.1); color: #667eea; }

.bar-item { margin-bottom: 14px; }
.bar-label { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 6px; }
.bar-label .name { font-weight: 600; color: #2d3436; }
.bar-label .val { color: #636e72; }
.bar-track { height: 8px; border-radius: 4px; background: #e8ecf1; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 4px; transition: width 1s; }
.bar-fill.d { background: linear-gradient(90deg, #667eea, #764ba2); }
.bar-fill.w { background: linear-gradient(90deg, #ff6b6b, #feca57); }
.bar-fill.r { background: linear-gradient(90deg, #00b894, #00cec9); }
.bar-fill.s { background: linear-gradient(90deg, #0984e3, #74b9ff); }
.bar-fill.x { background: linear-gradient(90deg, #e17055, #fd79a8); }

.desc .title, .tags .title { font-size: 18px; font-weight: 700; display: block; margin-bottom: 12px; }
.desc .text { font-size: 15px; color: #636e72; line-height: 1.8; display: block; }
.tag-list { display: flex; flex-wrap: wrap; gap: 8px; }
.tag-item { padding: 4px 14px; border-radius: 16px; background: rgba(102,126,234,0.1); color: #667eea; font-size: 13px; }

.actions { display: flex; flex-direction: column; gap: 10px; margin: 8px 0 32px; }
.btn { display: flex; align-items: center; justify-content: center; padding: 14px 32px; border-radius: 30px; font-size: 16px; font-weight: 600; width: 100%; }
.btn-primary { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.btn-outline { background: transparent; color: #667eea; border: 2px solid #667eea; }

.empty { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 16px; color: #636e72; }
</style>
