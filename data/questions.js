export const questions = [
  {
    id: 1,
    dimension: '社交气温',
    axisLabel: 'C vs J',
    axis: 'social',
    text: '周五晚上刚躺床上刷手机，朋友突然约你去新开的网红店，你会？',
    options: [
      {
        id: 'q1a',
        title: '婉拒躺平',
        text: '打工人一天够累了，不如点份外卖边追剧边吃。',
        weight: { social: -2 }
      },
      {
        id: 'q1b',
        title: '立刻冲',
        text: '必须去！网红店不打卡怎么发朋友圈，再叫上几个朋友一起嗨。',
        weight: { social: 2 }
      }
    ]
  },
  {
    id: 2,
    dimension: '口味浓度',
    axisLabel: 'H vs M',
    axis: 'flavor',
    text: '加班到崩溃的夜晚，你最想点什么安慰自己？',
    options: [
      {
        id: 'q2a',
        title: '清爽解压',
        text: '来碗粥配小菜，或者一杯水果茶，清淡又治愈。',
        weight: { flavor: -2 }
      },
      {
        id: 'q2b',
        title: '重口暴击',
        text: '必须是麻辣香锅、烧烤或者芝士汉堡，越浓郁越解压！',
        weight: { flavor: 2 }
      }
    ]
  },
  {
    id: 3,
    dimension: '饮食风格',
    axisLabel: 'T vs N',
    axis: 'style',
    text: '刷到抖音上的暗黑料理挑战，你会？',
    options: [
      {
        id: 'q3a',
        title: '保守派',
        text: '还是算了吧，经典款才是永远的神，不想踩雷。',
        weight: { style: -2 }
      },
      {
        id: 'q3b',
        title: '猎奇达人',
        text: '必须试试！万一发现新大陆呢，发个视频还能火一把。',
        weight: { style: 2 }
      }
    ]
  },
  {
    id: 4,
    dimension: '点单方式',
    axisLabel: 'I vs P',
    axis: 'decision',
    text: '和朋友去吃新开的餐厅，你会怎么点单？',
    options: [
      {
        id: 'q4a',
        title: '随心而欲',
        text: '看眼缘，菜单上哪个名字顺眼就点哪个，主打一个惊喜。',
        weight: { decision: -2 }
      },
      {
        id: 'q4b',
        title: '攻略大师',
        text: '早就查好点评了，必点菜、隐藏菜单、踩雷项都门清。',
        weight: { decision: 2 }
      }
    ]
  },
  {
    id: 5,
    dimension: '社交气温',
    axisLabel: 'C vs J',
    axis: 'social',
    text: '朋友聚会吃火锅，你是哪种角色？',
    options: [
      {
        id: 'q5a',
        title: '安静干饭人',
        text: '专注涮肉，偶尔给身边人夹个菜，话不多但吃得香。',
        weight: { social: -1 }
      },
      {
        id: 'q5b',
        title: '气氛组组长',
        text: '活跃气氛，带动话题，还会主动加菜，场子全靠我热。',
        weight: { social: 1 }
      }
    ]
  },
  {
    id: 6,
    dimension: '口味浓度',
    axisLabel: 'H vs M',
    axis: 'flavor',
    text: '下午茶时间，你会选哪种甜点？',
    options: [
      {
        id: 'q6a',
        title: '小清新',
        text: '抹茶蛋糕、水果塔或者酸奶碗，甜而不腻最舒服。',
        weight: { flavor: -1 }
      },
      {
        id: 'q6b',
        title: '高热量快乐',
        text: '巧克力熔岩蛋糕、芝士爆浆蛋挞，越罪恶越快乐！',
        weight: { flavor: 1 }
      }
    ]
  },
  {
    id: 7,
    dimension: '饮食风格',
    axisLabel: 'T vs N',
    axis: 'style',
    text: '旅行时找吃的，你会优先选择？',
    options: [
      {
        id: 'q7a',
        title: '当地老字号',
        text: '必须吃当地人从小吃到大的店，那才是真正的烟火气。',
        weight: { style: -1 }
      },
      {
        id: 'q7b',
        title: '网红打卡店',
        text: '颜值高、创意足的店，拍出来好看才是王道。',
        weight: { style: 1 }
      }
    ]
  },
  {
    id: 8,
    dimension: '点单方式',
    axisLabel: 'I vs P',
    axis: 'decision',
    text: '突然想吃一顿好的，你会怎么决定吃什么？',
    options: [
      {
        id: 'q8a',
        title: '随机随缘',
        text: '打开外卖软件随便刷，看到什么想吃就点什么。',
        weight: { decision: -1 }
      },
      {
        id: 'q8b',
        title: '精密计算',
        text: '会考虑距离、评分、价格，甚至营养搭配，选出最优解。',
        weight: { decision: 1 }
      }
    ]
  },
  {
    id: 9,
    dimension: '社交气温',
    axisLabel: 'C vs J',
    axis: 'social',
    text: '一个人去吃海底捞，你会？',
    options: [
      {
        id: 'q9a',
        title: '享受独处',
        text: '安安静静吃，刷剧或者看小说，挺舒服的。',
        weight: { social: -2 }
      },
      {
        id: 'q9b',
        title: '社牛模式',
        text: '主动和邻桌聊天，说不定还能拼桌认识新朋友。',
        weight: { social: 2 }
      }
    ]
  },
  {
    id: 10,
    dimension: '口味浓度',
    axisLabel: 'H vs M',
    axis: 'flavor',
    text: '周末 brunch，你更倾向于？',
    options: [
      {
        id: 'q10a',
        title: '轻食派',
        text: '牛油果吐司、希腊酸奶、鲜榨果汁，健康又清爽。',
        weight: { flavor: -1 }
      },
      {
        id: 'q10b',
        title: '美式 heavy',
        text: '培根、煎蛋、薯饼、芝士汉堡，吃饱了才有力气玩。',
        weight: { flavor: 1 }
      }
    ]
  }
]

