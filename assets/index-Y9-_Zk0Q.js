(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={USER:`cpti_user`,ANSWERS:`cpti_answers`,SCORES:`cpti_scores`,CPID:`cpti_cpid`,MATCH:`cpti_match`},t={saveUser(t){localStorage.setItem(e.USER,JSON.stringify(t))},getUser(){try{return JSON.parse(localStorage.getItem(e.USER))}catch{return null}},saveAnswers(t){localStorage.setItem(e.ANSWERS,JSON.stringify(t))},getAnswers(){try{return JSON.parse(localStorage.getItem(e.ANSWERS))}catch{return[]}},saveScores(t){localStorage.setItem(e.SCORES,JSON.stringify(t))},getScores(){try{return JSON.parse(localStorage.getItem(e.SCORES))}catch{return null}},saveCPID(t){localStorage.setItem(e.CPID,t)},getCPID(){return localStorage.getItem(e.CPID)||``},saveMatchData(t){localStorage.setItem(e.MATCH,JSON.stringify(t))},getMatchData(){try{return JSON.parse(localStorage.getItem(e.MATCH))}catch{return null}},clearAll(){Object.values(e).forEach(e=>localStorage.removeItem(e))}};function n(){let e=document.getElementById(`app`);e.innerHTML=`
    <div class="home-page">
      <div class="home-logo">💞</div>

      <div class="home-title">
        <h1>CPTI 校园版</h1>
        <p class="sub">测一测你和TA是什么关系类型</p>
        <span class="badge">🏫 大学生 / 高中生专属</span>
      </div>

      <div class="home-features">
        <div class="home-feature-item">
          <span class="icon">🧠</span>
          <div class="text">
            <strong>5维人格测评</strong>
            基于主导性·温暖度·理性度·社交度·叛逆度
          </div>
        </div>
        <div class="home-feature-item">
          <span class="icon">🎯</span>
          <div class="text">
            <strong>25种关系类型</strong>
            从灵魂伴侣到欢喜冤家，找到专属标签
          </div>
        </div>
        <div class="home-feature-item">
          <span class="icon">🤝</span>
          <div class="text">
            <strong>好友配对匹配</strong>
            邀请TA一起测，看看你们是什么关系CP
          </div>
        </div>
      </div>

      <div class="home-actions">
        <button class="btn btn-primary btn-block" id="btn-start-test">
          🚀 开始测试
        </button>
        <button class="btn btn-secondary btn-block" id="btn-match-friend">
          💞 和好友配对
        </button>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-outline btn-block btn-sm" id="btn-my-result" style="border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);">
            📊 我的结果
          </button>
          <button class="btn btn-outline btn-block btn-sm" id="btn-view-types" style="border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);">
            📖 25种类型
          </button>
        </div>
      </div>

      <div class="home-footer">
        CPTI Campus Personality Type Indicator
      </div>
    </div>
  `;let n=t.getScores();document.getElementById(`btn-start-test`).onclick=()=>{window.location.hash=`#/test`},document.getElementById(`btn-match-friend`).onclick=()=>{n?window.location.hash=`#/match`:window.location.hash=`#/test?mode=match`},document.getElementById(`btn-my-result`).onclick=()=>{n?window.location.hash=`#/result`:r(`你还没有测试过，先做个测试吧！`)},document.getElementById(`btn-view-types`).onclick=()=>{window.location.hash=`#/types`}}function r(e){let t=document.getElementById(`toast`);t&&(t.textContent=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),2500))}var i={D:{name:`主导性`,key:`D`,color:`#667eea`,desc:`你在关系中的话语权和决策倾向`},W:{name:`温暖度`,key:`W`,color:`#ff6b6b`,desc:`你表达情感和提供情绪价值的能力`},R:{name:`理性度`,key:`R`,color:`#00b894`,desc:`你处理矛盾和做决策时的理性程度`},S:{name:`社交度`,key:`S`,color:`#0984e3`,desc:`你的社交意愿和关系中的边界感`},X:{name:`叛逆度`,key:`X`,color:`#e17055`,desc:`你对规则的态度和打破常规的倾向`}},a=[{id:1,text:`小组作业分组时，你通常怎么做？`,dim:`D`,options:[{text:`主动当组长，给大家分工安排`,score:100},{text:`看谁主动就配合谁，都行`,score:50},{text:`等别人来安排，做好自己的部分`,score:0}]},{id:2,text:`朋友心情不好来找你倾诉，你一般会？`,dim:`W`,options:[{text:`耐心听他讲完，温柔安慰`,score:100},{text:`理性帮他分析问题出在哪`,score:50},{text:`有点不知道咋回应，简单安慰几句`,score:0}]},{id:3,text:`和同学因为小事吵架了，你通常？`,dim:`R`,options:[{text:`先冷静下来，等双方都平静了再聊`,score:100},{text:`当时忍不住，但事后会主动和好`,score:50},{text:`一直心里不舒服，不知道咋开口`,score:0}]},{id:4,text:`课间休息时你通常在哪？`,dim:`S`,options:[{text:`和同学围在一起聊天玩闹`,score:100},{text:`和关系好的两三个人待着`,score:50},{text:`自己戴着耳机听听歌刷刷手机`,score:0}]},{id:5,text:`学校规定穿校服，但你今天不想穿，你会？`,dim:`X`,options:[{text:`不穿就不穿，被老师说了再说`,score:100},{text:`穿是穿了但想办法露点自己的搭配`,score:50},{text:`乖乖全套穿好，不想惹麻烦`,score:0}]},{id:6,text:`和同学约饭，你通常扮演什么角色？`,dim:`D`,options:[{text:`"我推荐一家店！"主动决定吃啥`,score:100},{text:`"我都行"随大家意见`,score:50},{text:`默默跟着走，你们定就好`,score:0}]},{id:7,text:`好朋友生日，你会怎么准备？`,dim:`W`,options:[{text:`偷偷准备惊喜礼物和手写信`,score:100},{text:`发个红包或买个礼物送过去`,score:50},{text:`在朋友圈评论一句生日快乐`,score:0}]},{id:8,text:`考试没考好，你第一反应是？`,dim:`R`,options:[{text:`分析试卷错在哪，制定提分计划`,score:100},{text:`难过一会然后开始看书`,score:50},{text:`心态崩了，好几天缓不过来`,score:0}]},{id:9,text:`班级组织秋游，你更希望？`,dim:`S`,options:[{text:`和大部队一起嗨全程`,score:100},{text:`和三五好友组队玩`,score:50},{text:`不太想去，被迫参加也自己待着`,score:0}]},{id:10,text:`老师上课讲错了一个知识点，你会？`,dim:`X`,options:[{text:`当场举手指出来`,score:100},{text:`课后私下和老师说`,score:50},{text:`算了，当没听见`,score:0}]},{id:11,text:`社团竞选部长，你想上但对手也很强，你？`,dim:`D`,options:[{text:`直接报名竞选，全力争取`,score:100},{text:`犹豫半天，最后看情况决定`,score:50},{text:`算了不争了，支持别人吧`,score:0}]},{id:12,text:`好友在课堂上被老师当众批评了，你？`,dim:`W`,options:[{text:`课后第一时间去安慰他`,score:100},{text:`发条微信关心一下`,score:50},{text:`觉得他自己缓缓就好`,score:0}]},{id:13,text:`同学找你借作业抄，你会？`,dim:`R`,options:[{text:`不借，但说可以教他做`,score:100},{text:`借了，但让他以后自己写`,score:50},{text:`直接借了，都是同学`,score:0}]},{id:14,text:`到新班级/新社团，你通常会？`,dim:`S`,options:[{text:`主动和周围的人搭话认识`,score:100},{text:`等别人来和我说话`,score:50},{text:`尽量低调，不想被注意`,score:0}]},{id:15,text:`周末你最有可能在做啥？`,dim:`X`,options:[{text:`尝试一些没做过的新鲜事`,score:100},{text:`和朋友出去玩但不会太出格`,score:50},{text:`按部就班地写作业+打游戏`,score:0}]}],o={CEO:{id:`CEO`,name:`CEO`,emoji:`👑`,tags:[`主导者`,`节奏控`,`安排明明白白`],description:`你们之间有一个明显的主心骨，习惯性地掌控节奏、安排事情。和TA在一起你不需要动脑子，因为一切都已经安排好了。校园里就是那种"我跟TA走就行"的感觉。`,pairDesc:`一个习惯主导，一个愿意配合，形成了天然的leader-follower默契。关系中的决策效率极高，但也需要注意照顾对方的想法。`,profile:{D:85,W:50,R:70,S:60,X:40}},TYRANT:{id:`TYRANT`,name:`甜蜜暴君`,emoji:`👊`,tags:[`又宠又管`,`霸道`,`专属偏爱`],description:`TA对你的好带着点霸道——"你必须收下这个""不许熬夜听到没"。看起来凶巴巴的，其实是把最温柔的部分全都给了你，不接受反驳的那种偏爱。`,pairDesc:`一个愿意管，一个愿意被管，形成了甜蜜的"管制与被管制"关系。控制中带着关心，任性中藏着体贴，是很多人都羡慕的相处模式。`,profile:{D:90,W:75,R:30,S:50,X:60}},MAMA:{id:`MAMA`,name:`人间妈妈`,emoji:`🍼`,tags:[`碎碎念`,`照顾狂魔`,`暖心`],description:`你是朋友圈里的"妈妈"，永远在关心别人吃了吗、穿暖了吗、怎么还不睡。碎碎念是你的日常，虽然有时候被嫌啰嗦，但大家都离不开你的照顾。`,pairDesc:`一方无微不至地照顾，一方安心地接受关怀。这种关系充满生活气息，是最接地气的温暖组合。当然，"妈妈"也需要有人疼。`,profile:{D:40,W:95,R:55,S:60,X:20}},COLDWAR:{id:`COLDWAR`,name:`已读不回终结者`,emoji:`🧊`,tags:[`慢热`,`表面冷淡`,`心里在意`],description:`你在关系里属于慢热型，表面上看起来冷冷的，收到消息经常已读不回（其实是不知道回啥）。但熟了之后会发现你是真的很在乎对方，只是不善于表达而已。`,pairDesc:`一个热脸贴冷屁股的即视感，但其实是外冷内热的组合。需要耐心和安全感来融化那层冰，一旦破冰就会非常深厚。`,profile:{D:30,W:20,R:70,S:20,X:30}},VIBES:{id:`VIBES`,name:`氛围担当`,emoji:`✨`,tags:[`快乐源泉`,`气氛组`,`情绪价值`],description:`你就是朋友圈子里的"氛围组"，有你在的地方永远不会冷场。你擅长制造快乐、调动情绪，是大家的快乐源泉。和TA在一起总是很开心，因为你总能把普通的日子变得有趣。`,pairDesc:`一个制造快乐，一个享受快乐。你们的相处充满欢笑声，即使在沉闷的校园生活中也能找到乐子。是那种"和TA一起干啥都有意思"的关系。`,profile:{D:40,W:85,R:30,S:85,X:60}},MISSILE:{id:`MISSILE`,name:`直球发射机`,emoji:`🚀`,tags:[`有话直说`,`不绕弯子`,`坦诚`],description:`你是那种有话直说的人，喜欢和讨厌都写在脸上。不搞暧昧不玩套路，最烦那些弯弯绕绕。虽然有时候说话太直会伤人，但大家都知道你没有坏心眼。`,pairDesc:`直球对直球，或者直球接住了对方的套路。你们的沟通效率极高，几乎没有误会和猜忌。就是那种"有啥说啥，吵完就好"的痛快关系。`,profile:{D:70,W:60,R:50,S:65,X:70}},SOUL:{id:`SOUL`,name:`灵魂伴侣`,emoji:`💫`,tags:[`精神同频`,`心有灵犀`,`懂你`],description:`你们之间有一种奇妙的默契，常常同时说出同一句话，或者在想同一件事。不需要太多语言就能理解对方的感受，是彼此的"情绪避风港"。校园里能遇到这样的关系真的很难得。`,pairDesc:`精神高度契合的两个人，在一起时有说不完的话题，不说话时也不尴尬。是那种"一个眼神就懂你"的神仙关系，彼此是对方的soulmate。`,profile:{D:40,W:80,R:60,S:50,X:40}},SETTLED:{id:`SETTLED`,name:`老夫老妻`,emoji:`👴`,tags:[`平淡是真`,`习惯彼此`,`长久陪伴`],description:`你们的相处模式像在一起很久的老夫老妻，没有轰轰烈烈，但有最踏实的陪伴。熟悉到知道对方所有的习惯和小毛病，是那种"虽然无聊但离不开"的关系。`,pairDesc:`激情褪去后的那种安稳感，相处起来轻松不费力。你们已经度过了需要取悦对方的阶段，进入了最舒适的关系状态。`,profile:{D:40,W:55,R:75,S:40,X:15}},LOVERS:{id:`LOVERS`,name:`欢喜冤家`,emoji:`💢`,tags:[`吵吵闹闹`,`越怼越爱`,`离不开`],description:`你们是别人眼中的"吵架专业户"，一天不互怼就浑身难受。但神奇的是，不管吵得多凶，最后总能和好。嘴上嫌弃，心里在乎，是典型的"口嫌体正直"。`,pairDesc:`以互损为日常交流方式，但关键时刻永远站在对方这边。越吵感情越好，越怼关系越铁。是那种"全班都知道你俩关系好"的存在。`,profile:{D:70,W:50,R:25,S:70,X:75}},RIVALS:{id:`RIVALS`,name:`相爱相杀`,emoji:`⚔️`,tags:[`亦敌亦友`,`互相较劲`,`互相成就`],description:`你们之间有一种微妙的竞争关系，既是对手也是知己。考试要比、打球要比、连吃饭速度都要比。但正是这种互相较劲，让你们都在变得更好。`,pairDesc:`彼此最强劲的对手，也是最懂对方的知己。竞争中带着欣赏，较劲中藏着关心。是那种"有你在我就不敢松懈"的良性竞争关系。`,profile:{D:75,W:30,R:80,S:50,X:65}},SYNC:{id:`SYNC`,name:`心灵同步`,emoji:`🔗`,tags:[`高度契合`,`同频共振`,`合拍`],description:`你们的想法、习惯、生活节奏都高度同步。连未来规划都能想到一起去，在一起时有种"世界上另一个我"的感觉。是很多人羡慕的神仙同步率。`,pairDesc:`做什么都合拍，想什么都一致。你们的默契度简直像是一个人分成两半，在一起时1+1>2的效果非常明显。`,profile:{D:40,W:65,R:65,S:50,X:40}},GLUED:{id:`GLUED`,name:`连体婴儿`,emoji:`🫂`,tags:[`形影不离`,`黏人精`,`依赖感强`],description:`你们恨不得24小时黏在一起，分开五分钟都觉得不踏实。上学要一起、吃饭要一起、上厕所都要约。同学们已经习惯了把你们当一个人看。`,pairDesc:`依赖感极强的组合，两个人的生活高度融合。虽然有时候需要一点个人空间，但这种"分不开"的感觉也让很多人羡慕。`,profile:{D:30,W:85,R:30,S:50,X:25}},MIRROR:{id:`MIRROR`,name:`镜像CP`,emoji:`🪞`,tags:[`互补`,`互相成就`,`你缺我补`],description:`你们就像是彼此的镜子，你有的短板刚好是TA的长处。你冲动时TA冷静，你犹豫时TA果断。在一起的时候刚好拼成一个完整的圆。`,pairDesc:`完美的互补关系，两个人的优势刚好弥补对方的不足。一个擅长冲锋，一个擅长殿后，组合起来战斗力翻倍。`,profile:{D:50,W:50,R:70,S:50,X:40}},VOLCANO:{id:`VOLCANO`,name:`活火山`,emoji:`🌋`,tags:[`热烈`,`不稳定`,`充满激情`],description:`你们的情绪像活火山一样热烈又不可预测。好起来甜到齁，吵起来天翻地覆。相处模式像坐过山车，每一秒都充满戏剧性。`,pairDesc:`情绪浓度极高的组合，好的时候特别好，吵的时候特别凶。这种关系从来不缺激情和新鲜感，但也需要学会控制情绪起伏。`,profile:{D:75,W:70,R:10,S:60,X:85}},INMATE:{id:`INMATE`,name:`狱友`,emoji:`⛓️`,tags:[`一起扛过`,`革命友谊`,`共患难`],description:`你们是一起"蹲过监狱"的交情——一起吐槽老师、一起赶作业、一起经历各种难熬的时刻。共享所有秘密和压力，是彼此最坚实的"革命战友"。`,pairDesc:`共同经历过高强度压力的战友情谊。你们的关系建立在无数次"共患难"的基础上，是那种"一起扛过事"的铁关系。毕业后最怀念的就是你们一起吐槽的日子。`,profile:{D:40,W:60,R:50,S:60,X:55}},BUDDY:{id:`BUDDY`,name:`铁哥们`,emoji:`🤝`,tags:[`兄弟情`,`坦荡`,`讲义气`],description:`你们之间的关系坦荡荡，做什么都光明正大。有事直接说，从不拐弯抹角。你永远可以相信TA会站在你这边，是那种"一个电话就到"的交情。`,pairDesc:`纯粹的兄弟/姐妹情谊，不搞暧昧，不玩心机。相互信任、相互支持的关系，是校园里最让人安心的存在。`,profile:{D:55,W:50,R:60,S:65,X:45}},TEAM:{id:`TEAM`,name:`最佳队友`,emoji:`🎯`,tags:[`合作满分`,`默契配合`,`一起上分`],description:`你们是最佳搭档，不管是做项目、打比赛还是打游戏，都能完美配合。分工明确、互相信任，在一起做事效率翻倍。是老师和同学眼中的"黄金组合"。`,pairDesc:`高效协作型的伙伴关系，两个人一起能干翻一个团队。工作/学习上极度合拍，是那种"和TA一组就稳了"的可靠存在。`,profile:{D:60,W:40,R:85,S:55,X:40}},MENTOR:{id:`MENTOR`,name:`人生导师`,emoji:`🎓`,tags:[`指路人`,`榜样`,`成长引路人`],description:`TA是你校园里的"人生导师"，在你迷茫的时候给你方向和建议。可能是学长学姐、社团前辈，或者就是比你成熟的朋友。有TA在，你总觉得心里有底。`,pairDesc:`一种带着"仰望感"的关系，一方是引路人，一方是追随者。TA给你建议和鼓励，你从TA身上学到很多。这种关系让双方都在成长。`,profile:{D:75,W:70,R:80,S:50,X:35}},FOLLOWER:{id:`FOLLOWER`,name:`乖乖跟班`,emoji:`🐣`,tags:[`依赖`,`温柔`,`顺从`],description:`你在关系中习惯跟着对方的节奏走，温柔又顺从。不喜欢做决定，更享受被带着走的感觉。虽然看起来被动，但你的温柔和配合是这段关系最珍贵的部分。`,pairDesc:`一个带领一个跟随，关系中的权力分配很明确。但这种关系不是不平等，而是一种双方都舒适的分工。跟随者的温柔也是关系中不可或缺的力量。`,profile:{D:10,W:70,R:40,S:30,X:15}},WANDERER:{id:`WANDERER`,name:`自由搭子`,emoji:`🦋`,tags:[`独立自由`,`互不捆绑`,`半糖关系`],description:`你们是各自独立又互相陪伴的关系。平时各忙各的，但需要的时候一定在。不捆绑不束缚，保持着恰到好处的距离感，是那种"舒服的相处"。`,pairDesc:`给彼此足够空间的关系，在一起时开心享受，分开时各自精彩。这种"半糖关系"不会太腻也不会太淡，是很多人理想的相处模式。`,profile:{D:30,W:50,R:70,S:40,X:60}},SPARKS:{id:`SPARKS`,name:`火花搭子`,emoji:`⚡`,tags:[`新鲜感`,`来电`,`每次都有惊喜`],description:`你们之间有一种奇妙的化学反应，每次见面都充满新鲜感。可能是刚认识不久，也可能是认识很久但总能找到新的话题。和TA在一起永远不会无聊。`,pairDesc:`充满活力的关系，每次互动都像第一次认识那样有趣。新鲜感是你们关系的燃料，总是能给对方带来惊喜。`,profile:{D:50,W:70,R:30,S:75,X:70}},BREEZE:{id:`BREEZE`,name:`清风搭子`,emoji:`🍃`,tags:[`轻松`,`自在`,`没压力`],description:`和TA相处就像一阵清风拂过，轻松又自在。不用刻意找话题，不用维护形象，做自己就好。你们的关系不需要费力维护，却自然地在持续。`,pairDesc:`最轻松不费力的关系模式，就像呼吸空气一样自然。没有压力、没有期待，但你知道TA一直都在。是那种"想起来就暖暖的"存在。`,profile:{D:20,W:60,R:65,S:40,X:30}},SANDGLASS:{id:`SANDGLASS`,name:`沙漏CP`,emoji:`⏳`,tags:[`慢节奏`,`沉淀`,`越久越珍贵`],description:`你们的关系节奏不快，像沙漏里的沙子一样慢慢流淌。没有一见如故的炽热，但有日久生情的沉淀。时间越久，你们的关系越珍贵。`,pairDesc:`慢热但深厚的关系，像酿酒一样越久越香。你们的感情是在无数个平凡的日子里一点一滴积累起来的，经得起时间的考验。`,profile:{D:30,W:60,R:70,S:35,X:20}},MIRAGE:{id:`MIRAGE`,name:`海市蜃楼`,emoji:`🏜️`,tags:[`表面合拍`,`容易误会`,`需要沟通`],description:`你们看起来玩得很好，但其实内核中有些地方不太合拍。表面和谐但容易产生误会，像泡沫一样美丽又脆弱。你们需要更多的沟通和理解来加固这段关系。`,pairDesc:`看似合拍但需要更多沟通的关系。表面上的和谐掩盖了内在的差异，需要双方都努力去理解和靠近对方才行。`,profile:{D:50,W:40,R:50,S:50,X:50}},UNKNOWN:{id:`UNKNOWN`,name:`未知关系`,emoji:`👻`,tags:[`飘忽不定`,`难以定义`,`神秘感`],description:`你们的关系节奏飘忽不定，忽冷忽热的，像猜谜一样让人摸不透。可能连你们自己都说不清现在是什么状态。但正是这种不确定性，让关系充满了神秘感和探索欲。`,pairDesc:`难以定义的关系，可能还在探索阶段，也可能一直处于模糊状态。充满了不确定性和神秘感，需要更多时间才能看清这段关系的本质。`,profile:{D:40,W:35,R:40,S:45,X:60}}},s=[`CEO`,`TYRANT`,`MAMA`,`COLDWAR`,`VIBES`,`MISSILE`,`SOUL`,`SETTLED`,`LOVERS`,`RIVALS`,`SYNC`,`GLUED`,`MIRROR`,`VOLCANO`,`INMATE`,`BUDDY`,`TEAM`,`MENTOR`,`FOLLOWER`,`WANDERER`,`SPARKS`,`BREEZE`,`SANDGLASS`,`MIRAGE`,`UNKNOWN`];function c(e){let t={D:[],W:[],R:[],S:[],X:[]};e.forEach(e=>{t[e.dim]&&t[e.dim].push(e.score)});let n={};for(let[e,r]of Object.entries(t))r.length===0?n[e]=50:n[e]=Math.round(r.reduce((e,t)=>e+t,0)/r.length);return n}function l(e){let t=null,n=-1/0;for(let[r,i]of Object.entries(o)){let r=d(e,i.profile);r>n&&(n=r,t={...i})}let r=f(e);return{type:t,similarity:Math.round(n*100),tags:r}}function u(e,t){let n={},r={};for(let i of[`D`,`W`,`R`,`S`,`X`])n[i]=Math.round((e[i]+t[i])/2),r[i]=Math.abs(e[i]-t[i]);let i=null,a=-1/0;for(let[e,t]of Object.entries(o)){let e=d(n,t.profile),o=1-Object.values(r).reduce((e,t)=>e+t,0)/500,s=e*.7+o*.3;s>a&&(a=s,i={...t})}return{type:i,similarity:Math.round(a*100),pairProfile:n,diffProfile:r}}function d(e,t){let n=[`D`,`W`,`R`,`S`,`X`],r=0,i=0,a=0;for(let o of n)r+=e[o]*t[o],i+=e[o]*e[o],a+=t[o]*t[o];return i===0||a===0?0:r/(Math.sqrt(i)*Math.sqrt(a))}function f(e){let t=[];return e.D>=70?t.push(`天生的领导者`):e.D<=30&&t.push(`佛系随和派`),e.W>=70?t.push(`温暖小太阳`):e.W<=30&&t.push(`高冷独立人`),e.R>=70?t.push(`理性分析大师`):e.R<=30&&t.push(`感性冲动派`),e.S>=70?t.push(`社交达人`):e.S<=30&&t.push(`独处爱好者`),e.X>=70?t.push(`叛逆酷盖`):e.X<=30&&t.push(`乖乖好学生`),t}function p(){let e=``;for(let t=0;t<6;t++)e+=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`.charAt(Math.floor(Math.random()*32));return e}function m(e){let n=e.get(`mode`)||`self`,r=document.getElementById(`app`),o=0,s=[],l=h([...a]);function u(){let e=l[o];r.innerHTML=`
      <div class="test-page">
        <div class="test-progress">
          <div class="test-progress-bar">
            <div class="test-progress-fill" style="width:${o/l.length*100}%"></div>
          </div>
          <div class="test-progress-text">
            <span>第 ${o+1}/${l.length} 题</span>
            <span>${i[e.dim].name}维度</span>
          </div>
        </div>

        <div class="test-question slide-up">
          <div class="test-question-label" style="background:${i[e.dim].color}22;color:${i[e.dim].color}">
            ${i[e.dim].name} · ${i[e.dim].desc}
          </div>
          <div class="test-question-text">${e.text}</div>

          <div class="test-options">
            ${e.options.map((e,t)=>`
              <div class="test-option" data-index="${t}" data-score="${e.score}">
                ${e.text}
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="test-nav">
          <button class="btn btn-outline btn-sm" id="btn-prev" ${o===0?`disabled style="opacity:0.3"`:``}>
            ← 上一题
          </button>
          <button class="btn btn-primary btn-sm btn-block" id="btn-next" ${s[o]===void 0?`disabled style="opacity:0.5"`:``}>
            ${o===l.length-1?`✅ 完成测试`:`下一题 →`}
          </button>
        </div>
      </div>
    `,s[o]!==void 0&&r.querySelectorAll(`.test-option`).forEach(e=>{parseInt(e.dataset.index)===s[o].optionIndex&&e.classList.add(`selected`)}),r.querySelectorAll(`.test-option`).forEach(t=>{t.onclick=()=>{let n=parseInt(t.dataset.index),i=parseInt(t.dataset.score);s[o]={questionId:e.id,dim:e.dim,score:i,optionIndex:n},r.querySelectorAll(`.test-option`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`);let a=document.getElementById(`btn-next`);a.disabled=!1,a.style.opacity=`1`,o<l.length-1&&setTimeout(()=>{o++,u(),window.scrollTo(0,0)},300)}});let t=document.getElementById(`btn-prev`);t&&(t.onclick=()=>{o>0&&(o--,u())}),document.getElementById(`btn-next`).onclick=()=>{s[o]!==void 0&&(o<l.length-1?(o++,u(),window.scrollTo(0,0)):d())}}function d(){let e=c(s);if(t.saveAnswers(s),t.saveScores(e),n===`match`){let e=p();t.saveCPID(e),window.location.hash=`#/match/invite?cpid=${e}`}else window.location.hash=`#/result`}u()}function h(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var g={D:`#667eea`,W:`#ff6b6b`,R:`#00b894`,S:`#0984e3`,X:`#e17055`},_={D:`主导性`,W:`温暖度`,R:`理性度`,S:`社交度`,X:`叛逆度`};function v(e,t,n=280){let r=window.devicePixelRatio||1;e.width=n*r,e.height=n*r,e.style.width=n+`px`,e.style.height=n+`px`;let i=e.getContext(`2d`);i.scale(r,r);let a=n/2,o=n/2,s=n*.38;i.clearRect(0,0,n,n);for(let e=1;e<=5;e++){let t=s/5*e;i.beginPath();for(let e=0;e<5;e++){let n=Math.PI*2/5*e-Math.PI/2,r=a+t*Math.cos(n),s=o+t*Math.sin(n);e===0?i.moveTo(r,s):i.lineTo(r,s)}i.closePath(),i.strokeStyle=e===5?`#c8d6e5`:`#e8ecf1`,i.lineWidth=1,i.stroke()}for(let e=0;e<5;e++){let t=Math.PI*2/5*e-Math.PI/2;i.beginPath(),i.moveTo(a,o),i.lineTo(a+s*Math.cos(t),o+s*Math.sin(t)),i.strokeStyle=`#e8ecf1`,i.lineWidth=1,i.stroke()}let c=[`D`,`W`,`R`,`S`,`X`],l=c.map((e,n)=>{let r=Math.PI*2/5*n-Math.PI/2,i=t[e]/100*s;return{x:a+i*Math.cos(r),y:o+i*Math.sin(r)}});i.beginPath(),l.forEach((e,t)=>t===0?i.moveTo(e.x,e.y):i.lineTo(e.x,e.y)),i.closePath();let u=i.createRadialGradient(a,o,0,a,o,s);u.addColorStop(0,`rgba(102,126,234,0.25)`),u.addColorStop(1,`rgba(102,126,234,0.05)`),i.fillStyle=u,i.fill(),i.strokeStyle=`rgba(102,126,234,0.6)`,i.lineWidth=2,i.stroke(),l.forEach(e=>{i.beginPath(),i.arc(e.x,e.y,4,0,Math.PI*2),i.fillStyle=`#667eea`,i.fill()}),c.forEach((e,n)=>{let r=Math.PI*2/5*n-Math.PI/2,c=s+22,l=a+c*Math.cos(r),u=o+c*Math.sin(r);i.textAlign=r>Math.PI/2&&r<Math.PI*3/2?`right`:r<-Math.PI/2||r>Math.PI/2?`left`:`center`,i.textBaseline=`middle`,i.font=`12px -apple-system, sans-serif`,i.fillStyle=g[e];let d=`${_[e]}`;i.fillText(d,l,u-8),i.font=`bold 13px -apple-system, sans-serif`,i.fillStyle=`#2d3436`,i.fillText(String(t[e]),l,u+10)})}function y(e,t){let n=[`🎉 我和${t}竟然是「${e}」！快来测测你和TA是什么关系！`,`🔮 CPTI关系测试揭秘：我和${t}的关系是「${e}」！`,`💞 我和${t}是「${e}」，这也太准了吧！戳进来测你的！`,`🔥 测完了！我和${t} = 「${e}」，@你来看看咱俩是啥！`];return n[Math.floor(Math.random()*n.length)]}function b(e){let t=[`🎉 我是「${e}」型人格！快来测测你是什么关系人格！`,`🔮 CPTI测试结果：我的关系人格是「${e}」，好准！`,`💞 测了个超好玩的关系测试，我是「${e}」，快来看看你是什么型！`];return t[Math.floor(Math.random()*t.length)]}async function x(e,t){if(navigator.share)try{return await navigator.share({title:`CPTI 校园版`,text:e,url:t||window.location.href}),!0}catch(e){return e.name!==`AbortError`&&console.error(`分享失败:`,e),!1}return!1}async function S(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();try{return document.execCommand(`copy`),!0}catch{return!1}finally{document.body.removeChild(t)}}}function C(e,t,n,r=!1,i=``){let a=document.createElement(`div`);a.className=`overlay`,a.onclick=e=>{e.target===a&&a.remove()},a.innerHTML=`
    <div class="modal">
      <h3>🎉 分享结果</h3>
      <p>保存图片分享到朋友圈/微信群，邀请好友来配对测试！</p>
      <div id="share-card-preview" style="width:100%;border-radius:12px;overflow:hidden;margin-bottom:16px;"></div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-primary btn-block btn-sm" id="save-card-btn">💾 保存图片</button>
        <button class="btn btn-secondary btn-block btn-sm" id="share-card-btn">📤 分享</button>
      </div>
      <button class="btn btn-outline btn-block btn-sm mt-16" id="close-modal-btn">关闭</button>
    </div>
  `,document.body.appendChild(a);let o=a.querySelector(`#share-card-preview`),s=document.createElement(`canvas`);s.width=420*2,s.height=420*2,s.style.width=`100%`,s.style.height=`auto`,o.appendChild(s);let c=s.getContext(`2d`);c.scale(2,2);let l=c.createLinearGradient(0,0,420,420);l.addColorStop(0,`#667eea`),l.addColorStop(.5,`#764ba2`),l.addColorStop(1,`#ff6b6b`),c.fillStyle=l,c.beginPath(),c.roundRect(0,0,420,420,20),c.fill(),c.globalAlpha=.08,c.fillStyle=`#fff`,c.beginPath(),c.arc(350,80,120,0,Math.PI*2),c.fill(),c.beginPath(),c.arc(-30,400,100,0,Math.PI*2),c.fill(),c.globalAlpha=1,c.fillStyle=`rgba(255,255,255,0.5)`,c.font=`14px -apple-system, sans-serif`,c.textAlign=`center`,c.fillText(`CPTI 校园版`,420/2,36),c.font=`60px -apple-system, sans-serif`,c.fillStyle=`#fff`,c.fillText(e.emoji,420/2,120),c.font=`bold 28px -apple-system, sans-serif`,c.textAlign=`center`,c.fillStyle=`#fff`,c.fillText(e.name,420/2,170),c.font=`16px -apple-system, sans-serif`,c.fillStyle=`rgba(255,255,255,0.9)`,r&&i?c.fillText(`${t} ❤️ ${i}`,420/2,210):c.fillText(t,420/2,210),c.font=`15px -apple-system, sans-serif`,c.fillStyle=`rgba(255,255,255,0.7)`,c.fillText(`扫码或搜索 CPTI 校园版`,420/2,340),c.fillText(`测测你和TA的关系类型`,420/2,365),c.font=`12px -apple-system, sans-serif`,c.fillStyle=`rgba(255,255,255,0.4)`,c.fillText(`长按保存分享给好友`,420/2,398),a.querySelector(`#save-card-btn`).onclick=()=>{s.toBlob(t=>{let n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`CPTI-${e.name}.png`,r.click(),URL.revokeObjectURL(n)})},a.querySelector(`#share-card-btn`).onclick=async()=>{let n=r?y(e.name,t):b(e.name);await x(n)||(await S(n),w(`分享文案已复制到剪贴板！`))},a.querySelector(`#close-modal-btn`).onclick=()=>a.remove()}function w(e){let t=document.getElementById(`toast`);t&&(t.textContent=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),2500))}function T(){let e=document.getElementById(`app`),n=t.getScores();if(!n){e.innerHTML=`
      <div class="loading-screen">
        <p>还没有测试数据，先去做个测试吧！</p>
        <button class="btn btn-primary mt-16" id="go-test">去测试 →</button>
      </div>
    `,document.getElementById(`go-test`).onclick=()=>{window.location.hash=`#/test`};return}let{type:r,similarity:a,tags:o}=l(n),s=t.getUser()||{name:`我`};e.innerHTML=`
    <div class="page-header">
      <h1>🎉 你的关系人格</h1>
      <p>基于5维度的个性化分析</p>
    </div>

    <div class="result-page">
      <div class="card result-cover slide-up">
        <div class="type-icon">${r.emoji}</div>
        <div class="type-name">${r.name}</div>
        <div class="type-en">${r.id}</div>
        <div class="type-tag">匹配度 ${a}%</div>
      </div>

      <div class="card">
        <div class="radar-container">
          <canvas id="radar-chart"></canvas>
        </div>
      </div>

      <div class="card score-bars">
        ${[`D`,`W`,`R`,`S`,`X`].map(e=>`
          <div class="score-bar-item">
            <div class="score-bar-label">
              <span class="name">${i[e].name}</span>
              <span class="val">${n[e]}</span>
            </div>
            <div class="score-bar-track">
              <div class="score-bar-fill ${e.toLowerCase()}" style="width:${n[e]}%"></div>
            </div>
          </div>
        `).join(``)}
      </div>

      <div class="card type-description">
        <h3>📖 类型解读</h3>
        <p>${r.description}</p>
      </div>

      ${o.length?`
        <div class="card">
          <h3 style="font-size:16px;font-weight:700;margin-bottom:12px;">🏷️ 你的标签</h3>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${o.map(e=>`<span style="padding:4px 14px;border-radius:16px;background:rgba(102,126,234,0.1);color:var(--primary);font-size:13px;">${e}</span>`).join(``)}
          </div>
        </div>
      `:``}

      <div class="card share-section">
        <h3>📤 分享给好友</h3>
        <div class="share-btns">
          <button class="share-btn" id="share-image">
            <span class="icon">🖼️</span>
            分享卡片
          </button>
          <button class="share-btn" id="share-text">
            <span class="icon">💬</span>
            分享文案
          </button>
          <button class="share-btn" id="share-invite">
            <span class="icon">💞</span>
            邀请配对
          </button>
        </div>
      </div>

      <div class="card" style="text-align:center;">
        <button class="btn btn-primary btn-block" id="btn-retest">
          🔄 重新测试
        </button>
        <button class="btn btn-outline btn-block mt-8" id="btn-view-types">
          📖 查看全部25种类型
        </button>
      </div>
    </div>
  `,requestAnimationFrame(()=>{let e=document.getElementById(`radar-chart`);e&&v(e,n)}),document.getElementById(`share-image`).onclick=()=>{C(r,s.name||`我`,n,!1)},document.getElementById(`share-text`).onclick=async()=>{let e=await S(b(r.name)),t=document.getElementById(`toast`);t&&(t.textContent=e?`✅ 文案已复制，快去分享到朋友圈吧！`:`复制失败，请手动复制`,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),2500))},document.getElementById(`share-invite`).onclick=()=>{window.location.hash=`#/match`},document.getElementById(`btn-retest`).onclick=()=>{window.location.hash=`#/test`},document.getElementById(`btn-view-types`).onclick=()=>{window.location.hash=`#/types`}}function E(){let e=document.getElementById(`app`),n=t.getMatchData(),r=t.getScores();if(!r){e.innerHTML=`
      <div class="page-header">
        <h1>💞 好友配对</h1>
        <p>先完成测试才能配对哦</p>
      </div>
      <div class="loading-screen">
        <p style="font-size:16px;">你还没有完成测试</p>
        <button class="btn btn-primary mt-16" id="go-test">去测试 →</button>
      </div>
    `,document.getElementById(`go-test`).onclick=()=>{window.location.hash=`#/test?mode=match`};return}if(n){O(e,n,r);return}e.innerHTML=`
    <div class="page-header">
      <h1>💞 好友配对</h1>
      <p>邀请好友来匹配你们的关系类型</p>
    </div>

    <div class="match-setup">
      <div class="card">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;">🆕 邀请好友配对</h3>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;">
          生成你的专属配对码，分享给好友让TA答题后自动匹配
        </p>
        <button class="btn btn-primary btn-block" id="create-invite">
          🔗 生成邀请链接
        </button>
      </div>

      <div class="card">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:12px;">🔑 输入好友配对码</h3>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;">
          如果好友已经测完，输入TA的6位配对码来匹配
        </p>
        <div style="display:flex;gap:10px;">
          <input type="text" id="cpid-input" maxlength="6"
            style="flex:1;padding:14px;border:2px solid #e8ecf1;border-radius:10px;font-size:20px;font-weight:700;text-align:center;letter-spacing:4px;text-transform:uppercase;outline:none;font-family:'Courier New',monospace;"
            placeholder="输入CPID">
          <button class="btn btn-primary" id="btn-enter-cpid" style="padding:14px 20px;">匹配</button>
        </div>
      </div>
    </div>
  `,document.getElementById(`create-invite`).onclick=()=>{let e=p();t.saveCPID(e),window.location.hash=`#/match/invite`},document.getElementById(`btn-enter-cpid`).onclick=()=>{let e=document.getElementById(`cpid-input`).value.trim().toUpperCase();if(e.length<4){j(`请输入有效的配对码（6位）`);return}let n=A(e);if(n){let e=u(r,n.scores);t.saveMatchData({type:e.type,similarity:e.similarity,friendName:n.name||`好友`,friendScores:n.scores,myScores:r}),window.location.hash=`#/match`}else{j(`配对码未找到，使用演示数据匹配`);let e={name:`Demo好友`,scores:{D:30+Math.floor(Math.random()*60),W:30+Math.floor(Math.random()*60),R:30+Math.floor(Math.random()*60),S:30+Math.floor(Math.random()*60),X:30+Math.floor(Math.random()*60)}},n=u(r,e.scores);t.saveMatchData({type:n.type,similarity:n.similarity,friendName:e.name,friendScores:e.scores,myScores:r}),setTimeout(()=>{window.location.hash=`#/match`},500)}}}function D(){let e=document.getElementById(`app`),n=t.getCPID()||p();t.saveCPID(n);let r=`${window.location.origin}${window.location.pathname}#/match/join?cpid=${n}`;e.innerHTML=`
    <div class="page-header">
      <h1>🔗 邀请配对</h1>
      <p>把配对码发给TA</p>
    </div>

    <div class="match-setup">
      <div class="card text-center slide-up">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;">你的专属配对码</h3>
        <div class="invite-code-box">
          <div class="code">${n}</div>
          <p style="font-size:13px;color:var(--text-secondary);margin-top:8px;">
            分享给好友，让TA在配对页输入这个码
          </p>
        </div>

        <div class="invite-link-box">
          <span class="link">${r}</span>
          <button class="copy-btn" id="copy-link">复制</button>
        </div>

        <div class="share-btns" style="margin-top:16px;">
          <button class="share-btn" id="share-cpid">
            <span class="icon">💬</span>
            分享CPID
          </button>
          <button class="share-btn" id="share-link">
            <span class="icon">🔗</span>
            分享链接
          </button>
        </div>

        <button class="btn btn-outline btn-block mt-16" id="check-result" style="display:none;">
          👀 查看匹配结果
        </button>
      </div>

      <div class="card">
        <h3 style="font-size:15px;font-weight:700;margin-bottom:8px;">💡 配对流程</h3>
        <ol style="font-size:14px;color:var(--text-secondary);padding-left:20px;line-height:2;">
          <li>把配对码 <strong style="color:var(--primary);">${n}</strong> 发给好友</li>
          <li>好友在配对页输入你的配对码</li>
          <li>系统自动计算你们的关系类型！</li>
        </ol>
      </div>

      <div class="card" style="text-align:center;">
        <button class="btn btn-secondary btn-block" id="use-demo">
          🎲 用演示数据匹配（预览）
        </button>
      </div>
    </div>
  `,document.getElementById(`share-cpid`).onclick=()=>{S(`💞 来测测我们的关系类型！我的CPTI配对码是：${n}，输入这个码就能匹配啦！`),j(`配对码已复制！`)},document.getElementById(`copy-link`).onclick=()=>{S(r),j(`链接已复制！`)},document.getElementById(`share-link`).onclick=()=>{S(r),j(`链接已复制！`)},document.getElementById(`use-demo`).onclick=()=>{let e=t.getScores();if(!e){j(`请先完成测试！`);return}let n={name:`演示好友`,scores:{D:30+Math.floor(Math.random()*60),W:30+Math.floor(Math.random()*60),R:30+Math.floor(Math.random()*60),S:30+Math.floor(Math.random()*60),X:30+Math.floor(Math.random()*60)}},r=u(e,n.scores);t.saveMatchData({type:r.type,similarity:r.similarity,friendName:n.name,friendScores:n.scores,myScores:e}),window.location.hash=`#/match`}}function O(e,n){let r=n.type,i=t.getUser()||{name:`我`},a=n.friendName||`好友`;e.innerHTML=`
    <div class="page-header" style="background:linear-gradient(135deg, #ff6b6b 0%, #667eea 100%);">
      <h1>💞 配对结果</h1>
      <p>你和${a}的关系是——</p>
    </div>

    <div class="match-page">
      <div class="card match-card bounce-in">
        <div class="match-icon">${r.emoji}</div>
        <div class="match-type">${r.name}</div>
        <div class="match-sub">匹配度 ${n.similarity}%</div>
      </div>

      <div class="match-persons">
        <div class="match-person">
          <div class="avatar">${i.name.charAt(0)}</div>
          <div class="name">${i.name}</div>
        </div>
        <div class="match-heart">❤️</div>
        <div class="match-person">
          <div class="avatar b">${a.charAt(0)}</div>
          <div class="name">${a}</div>
        </div>
      </div>

      <div class="card type-description">
        <h3>📖 关系解读</h3>
        <p>${r.pairDesc||r.description}</p>
      </div>

      <div class="card share-section">
        <h3>📤 分享你们的CP关系</h3>
        <div class="share-btns">
          <button class="share-btn" id="share-image">
            <span class="icon">🖼️</span>
            分享卡片
          </button>
          <button class="share-btn" id="share-text">
            <span class="icon">💬</span>
            分享文案
          </button>
        </div>
      </div>

      <div class="card" style="text-align:center;">
        <button class="btn btn-primary btn-block" id="rematch">
          🔄 重新配对
        </button>
        <button class="btn btn-outline btn-block mt-8" id="invite-another">
          💞 和另一个人配对
        </button>
      </div>
    </div>
  `,document.getElementById(`share-image`).onclick=()=>{C(r,i.name,n.myScores,!0,a)},document.getElementById(`share-text`).onclick=async()=>{j(await S(y(r.name,a))?`✅ 文案已复制，快去发朋友圈吧！`:`复制失败`)},document.getElementById(`rematch`).onclick=()=>{t.saveMatchData(null),window.location.hash=`#/match`},document.getElementById(`invite-another`).onclick=()=>{t.saveMatchData(null),window.location.hash=`#/match`}}function k(e){let n=e.get(`cpid`)||``;n&&sessionStorage.setItem(`cpti_target_cpid`,n);let r=document.getElementById(`app`),i=t.getScores();if(!i){r.innerHTML=`
      <div class="page-header">
        <h1>💞 好友配对邀请</h1>
        <p>先完成测试再配对吧！</p>
      </div>
      <div class="loading-screen">
        <p>检测到你还没测试，先完成测评</p>
        <button class="btn btn-primary mt-16" id="go-test">开始测试 →</button>
      </div>
    `,document.getElementById(`go-test`).onclick=()=>{window.location.hash=`#/test?mode=match&cpid=${n}`};return}let a={D:30+Math.floor(Math.random()*60),W:30+Math.floor(Math.random()*60),R:30+Math.floor(Math.random()*60),S:30+Math.floor(Math.random()*60),X:30+Math.floor(Math.random()*60)},o=u(i,a);t.saveMatchData({type:o.type,similarity:o.similarity,friendName:`好友`,friendScores:a,myScores:i}),window.location.hash=`#/match`}function A(e){try{let t=sessionStorage.getItem(`cpti_friend_${e}`);return t?JSON.parse(t):null}catch{return null}}function j(e){let t=document.getElementById(`toast`);t&&(t.textContent=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),2500))}function M(){let e=document.getElementById(`app`);e.innerHTML=`
    <div class="page-header">
      <h1>📖 25种关系类型</h1>
      <p>你和TA会是哪一种？</p>
    </div>

    <div class="types-page">
      <div class="types-grid">
        ${s.map(e=>{let t=o[e];return`
            <div class="type-card" data-type="${e}">
              <div class="emoji">${t.emoji}</div>
              <div class="name">${t.name}</div>
              <div class="name-en">${e}</div>
            </div>
          `}).join(``)}
      </div>

      <!-- 详情弹窗 -->
      <div id="type-detail-overlay" class="overlay" style="display:none;">
        <div class="modal" style="text-align:left;max-width:400px;">
          <div id="type-detail-content"></div>
          <button class="btn btn-primary btn-block mt-16" id="close-detail">我知道了</button>
        </div>
      </div>
    </div>
  `,e.querySelectorAll(`.type-card`).forEach(e=>{e.onclick=()=>{let t=o[e.dataset.type],n=document.getElementById(`type-detail-overlay`),r=document.getElementById(`type-detail-content`);r.innerHTML=`
        <div style="text-align:center;margin-bottom:16px;">
          <span style="font-size:48px;">${t.emoji}</span>
          <h3 style="font-size:22px;font-weight:800;margin-top:8px;">${t.name}</h3>
          <span style="font-size:13px;color:#b2bec3;">${t.id}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
          ${t.tags.map(e=>`<span style="padding:3px 12px;border-radius:12px;background:rgba(102,126,234,0.1);color:var(--primary);font-size:12px;">${e}</span>`).join(``)}
        </div>
        <p style="font-size:15px;color:var(--text-secondary);line-height:1.8;">${t.description}</p>
      `,n.style.display=`flex`}}),document.getElementById(`close-detail`).onclick=()=>{document.getElementById(`type-detail-overlay`).style.display=`none`}}window.__CPTI_STORE=t;function N(){let[e,t]=(window.location.hash.slice(1)||`/`).split(`?`),r=new URLSearchParams(t||``);switch(window.scrollTo(0,0),e){case`/`:case``:n();break;case`/test`:m(r);break;case`/result`:T();break;case`/match`:E();break;case`/match/invite`:D();break;case`/match/join`:k(r);break;case`/types`:M();break;default:n()}}window.addEventListener(`hashchange`,N),N();