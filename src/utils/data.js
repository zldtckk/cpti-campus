/* ========================================
   CPTI 校园版 - 题目 & 25种关系类型数据
   ======================================== */

export const DIMENSIONS = {
  D: { name: '主导性', color: '#667eea', desc: '话语权和决策倾向' },
  W: { name: '温暖度', color: '#ff6b6b', desc: '表达情感和情绪价值' },
  R: { name: '理性度', color: '#00b894', desc: '处理矛盾的理性程度' },
  S: { name: '社交度', color: '#0984e3', desc: '社交意愿和边界感' },
  X: { name: '叛逆度', color: '#e17055', desc: '打破常规的倾向' }
}

export const QUESTIONS = [
  {
    id: 1, text: '小组作业分组时，你通常怎么做？', dim: 'D',
    options: [
      { text: '主动当组长，给大家分工安排', score: 100 },
      { text: '看谁主动就配合谁，都行', score: 50 },
      { text: '等别人来安排，做好自己的部分', score: 0 }
    ]
  },
  {
    id: 2, text: '朋友心情不好来找你倾诉，你一般会？', dim: 'W',
    options: [
      { text: '耐心听他讲完，温柔安慰', score: 100 },
      { text: '理性帮他分析问题出在哪', score: 50 },
      { text: '有点不知道咋回应，简单安慰几句', score: 0 }
    ]
  },
  {
    id: 3, text: '和同学因为小事吵架了，你通常？', dim: 'R',
    options: [
      { text: '先冷静下来，等双方都平静了再聊', score: 100 },
      { text: '当时忍不住，但事后会主动和好', score: 50 },
      { text: '一直心里不舒服，不知道咋开口', score: 0 }
    ]
  },
  {
    id: 4, text: '课间休息时你通常在哪？', dim: 'S',
    options: [
      { text: '和同学围在一起聊天玩闹', score: 100 },
      { text: '和关系好的两三个人待着', score: 50 },
      { text: '自己戴着耳机听听歌刷刷手机', score: 0 }
    ]
  },
  {
    id: 5, text: '学校规定穿校服，但你今天不想穿，你会？', dim: 'X',
    options: [
      { text: '不穿就不穿，被老师说了再说', score: 100 },
      { text: '穿是穿了但想办法露点自己的搭配', score: 50 },
      { text: '乖乖全套穿好，不想惹麻烦', score: 0 }
    ]
  },
  {
    id: 6, text: '和同学约饭，你通常扮演什么角色？', dim: 'D',
    options: [
      { text: '"我推荐一家店！"主动决定吃啥', score: 100 },
      { text: '"我都行"随大家意见', score: 50 },
      { text: '默默跟着走，你们定就好', score: 0 }
    ]
  },
  {
    id: 7, text: '好朋友生日，你会怎么准备？', dim: 'W',
    options: [
      { text: '偷偷准备惊喜礼物和手写信', score: 100 },
      { text: '发个红包或买个礼物送过去', score: 50 },
      { text: '在朋友圈评论一句生日快乐', score: 0 }
    ]
  },
  {
    id: 8, text: '考试没考好，你第一反应是？', dim: 'R',
    options: [
      { text: '分析试卷错在哪，制定提分计划', score: 100 },
      { text: '难过一会然后开始看书', score: 50 },
      { text: '心态崩了，好几天缓不过来', score: 0 }
    ]
  },
  {
    id: 9, text: '班级组织秋游，你更希望？', dim: 'S',
    options: [
      { text: '和大部队一起嗨全程', score: 100 },
      { text: '和三五好友组队玩', score: 50 },
      { text: '不太想去，被迫参加也自己待着', score: 0 }
    ]
  },
  {
    id: 10, text: '老师上课讲错了一个知识点，你会？', dim: 'X',
    options: [
      { text: '当场举手指出来', score: 100 },
      { text: '课后私下和老师说', score: 50 },
      { text: '算了，当没听见', score: 0 }
    ]
  },
  {
    id: 11, text: '社团竞选部长，你想上但对手也很强，你？', dim: 'D',
    options: [
      { text: '直接报名竞选，全力争取', score: 100 },
      { text: '犹豫半天，最后看情况决定', score: 50 },
      { text: '算了不争了，支持别人吧', score: 0 }
    ]
  },
  {
    id: 12, text: '好友在课堂上被老师当众批评了，你？', dim: 'W',
    options: [
      { text: '课后第一时间去安慰他', score: 100 },
      { text: '发条微信关心一下', score: 50 },
      { text: '觉得他自己缓缓就好', score: 0 }
    ]
  },
  {
    id: 13, text: '同学找你借作业抄，你会？', dim: 'R',
    options: [
      { text: '不借，但说可以教他做', score: 100 },
      { text: '借了，但让他以后自己写', score: 50 },
      { text: '直接借了，都是同学', score: 0 }
    ]
  },
  {
    id: 14, text: '到新班级/新社团，你通常会？', dim: 'S',
    options: [
      { text: '主动和周围的人搭话认识', score: 100 },
      { text: '等别人来和我说话', score: 50 },
      { text: '尽量低调，不想被注意', score: 0 }
    ]
  },
  {
    id: 15, text: '周末你最有可能在做啥？', dim: 'X',
    options: [
      { text: '尝试一些没做过的新鲜事', score: 100 },
      { text: '和朋友出去玩但不会太出格', score: 50 },
      { text: '按部就班地写作业打游戏', score: 0 }
    ]
  }
]

