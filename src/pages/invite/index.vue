<template>
  <view class="page">
    <view class="page-header">
      <text class="h1">🔗 邀请配对</text>
      <text class="p">把配对码发给TA</text>
    </view>

    <view class="content">
      <view class="card slide-up">
        <text class="title">你的专属配对码</text>
        <view class="code-box">
          <text class="code">{{ cpid }}</text>
        </view>
        <text class="hint">分享给好友，让TA在配对页输入这个码即可匹配</text>

        <view class="share-actions">
          <button class="btn btn-secondary" @click="copyCPID">📋 复制配对码</button>
          <button class="btn btn-primary" @click="shareLink">🔗 分享链接</button>
        </view>
      </view>

      <view class="card">
        <text class="card-title">💡 配对流程</text>
        <view class="steps">
          <text class="step">1. 把配对码发给好友</text>
          <text class="step">2. 好友在配对页输入你的配对码</text>
          <text class="step">3. 系统自动计算你们的关系类型！</text>
        </view>
      </view>

      <view class="card" style="text-align:center;">
        <text class="card-desc">还没看到结果？用演示数据先预览</text>
        <button class="btn btn-primary btn-block" @click="demoMatch">🎲 演示匹配</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { store } from '@/utils/store.js'
import { generateCPID, matchPair } from '@/utils/algorithm.js'

const cpid = ref('')

onMounted(() => {
  cpid.value = store.getCPID() || generateCPID()
  store.saveCPID(cpid.value)
})

function copyCPID() {
  uni.setClipboardData({
    data: `💞 来测测我们的关系类型！我的CPTI配对码是：${cpid.value}，输入这个码就能匹配啦！`,
    success: () => uni.showToast({ title: '配对码已复制！', icon: 'success' })
  })
}

function shareLink() {
  const link = `https://zldtckk.github.io/cpti-campus/#/match/join?cpid=${cpid.value}`
  uni.setClipboardData({
    data: `💞 来测测我们的CP关系！我的配对码：${cpid.value}，复制打开链接：${link}`,
    success: () => uni.showToast({ title: '链接已复制！', icon: 'success' })
  })
}

function demoMatch() {
  const myScores = store.getScores()
  if (!myScores) {
    uni.showToast({ title: '请先完成测试！', icon: 'none' })
    return
  }
  const demo = { name: '演示好友', scores: {} }
  for (const d of ['D','W','R','S','X']) demo.scores[d] = 30 + Math.floor(Math.random() * 60)

  const result = matchPair(myScores, demo.scores)
  store.saveMatchData({
    type: result.type, similarity: result.similarity,
    friendName: demo.name, friendScores: demo.scores, myScores
  })
  uni.redirectTo({ url: '/pages/match/index' })
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f0f2f5; }
.page-header { text-align: center; padding: 40px 20px 30px; background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.page-header .h1 { font-size: 28px; font-weight: 800; display: block; }
.page-header .p { font-size: 15px; opacity: 0.9; display: block; margin-top: 8px; }
.content { padding: 16px; max-width: 480px; margin: 0 auto; }
.card { background: #fff; border-radius: 16px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.card .title, .card-title { font-size: 16px; font-weight: 700; display: block; margin-bottom: 16px; text-align: center; }
.card-desc { font-size: 14px; color: #636e72; display: block; margin-bottom: 16px; line-height: 1.7; }

.code-box { background: rgba(102,126,234,0.06); border: 2px dashed #667eea; border-radius: 10px; padding: 20px; text-align: center; margin: 16px 0; }
.code-box .code { font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #667eea; font-family: 'Courier New', monospace; }
.hint { font-size: 13px; color: #636e72; display: block; text-align: center; margin-bottom: 16px; }

.share-actions { display: flex; gap: 10px; }
.share-actions .btn { flex: 1; padding: 14px; border-radius: 30px; font-size: 15px; font-weight: 600; text-align: center; }
.btn-primary { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.btn-secondary { background: linear-gradient(135deg, #ff6b6b, #feca57); color: #fff; }
.btn-block { width: 100%; margin-top: 8px; border-radius: 30px; padding: 14px; font-weight: 600; }

.steps { padding: 0; }
.step { display: block; font-size: 14px; color: #636e72; line-height: 2.2; padding-left: 16px; }
.step::before { content: '• '; color: #667eea; }
</style>
