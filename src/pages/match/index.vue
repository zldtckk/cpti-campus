<template>
  <view class="page">
    <!-- 已有匹配结果 -->
    <template v-if="matchData">
      <view class="result-header">
        <text class="h1">💞 配对结果</text>
        <text class="p">你{{ '和' + matchData.friendName + '的关系是——' }}</text>
      </view>
      <view class="content">
        <view class="card match-card">
          <text class="icon">{{ matchData.type.emoji }}</text>
          <text class="type">{{ matchData.type.name }}</text>
          <text class="sub">匹配度 {{ matchData.similarity }}%</text>
        </view>
        <view class="pair-row">
          <view class="person"><view class="avatar">{{ myName[0] }}</view><text class="label">{{ myName }}</text></view>
          <text class="heart">❤️</text>
          <view class="person"><view class="avatar b">{{ friendName[0] }}</view><text class="label">{{ friendName }}</text></view>
        </view>
        <view class="card desc">
          <text class="title">📖 关系解读</text>
          <text class="text">{{ matchData.type.pairDesc || matchData.type.description }}</text>
        </view>
        <view class="actions">
          <button class="btn btn-primary" @click="shareResult">🖼️ 分享卡片</button>
          <button class="btn btn-outline" @click="resetMatch">🔄 重新配对</button>
          <button class="btn btn-outline" @click="goHome">🏠 返回首页</button>
        </view>
      </view>
    </template>

    <!-- 配对设置 -->
    <template v-else>
      <view class="page-header">
        <text class="h1">💞 好友配对</text>
        <text class="p">邀请好友来匹配你们的关系类型</text>
      </view>
      <view class="content">
        <view class="card">
          <text class="card-title">🆕 邀请好友配对</text>
          <text class="card-desc">生成你的专属配对码，分享给好友让TA答题后自动匹配</text>
          <button class="btn btn-primary btn-block" @click="createInvite">🔗 生成邀请链接</button>
        </view>
        <view class="card">
          <text class="card-title">🔑 输入好友配对码</text>
          <text class="card-desc">如果好友已经测完，输入TA的6位配对码来匹配</text>
          <view class="input-row">
            <input class="cpid-input" maxlength="6" placeholder="输入CPID" v-model="cpidInput" />
            <button class="btn btn-sm" @click="enterCPID">匹配</button>
          </view>
        </view>
        <view class="card" style="text-align:center;">
          <text class="card-desc">还没有测试？先去完成测评</text>
          <button class="btn btn-primary btn-block mt-8" @click="goTest">开始测试 →</button>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { store } from '@/utils/store.js'
import { matchPair, generateCPID } from '@/utils/algorithm.js'

const matchData = ref(null)
const myName = ref('我')
const friendName = ref('好友')
const cpidInput = ref('')
const myScores = ref(null)

onMounted(() => {
  myScores.value = store.getScores()
  const md = store.getMatchData()
  if (md) {
    matchData.value = md
    friendName.value = md.friendName || '好友'
  }
})

const goHome = () => uni.navigateBack()
const goTest = () => uni.navigateTo({ url: '/pages/test/index?mode=match' })

function createInvite() {
  if (!myScores.value) { goTest(); return }
  const cpid = generateCPID()
  store.saveCPID(cpid)
  uni.navigateTo({ url: '/pages/invite/index' })
}

function enterCPID() {
  const cpid = cpidInput.value.trim().toUpperCase()
  if (cpid.length < 4) {
    uni.showToast({ title: '请输入有效配对码', icon: 'none' })
    return
  }
  // 演示模式：随机匹配
  const demoFriend = {
    name: '演示好友',
    scores: genRandomScores()
  }
  const result = matchPair(myScores.value, demoFriend.scores)
  store.saveMatchData({
    type: result.type, similarity: result.similarity,
    friendName: demoFriend.name, friendScores: demoFriend.scores, myScores: myScores.value
  })
  matchData.value = result
  friendName.value = demoFriend.name
}

function resetMatch() {
  store.saveMatchData(null)
  matchData.value = null
}

function shareResult() {
  const text = `💞 我和${friendName.value}是「${matchData.value.type.name}」！快来测测你和TA是什么关系！CPTI 校园版`
  uni.setClipboardData({
    data: text,
    success: () => uni.showToast({ title: '已复制分享文案', icon: 'success' })
  })
}

function genRandomScores() {
  const s = {}
  for (const d of ['D','W','R','S','X']) s[d] = 30 + Math.floor(Math.random() * 60)
  return s
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f0f2f5; }
.page-header, .result-header { text-align: center; padding: 40px 20px 30px; background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.result-header { background: linear-gradient(135deg, #ff6b6b, #667eea); }
.page-header .h1, .result-header .h1 { font-size: 28px; font-weight: 800; display: block; }
.page-header .p, .result-header .p { font-size: 15px; opacity: 0.9; display: block; margin-top: 8px; }
.content { padding: 16px; max-width: 480px; margin: 0 auto; }
.card { background: #fff; border-radius: 16px; padding: 24px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.card-title { font-size: 18px; font-weight: 700; display: block; margin-bottom: 8px; }
.card-desc { font-size: 14px; color: #636e72; display: block; margin-bottom: 16px; line-height: 1.7; }

.match-card { text-align: center; padding: 30px 20px; }
.match-card .icon { font-size: 64px; display: block; margin-bottom: 12px; }
.match-card .type { font-size: 26px; font-weight: 800; background: linear-gradient(135deg, #ff6b6b, #feca57); -webkit-background-clip: text; color: transparent; display: block; }
.match-card .sub { font-size: 15px; color: #636e72; margin-top: 8px; display: block; }

.pair-row { display: flex; align-items: center; justify-content: center; gap: 16px; padding: 16px 0; margin-bottom: 16px; background: #fff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.person { text-align: center; }
.person .avatar { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px; font-weight: 700; margin: 0 auto 8px; }
.person .avatar.b { background: linear-gradient(135deg, #ff6b6b, #feca57); }
.person .label { font-size: 14px; color: #636e72; }
.heart { font-size: 28px; }

.desc .title { font-size: 18px; font-weight: 700; display: block; margin-bottom: 12px; }
.desc .text { font-size: 15px; color: #636e72; line-height: 1.8; display: block; }

.actions { display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; }
.btn { display: flex; align-items: center; justify-content: center; padding: 14px; border-radius: 30px; font-size: 16px; font-weight: 600; width: 100%; }
.btn-primary { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.btn-outline { background: transparent; color: #667eea; border: 2px solid #667eea; }
.btn-block { margin-top: 8px; }
.btn-sm { display: inline-flex; width: auto; padding: 12px 24px; background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }

.input-row { display: flex; gap: 10px; align-items: center; }
.cpid-input { flex: 1; padding: 14px; border: 2px solid #e8ecf1; border-radius: 10px; font-size: 20px; font-weight: 700; text-align: center; letter-spacing: 4px; }
.mt-8 { margin-top: 8px; }
</style>
