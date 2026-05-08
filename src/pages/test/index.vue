<template>
  <view class="test-page">
    <view class="test-progress">
      <view class="bar"><view class="fill" :style="'width:'+progress+'%'"></view></view>
      <view class="text">
        <text>第{{ current+1 }}/{{ questions.length }}题</text>
        <text :style="'color:'+dimColor">· {{ dimName }}维度</text>
      </view>
    </view>

    <view class="test-body" v-if="q">
      <view class="label" :style="'background:'+dimBg+';color:'+dimColor">{{ dimName }} · {{ dimDesc }}</view>
      <view class="question">{{ q.text }}</view>
      <view class="options">
        <view class="option" v-for="(opt, i) in q.options" :key="i"
          :class="{ selected: selectedIndex === i }"
          @click="select(i, opt.score)">
          <text>{{ opt.text }}</text>
        </view>
      </view>
    </view>

    <view class="nav">
      <view class="nav-btn" :class="{ disabled: current === 0 }" @click="prev">
        ← 上一题
      </view>
      <view class="nav-btn primary" @click="next">
        {{ current === questions.length-1 ? '✅ 完成' : '下一题 →' }}
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { store } from '@/utils/store.js'
import { QUESTIONS, DIMENSIONS } from '@/utils/data.js'
import { calculateScores, generateCPID } from '@/utils/algorithm.js'

const questions = shuffle([...QUESTIONS])
const current = ref(0)
const answers = ref([])
const selectedIndex = ref(-1)

const q = computed(() => questions[current.value])
const dimName = computed(() => DIMENSIONS[q.value?.dim]?.name || '')
const dimDesc = computed(() => DIMENSIONS[q.value?.dim]?.desc || '')
const dimColor = computed(() => DIMENSIONS[q.value?.dim]?.color || '#667eea')
const dimBg = computed(() => DIMENSIONS[q.value?.dim]?.color + '22' || '#667eea22')
const progress = computed(() => (current.value / questions.length) * 100)

const mode = ref('self')

onLoad((options) => {
  if (options.mode) mode.value = options.mode
  restoreSelection()
})

function restoreSelection() {
  const a = answers.value[current.value]
  selectedIndex.value = a ? a.optionIndex : -1
}

function select(index, score) {
  answers.value[current.value] = {
    questionId: q.value.id,
    dim: q.value.dim,
    score,
    optionIndex: index
  }
  selectedIndex.value = index

  if (current.value < questions.length - 1) {
    setTimeout(() => {
      current.value++
      restoreSelection()
    }, 200)
  }
}

function prev() {
  if (current.value > 0) {
    current.value--
    restoreSelection()
  }
}

function next() {
  if (answers.value[current.value] === undefined) {
    uni.showToast({ title: '请选择一个选项', icon: 'none' })
    return
  }
  if (current.value < questions.length - 1) {
    current.value++
    restoreSelection()
  } else {
    finish()
  }
}

function finish() {
  const scores = calculateScores(answers.value)
  store.saveAnswers(answers.value)
  store.saveScores(scores)

  if (mode.value === 'match') {
    const cpid = generateCPID()
    store.saveCPID(cpid)
    uni.redirectTo({ url: '/pages/invite/index' })
  } else {
    uni.redirectTo({ url: '/pages/result/index' })
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// uni-app onLoad hook
function onLoad(fn) {
  const app = getApp()
  if (app) fn({})
}
</script>

<style scoped>
.test-page { min-height: 100vh; background: #f0f2f5; }
.test-progress {
  position: sticky; top: 0; z-index: 10; background: #fff;
  padding: 16px 20px 12px;
}
.test-progress .bar { height: 6px; background: #e8ecf1; border-radius: 3px; overflow: hidden; }
.test-progress .fill { height: 100%; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 3px; transition: width 0.3s; }
.test-progress .text { display: flex; justify-content: space-between; font-size: 13px; color: #636e72; margin-top: 6px; }
.test-body { padding: 24px 20px; }
.test-body .label { display: inline-block; padding: 3px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-bottom: 12px; }
.test-body .question { font-size: 20px; font-weight: 700; line-height: 1.5; margin-bottom: 24px; color: #2d3436; }
.options { display: flex; flex-direction: column; gap: 10px; }
.option {
  padding: 16px 20px; border-radius: 10px; border: 2px solid #e8ecf1;
  background: #fff; font-size: 15px; line-height: 1.5; cursor: pointer;
}
.option.selected { border-color: #667eea; background: rgba(102,126,234,0.06); }
.nav {
  position: sticky; bottom: 0; display: flex; gap: 12px;
  padding: 16px 20px; background: #fff;
}
.nav-btn {
  flex: 1; padding: 14px; border-radius: 30px; text-align: center;
  font-size: 15px; font-weight: 600; border: 2px solid #667eea; color: #667eea;
}
.nav-btn.primary { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; border: none; }
.nav-btn.disabled { opacity: 0.3; }
</style>
