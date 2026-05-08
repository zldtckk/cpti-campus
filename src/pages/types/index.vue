<template>
  <view class="page">
    <view class="page-header">
      <text class="h1">📖 25种关系类型</text>
      <text class="p">你和TA会是哪一种？</text>
    </view>
    <view class="grid">
      <view class="type-card" v-for="id in TYPE_ORDER" :key="id" @click="showDetail(id)">
        <text class="emoji">{{ RELATIONSHIP_TYPES[id].emoji }}</text>
        <text class="name">{{ RELATIONSHIP_TYPES[id].name }}</text>
        <text class="en">{{ id }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { RELATIONSHIP_TYPES, TYPE_ORDER } from '@/utils/data.js'

function showDetail(id) {
  const t = RELATIONSHIP_TYPES[id]
  uni.showModal({
    title: t.emoji + ' ' + t.name,
    content: t.description + '\n\n标签：' + t.tags.join(' · '),
    showCancel: false,
    confirmText: '知道了'
  })
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f0f2f5; }
.page-header { text-align: center; padding: 40px 20px 30px; background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.page-header .h1 { font-size: 28px; font-weight: 800; display: block; }
.page-header .p { font-size: 15px; opacity: 0.9; display: block; margin-top: 8px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 16px; }
.type-card { background: #fff; border-radius: 10px; padding: 16px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.type-card .emoji { font-size: 32px; display: block; margin-bottom: 6px; }
.type-card .name { font-size: 14px; font-weight: 600; display: block; }
.type-card .en { font-size: 11px; color: #b2bec3; display: block; margin-top: 2px; }
</style>