export const summarizeScores = (answers) => {
  const totals = {
    social: 0,
    flavor: 0,
    style: 0,
    decision: 0
  }

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return

    const option = questions[questionIndex]?.options[answerIndex]
    if (!option) return

    Object.entries(option.weight).forEach(([key, value]) => {
      totals[key] += value
    })
  })

  return totals
}

export const profiles = {
  CHTI: {
    symbol: '🍵',
    name: '抹茶',
    summary: '你像午后三点的抹茶，安静、细腻、会把食物吃成一种情绪修复。',
    keywords: ['慢热', '清润', '经典安心', '随心一点'],
    vibe: '你在饭桌上不是最吵的那个，却常常是最让人放松的那个。你喜欢味道有留白，喜欢熟悉的小店，也相信“想吃什么”本身就是一种答案。',
    food: '抹茶',
    scene: '下雨天靠窗的小店、木质托盘、热茶起雾，最好还能听见门铃轻轻响。',
    motto: '今天也不必太用力，先吃一口让心变软的东西。'
  },
  CHTP: {
    symbol: '🍙',
    name: '饭团',
    summary: '你温和、讲究、会认真安排每一餐的小确幸，是“吃饭也要有秩序感”的代表。',
    keywords: ['细致', '治愈', '经典控', '计划型'],
    vibe: '你很擅长把吃饭过成仪式。你知道哪家店几点出炉最好吃，也会把想去的馆子一间间标进地图里，耐心等一个合适时机。',
    food: '饭团',
    scene: '周末上午整理好路线，一站一站去收集你早就想吃的店。',
    motto: '对待喜欢的味道，提前安排是温柔，不是拘谨。'
  },
  CHNI: {
    symbol: '🌸',
    name: '樱花',
    summary: '你温柔但不无聊，对新鲜感有敏锐天线，喜欢轻盈又带点灵气的创意搭配。',
    keywords: ['柔和', '清新', '猎奇感', '跟着感觉走'],
    vibe: '你会被季节菜单和限定口味击中，也能接受“这道菜不按常理出牌”。你需要的是带有一点惊喜的温柔，而不是过度刺激。',
    food: '樱花',
    scene: '春夜散步后误入一间只有十几席的小店，菜单刚好写着今日限定。',
    motto: '喜欢新东西，不代表漂浮，你只是懂得为惊喜留位置。'
  },
  CHNP: {
    symbol: '🍰',
    name: '蛋糕',
    summary: '你看起来软糯，实际上最会研究隐藏菜单，是把细节和新鲜感一起拿下的人。',
    keywords: ['温柔脑', '轻负担', '尝鲜派', '攻略型'],
    vibe: '你会先把店铺背景、推荐搭配、出餐时段都摸清，再精准去吃最值得的那一口。你不爱轰轰烈烈，但很会把新鲜体验安排得漂亮。',
    food: '蛋糕',
    scene: '提前半个月约好的限时联名店，连座位靠窗还是靠里都想好了。',
    motto: '认真做功课，不是失去浪漫，而是保护浪漫。'
  },
  CMTI: {
    symbol: '🍲',
    name: '暖锅',
    summary: '你外表安静，内里却是浓香派，越在需要安慰的时候越想吃一口有重量的幸福。',
    keywords: ['慢熟', '厚味', '经典依赖', '随性点单'],
    vibe: '你平时低调，但口味从不寡淡。你偏爱能把人稳稳接住的食物，比如热锅、炖煮、奶香与酱香。你未必话多，但吃得很真诚。',
    food: '暖锅',
    scene: '风很大的冬夜，一个人也愿意专门绕路去吃一锅热腾腾的东西。',
    motto: '沉默不等于清淡，你只是把热烈藏在胃口里。'
  },
  CMTP: {
    symbol: '🍖',
    name: '烤肉',
    summary: '你爱浓郁，也爱掌控感，偏好那些经过验证的高满足菜单。',
    keywords: ['稳重', '满足感', '复刻经典', '清单型'],
    vibe: '你知道自己喜欢什么，也不轻易被网红噱头带跑。你愿意花时间找到最对味的一家，然后反复回访，直到那家店变成你的精神根据地。',
    food: '烤肉',
    scene: '天气转凉的傍晚，按计划去老地方点回那套让人百分百安心的组合。',
    motto: '真正的幸福感，很多时候来自确定无误的那一口。'
  },
  CMNI: {
    symbol: '🍷',
    name: '红酒',
    summary: '你喜欢软氛围和新点子，但口味绝不客气，是会被“限时浓郁特调”精准击中的人。',
    keywords: ['温软', '厚味控', '创意派', '直觉型'],
    vibe: '你会因为一道名字奇怪的限定甜品走进一间店，也会因为一个诱人描述临时改主意。你的世界观是：食物最好温柔地炸裂。',
    food: '红酒',
    scene: '灯光昏黄的小酒馆里，看见当日黑板菜单就瞬间心动。',
    motto: '有些惊艳，必须是厚厚地、热热地扑过来才算数。'
  },
  CMNP: {
    symbol: '🍣',
    name: '寿司',
    summary: '你很懂得把“重口满足”和“新鲜体验”放进同一张完美的行程单里。',
    keywords: ['高完成度', '浓郁控', '尝鲜脑', '执行力'],
    vibe: '你常常不是随便吃一顿，而是在策划一场主题明确的饮食体验。你既要有层次、有记忆点，也要有足够高的满足度，不能浪费胃口。',
    food: '寿司',
    scene: '为了某个联名菜单跨城也可以，只要值得，你就愿意认真吃一场。',
    motto: '胃口很珍贵，所以每一次出动都要尽量精彩。'
  },
  JHTI: {
    symbol: '🥟',
    name: '饺子',
    summary: '你天然适合把一桌人喂开心，喜欢舒服不压人的热闹和人人都能接住的味道。',
    keywords: ['外向', '清爽派', '传统友好', '随性自然'],
    vibe: '你是聚餐里的氛围缓冲垫，能照顾口味、能接话，也不喜欢让食物变成压迫感。你偏爱大众都能吃得开心的菜，热闹但不吵。',
    food: '饺子',
    scene: '朋友聚会时自然坐在中间，边分菜边聊天，大家都会莫名放松。',
    motto: '好吃这件事，分享出去才会长出第二份快乐。'
  },
  JHTP: {
    symbol: '🍜',
    name: '拉面',
    summary: '你既会热场，也会安排，是那种能把朋友聚餐办得很舒服的人。',
    keywords: ['社交担当', '清润口', '经典稳妥', '组织型'],
    vibe: '谁能吃辣、谁不吃生冷、谁想拍照、哪家店要提前排队，你心里都有数。你的快乐不仅在于吃到，还在于让所有人都吃得刚好。',
    food: '拉面',
    scene: '朋友说“随便吃什么都行”，你却能迅速安排出一场零翻车聚餐。',
    motto: '真正成熟的吃货，会把别人的胃口也一起照顾好。'
  },
  JHNI: {
    symbol: '🍦',
    name: '冰淇淋',
    summary: '你喜欢热闹与新鲜，但不追求压迫式重口，最适合边逛边吃、边笑边挑新东西。',
    keywords: ['轻快', '新鲜感', '游逛型', '即时心动'],
    vibe: '你对新食物的接受度很高，也喜欢在市集、快闪、街角小摊里发现快乐。你不一定要吃最贵的，但一定想吃得有趣。',
    food: '冰淇淋',
    scene: '城市节日市集、河边夜灯、手里拿着三样小吃，边走边聊边决定下一口。',
    motto: '我想要的不是被定义的好吃，而是好吃正在发生。'
  },
  JHNP: {
    symbol: '🍪',
    name: '饼干',
    summary: '你爱热闹，也爱研究，是朋友口中的“本地美食导航系统”。',
    keywords: ['社交属性强', '清爽不腻', '探索癖', '路线规划'],
    vibe: '你擅长把热门与冷门串成一条流畅路线，让一天里每一顿都各有高潮。你会让人觉得，原来认真吃饭也可以这么有趣。',
    food: '饼干',
    scene: '节假日带朋友进行一场从午后咖啡到深夜甜品的完整觅食行程。',
    motto: '真正的吃货不是盲冲，而是知道什么时候冲最值。'
  },
  JMTI: {
    symbol: '🍗',
    name: '炸鸡',
    summary: '你很会带动气氛，口味又偏浓郁，是“聚餐必须有你”类型的重磅吃货。',
    keywords: ['热场王', '满足优先', '经典局', '跟感觉走'],
    vibe: '你吃饭不仅为了吃饱，更是为了把气氛烧起来。你偏爱有声量的食物，比如滋啦作响、热气腾腾、咬下去能让人眼睛一亮的那种。',
    food: '炸鸡',
    scene: '大桌聚餐、深夜续摊、灯光亮一点、人声满一点，你才会觉得这顿饭活了。',
    motto: '饭桌应该有温度，也应该有声量。'
  },
  JMTP: {
    symbol: '🍔',
    name: '汉堡',
    summary: '你既重口又会规划，最适合担任“今晚吃什么”的终极决策者。',
    keywords: ['掌控感', '浓味派', '稳准狠', '组局高手'],
    vibe: '你会根据人数、预算、距离和口味偏好快速做出最优解。你喜欢高满足度，也知道怎么把资源用在刀刃上，局从你手里基本不会散。',
    food: '汉堡',
    scene: '一群人临时起意说“今晚必须吃点好的”，这时候最适合把手机交给你。',
    motto: '热闹和满足都不该靠运气，完全可以靠安排。'
  },
  JMNI: {
    symbol: '🌶️',
    name: '辣椒',
    summary: '你喜欢人群、重口与新鲜刺激，属于看到奇怪搭配就想立刻试试的行动派。',
    keywords: ['高能量', '猎奇胃', '现场派', '重口快乐'],
    vibe: '你愿意为一口新奇而绕远路，也很容易在热闹的夜里被菜单激起胜负欲。你讨厌无聊，比起稳妥，你更相信“难忘”才值回票价。',
    food: '辣椒',
    scene: '凌晨还亮着灯的店、朋友怂恿的一句“来都来了”、以及一整桌看起来很危险但很香的菜。',
    motto: '最好吃的那一口，常常就在下一次冒险里。'
  },
  JMNP: {
    symbol: '🍾',
    name: '香槟',
    summary: '你是 CHTI 里的高配型组局王，爱热闹、爱浓味、爱新鲜，还擅长把它们全部安排到位。',
    keywords: ['全场焦点', '大满足', '高探索', '超会安排'],
    vibe: '你不满足于普通聚餐，而是想打造一场从开胃菜到收尾甜品都令人惊呼的盛宴。你对“值得”有极强判断力，也很少让大家失望。',
    food: '香槟',
    scene: '生日局、庆功局、节日局，只要想把这一顿吃成记忆点，你就是最合适的总导演。',
    motto: '既然要吃，就吃成今晚的高光时刻。'
  }
}
