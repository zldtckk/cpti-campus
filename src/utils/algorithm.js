/* ========================================
   CPTI 校园版 - 评分 & 匹配算法
   ======================================== */

import { RELATIONSHIP_TYPES } from './data.js'

export function calculateScores(answers) {
  const dims = { D: [], W: [], R: [], S: [], X: [] }
  answers.forEach(a => { if (dims[a.dim]) dims[a.dim].push(a.score) })
  const result = {}
  for (const [key, scores] of Object.entries(dims)) {
    result[key] = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 50
  }
  return result
}

export function findPersonalType(scores) {
  let bestType = null, bestScore = -Infinity
  for (const type of Object.values(RELATIONSHIP_TYPES)) {
    const sim = cosineSimilarity(scores, type.profile)
    if (sim > bestScore) { bestScore = sim; bestType = { ...type } }
  }
  const tags = getPersonalityTags(scores)
  return { type: bestType, similarity: Math.round(bestScore * 100), tags }
}

export function matchPair(scoresA, scoresB) {
  const pairProfile = {}, diffProfile = {}
  for (const dim of ['D','W','R','S','X']) {
    pairProfile[dim] = Math.round((scoresA[dim] + scoresB[dim]) / 2)
    diffProfile[dim] = Math.abs(scoresA[dim] - scoresB[dim])
  }
  let bestType = null, bestScore = -Infinity
  for (const type of Object.values(RELATIONSHIP_TYPES)) {
    const avgSim = cosineSimilarity(pairProfile, type.profile)
    const diffFactor = 1 - (Object.values(diffProfile).reduce((a, b) => a + b, 0) / 500)
    const combined = avgSim * 0.7 + diffFactor * 0.3
    if (combined > bestScore) { bestScore = combined; bestType = { ...type } }
  }
  return { type: bestType, similarity: Math.round(bestScore * 100), pairProfile, diffProfile }
}

function cosineSimilarity(a, b) {
  const dims = ['D','W','R','S','X']
  let dot = 0, normA = 0, normB = 0
  for (const d of dims) { dot += a[d] * b[d]; normA += a[d] * a[d]; normB += b[d] * b[d] }
  return (normA === 0 || normB === 0) ? 0 : dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

function getPersonalityTags(scores) {
  const tags = []
  if (scores.D >= 70) tags.push('天生的领导者'); else if (scores.D <= 30) tags.push('佛系随和派')
  if (scores.W >= 70) tags.push('温暖小太阳'); else if (scores.W <= 30) tags.push('高冷独立人')
  if (scores.R >= 70) tags.push('理性分析大师'); else if (scores.R <= 30) tags.push('感性冲动派')
  if (scores.S >= 70) tags.push('社交达人'); else if (scores.S <= 30) tags.push('独处爱好者')
  if (scores.X >= 70) tags.push('叛逆酷盖'); else if (scores.X <= 30) tags.push('乖乖好学生')
  return tags
}

export function generateCPID() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
}
