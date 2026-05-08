<template>
  <canvas canvas-id="radarCanvas" class="radar-canvas"></canvas>
</template>

<script setup>
import { onMounted, watch } from 'vue'

const props = defineProps({
  scores: { type: Object, required: true },
  size: { type: Number, default: 280 }
})

const dims = ['D','W','R','S','X']
const labels = { D:'主导性', W:'温暖度', R:'理性度', S:'社交度', X:'叛逆度' }
const colors = { D:'#667eea', W:'#ff6b6b', R:'#00b894', S:'#0984e3', X:'#e17055' }

function draw() {
  const dpr = uni.getSystemInfoSync().pixelRatio || 1
  const w = props.size * dpr, h = props.size * dpr
  const ctx = uni.createCanvasContext('radarCanvas', { $scope: null })
  const cx = props.size / 2, cy = props.size / 2, maxR = props.size * 0.38, levels = 5

  ctx.setLineWidth(1)

  // 网格
  for (let l = 1; l <= levels; l++) {
    const r = (maxR / levels) * l
    ctx.beginPath()
    for (let i = 0; i < 5; i++) {
      const angle = (Math.PI * 2 / 5) * i - Math.PI / 2
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.setStrokeStyle(l === levels ? '#c8d6e5' : '#e8ecf1')
    ctx.stroke()
  }

  // 轴线
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI * 2 / 5) * i - Math.PI / 2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle))
    ctx.setStrokeStyle('#e8ecf1')
    ctx.stroke()
  }

  // 数据
  const points = dims.map((d, i) => {
    const angle = (Math.PI * 2 / 5) * i - Math.PI / 2
    const r = (props.scores[d] / 100) * maxR
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  })

  ctx.beginPath()
  points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y))
  ctx.closePath()
  ctx.setFillStyle('rgba(102,126,234,0.15)')
  ctx.fill()
  ctx.setStrokeStyle('rgba(102,126,234,0.6)')
  ctx.setLineWidth(2)
  ctx.stroke()

  points.forEach(p => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2)
    ctx.setFillStyle('#667eea')
    ctx.fill()
  })

  // 标签
  dims.forEach((d, i) => {
    const angle = (Math.PI * 2 / 5) * i - Math.PI / 2
    const labelR = maxR + 22
    const x = cx + labelR * Math.cos(angle)
    const y = cy + labelR * Math.sin(angle)

    ctx.setTextAlign('center')
    ctx.setTextBaseline('middle')
    ctx.setFontSize(12)
    ctx.setFillStyle(colors[d])
    ctx.fillText(labels[d], x, y - 8)
    ctx.setFontSize(13)
    ctx.setFillStyle('#2d3436')
    ctx.fillText(String(props.scores[d]), x, y + 10)
  })

  ctx.draw()
}

onMounted(() => setTimeout(draw, 100))
watch(() => props.scores, draw, { deep: true })
</script>

<style scoped>
.radar-canvas {
  width: 280px;
  height: 280px;
  margin: 0 auto;
  display: block;
}
</style>
