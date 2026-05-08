/* ========================================
   CPTI 校园版 - 状态管理 (uni-app)
   ======================================== */

const KEYS = {
  USER: 'cpti_user',
  ANSWERS: 'cpti_answers',
  SCORES: 'cpti_scores',
  CPID: 'cpti_cpid',
  MATCH: 'cpti_match'
}

export const store = {
  saveUser(info) {
    try { uni.setStorageSync(KEYS.USER, JSON.stringify(info)) } catch (e) {}
  },
  getUser() {
    try { return JSON.parse(uni.getStorageSync(KEYS.USER)) } catch { return null }
  },

  saveAnswers(answers) {
    try { uni.setStorageSync(KEYS.ANSWERS, JSON.stringify(answers)) } catch (e) {}
  },
  getAnswers() {
    try { return JSON.parse(uni.getStorageSync(KEYS.ANSWERS)) } catch { return [] }
  },

  saveScores(scores) {
    try { uni.setStorageSync(KEYS.SCORES, JSON.stringify(scores)) } catch (e) {}
  },
  getScores() {
    try { return JSON.parse(uni.getStorageSync(KEYS.SCORES)) } catch { return null }
  },

  saveCPID(cpid) {
    try { uni.setStorageSync(KEYS.CPID, cpid) } catch (e) {}
  },
  getCPID() {
    try { return uni.getStorageSync(KEYS.CPID) } catch { return '' }
  },

  saveMatchData(data) {
    try { uni.setStorageSync(KEYS.MATCH, JSON.stringify(data)) } catch (e) {}
  },
  getMatchData() {
    try { return JSON.parse(uni.getStorageSync(KEYS.MATCH)) } catch { return null }
  },

  clearAll() {
    Object.values(KEYS).forEach(k => {
      try { uni.removeStorageSync(k) } catch (e) {}
    })
  }
}