export const RELATIONSHIP_TYPES = {
  CEO:        { id: 'CEO', name: 'CEO', emoji: '👑', tags: ['主导者','节奏控','安排明明白白'], description: '你们之间有一个明显的主心骨，习惯性地掌控节奏、安排事情。和TA在一起你不需要动脑子，因为一切都已经安排好了。', pairDesc: '一个习惯主导，一个愿意配合，形成了天然的leader-follower默契。关系中的决策效率极高，但也需要注意照顾对方的想法。', profile: { D:85, W:50, R:70, S:60, X:40 } },
  TYRANT:     { id: 'TYRANT', name: '甜蜜暴君', emoji: '👊', tags: ['又宠又管','霸道','专属偏爱'], description: 'TA对你的好带着点霸道——"你必须收下这个""不许熬夜听到没"。看起来凶巴巴的，其实是把最温柔的部分全都给了你。', pairDesc: '一个愿意管，一个愿意被管，形成了甜蜜的"管制与被管制"关系。控制中带着关心，任性中藏着体贴。', profile: { D:90, W:75, R:30, S:50, X:60 } },
  MAMA:       { id: 'MAMA', name: '人间妈妈', emoji: '🍼', tags: ['碎碎念','照顾狂魔','暖心'], description: '你是朋友圈里的"妈妈"，永远在关心别人吃了吗、穿暖了吗、怎么还不睡。', pairDesc: '一方无微不至地照顾，一方安心地接受关怀。这种关系充满生活气息，是最接地气的温暖组合。', profile: { D:40, W:95, R:55, S:60, X:20 } },
  COLDWAR:    { id: 'COLDWAR', name: '已读不回终结者', emoji: '🧊', tags: ['慢热','表面冷淡','心里在意'], description: '你在关系里属于慢热型，表面上看起来冷冷的，收到消息经常已读不回。', pairDesc: '外冷内热的组合。需要耐心和安全感来融化那层冰，一旦破冰就会非常深厚。', profile: { D:30, W:20, R:70, S:20, X:30 } },
  VIBES:      { id: 'VIBES', name: '氛围担当', emoji: '✨', tags: ['快乐源泉','气氛组','情绪价值'], description: '你就是朋友圈子里的"氛围组"，有你在的地方永远不会冷场。', pairDesc: '一个制造快乐，一个享受快乐。你们的相处充满欢笑声，是那种"和TA一起干啥都有意思"的关系。', profile: { D:40, W:85, R:30, S:85, X:60 } },
  MISSILE:    { id: 'MISSILE', name: '直球发射机', emoji: '🚀', tags: ['有话直说','不绕弯子','坦诚'], description: '你是那种有话直说的人，喜欢和讨厌都写在脸上。不搞暧昧不玩套路。', pairDesc: '直球对直球，沟通效率极高，几乎没有误会和猜忌。吵完就好的痛快关系。', profile: { D:70, W:60, R:50, S:65, X:70 } },
  SOUL:       { id: 'SOUL', name: '灵魂伴侣', emoji: '💫', tags: ['精神同频','心有灵犀','懂你'], description: '你们之间有一种奇妙的默契，常常同时说出同一句话。不需要太多语言就能理解对方的感受。', pairDesc: '精神高度契合的两个人，在一起时有说不完的话题，不说话时也不尴尬。是"一个眼神就懂你"的神仙关系。', profile: { D:40, W:80, R:60, S:50, X:40 } },
  SETTLED:    { id: 'SETTLED', name: '老夫老妻', emoji: '👴', tags: ['平淡是真','习惯彼此','长久陪伴'], description: '你们的相处模式像在一起很久的老夫老妻，没有轰轰烈烈，但有最踏实的陪伴。', pairDesc: '激情褪去后的安稳感，相处轻松不费力。已经度过了需要取悦对方的阶段，进入了最舒适的关系状态。', profile: { D:40, W:55, R:75, S:40, X:15 } },
  LOVERS:     { id: 'LOVERS', name: '欢喜冤家', emoji: '💢', tags: ['吵吵闹闹','越怼越爱','离不开'], description: '你们是别人眼中的"吵架专业户"，一天不互怼就浑身难受。但不管吵得多凶，最后总能和好。', pairDesc: '以互损为日常交流方式，但关键时刻永远站在对方这边。越吵感情越好，越怼关系越铁。', profile: { D:70, W:50, R:25, S:70, X:75 } },
  RIVALS:     { id: 'RIVALS', name: '相爱相杀', emoji: '⚔️', tags: ['亦敌亦友','互相较劲','互相成就'], description: '你们之间有一种微妙的竞争关系，既是对手也是知己。考试要比、打球要比、连吃饭速度都要比。', pairDesc: '彼此最强劲的对手，也是最懂对方的知己。竞争中带着欣赏，较劲中藏着关心。', profile: { D:75, W:30, R:80, S:50, X:65 } },
  SYNC:       { id: 'SYNC', name: '心灵同步', emoji: '🔗', tags: ['高度契合','同频共振','合拍'], description: '你们的想法、习惯、生活节奏都高度同步。连未来规划都能想到一起去。', pairDesc: '做什么都合拍，想什么都一致。你们的默契度简直像是一个人分成两半。', profile: { D:40, W:65, R:65, S:50, X:40 } },
  GLUED:      { id: 'GLUED', name: '连体婴儿', emoji: '🫂', tags: ['形影不离','黏人精','依赖感强'], description: '你们恨不得24小时黏在一起，分开五分钟都觉得不踏实。', pairDesc: '依赖感极强的组合，两个人的生活高度融合。虽然有时需要个人空间，但这种"分不开"的感觉也让很多人羡慕。', profile: { D:30, W:85, R:30, S:50, X:25 } },
  MIRROR:     { id: 'MIRROR', name: '镜像CP', emoji: '🪞', tags: ['互补','互相成就','你缺我补'], description: '你们就像是彼此的镜子，你有的短板刚好是TA的长处。在一起的时候刚好拼成一个完整的圆。', pairDesc: '完美的互补关系，两个人的优势刚好弥补对方的不足。组合起来战斗力翻倍。', profile: { D:50, W:50, R:70, S:50, X:40 } },
  VOLCANO:    { id: 'VOLCANO', name: '活火山', emoji: '🌋', tags: ['热烈','不稳定','充满激情'], description: '你们的情绪像活火山一样热烈又不可预测。好起来甜到齁，吵起来天翻地覆。', pairDesc: '情绪浓度极高的组合，好的时候特别好，吵的时候特别凶。这种关系从来不缺激情和新鲜感。', profile: { D:75, W:70, R:10, S:60, X:85 } },
  INMATE:     { id: 'INMATE', name: '狱友', emoji: '⛓️', tags: ['一起扛过','革命友谊','共患难'], description: '你们是一起"蹲过监狱"的交情——一起吐槽老师、一起赶作业、一起经历各种难熬的时刻。', pairDesc: '共同经历过高强度压力的战友情谊。你们的关系建立在无数次"共患难"的基础上。', profile: { D:40, W:60, R:50, S:60, X:55 } },
  BUDDY:      { id: 'BUDDY', name: '铁哥们', emoji: '🤝', tags: ['兄弟情','坦荡','讲义气'], description: '你们之间的关系坦荡荡，有事直接说，从不拐弯抹角。你永远可以相信TA会站在你这边。', pairDesc: '纯粹的兄弟/姐妹情谊，不搞暧昧，不玩心机。相互信任、相互支持的关系。', profile: { D:55, W:50, R:60, S:65, X:45 } },
  TEAM:       { id: 'TEAM', name: '最佳队友', emoji: '🎯', tags: ['合作满分','默契配合','一起上分'], description: '你们是最佳搭档，不管是做项目、打比赛还是打游戏，都能完美配合。', pairDesc: '高效协作型的伙伴关系，两个人一起能干翻一个团队。是"和TA一组就稳了"的可靠存在。', profile: { D:60, W:40, R:85, S:55, X:40 } },
  MENTOR:     { id: 'MENTOR', name: '人生导师', emoji: '🎓', tags: ['指路人','榜样','成长引路人'], description: 'TA是你校园里的"人生导师"，在你迷茫的时候给你方向和建议。', pairDesc: '带着"仰望感"的关系，一方是引路人，一方是追随者。这种关系让双方都在成长。', profile: { D:75, W:70, R:80, S:50, X:35 } },
  FOLLOWER:   { id: 'FOLLOWER', name: '乖乖跟班', emoji: '🐣', tags: ['依赖','温柔','顺从'], description: '你在关系中习惯跟着对方的节奏走，温柔又顺从。不喜欢做决定，更享受被带着走的感觉。', pairDesc: '一个带领一个跟随，关系中的权力分配很明确。这是一种双方都舒适的分工。', profile: { D:10, W:70, R:40, S:30, X:15 } },
  WANDERER:   { id: 'WANDERER', name: '自由搭子', emoji: '🦋', tags: ['独立自由','互不捆绑','半糖关系'], description: '你们是各自独立又互相陪伴的关系。平时各忙各的，但需要的时候一定在。', pairDesc: '给彼此足够空间的关系，在一起时开心享受，分开时各自精彩。是很多人理想的相处模式。', profile: { D:30, W:50, R:70, S:40, X:60 } },
  SPARKS:     { id: 'SPARKS', name: '火花搭子', emoji: '⚡', tags: ['新鲜感','来电','每次都有惊喜'], description: '你们之间有一种奇妙的化学反应，每次见面都充满新鲜感。', pairDesc: '充满活力的关系，每次互动都像第一次认识那样有趣。新鲜感是你们关系的燃料。', profile: { D:50, W:70, R:30, S:75, X:70 } },
  BREEZE:     { id: 'BREEZE', name: '清风搭子', emoji: '🍃', tags: ['轻松','自在','没压力'], description: '和TA相处就像一阵清风拂过，轻松又自在。不用刻意找话题，不用维护形象。', pairDesc: '最轻松不费力的关系模式，就像呼吸空气一样自然。没有压力、没有期待。', profile: { D:20, W:60, R:65, S:40, X:30 } },
  SANDGLASS:  { id: 'SANDGLASS', name: '沙漏CP', emoji: '⏳', tags: ['慢节奏','沉淀','越久越珍贵'], description: '你们的关系节奏不快，像沙漏里的沙子一样慢慢流淌。时间越久，你们的关系越珍贵。', pairDesc: '慢热但深厚的关系，像酿酒一样越久越香。你们的感情经得起时间的考验。', profile: { D:30, W:60, R:70, S:35, X:20 } },
  MIRAGE:     { id: 'MIRAGE', name: '海市蜃楼', emoji: '🏜️', tags: ['表面合拍','容易误会','需要沟通'], description: '你们看起来玩得很好，但其实内核中有些地方不太合拍。表面和谐但容易产生误会。', pairDesc: '看似合拍但需要更多沟通的关系。需要双方都努力去理解和靠近对方才行。', profile: { D:50, W:40, R:50, S:50, X:50 } },
  UNKNOWN:    { id: 'UNKNOWN', name: '未知关系', emoji: '👻', tags: ['飘忽不定','难以定义','神秘感'], description: '你们的关系节奏飘忽不定，忽冷忽热的，像猜谜一样让人摸不透。', pairDesc: '难以定义的关系，充满了不确定性和神秘感，需要更多时间才能看清这段关系的本质。', profile: { D:40, W:35, R:40, S:45, X:60 } }
}

export const TYPE_ORDER = [
  'CEO','TYRANT','MAMA','COLDWAR','VIBES',
  'MISSILE','SOUL','SETTLED','LOVERS','RIVALS',
  'SYNC','GLUED','MIRROR','VOLCANO','INMATE',
  'BUDDY','TEAM','MENTOR','FOLLOWER','WANDERER',
  'SPARKS','BREEZE','SANDGLASS','MIRAGE','UNKNOWN'
]
