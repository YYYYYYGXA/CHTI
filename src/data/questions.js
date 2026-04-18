export const questions = [
  {
    id: 1,
    dimension: "温度轴",
    axis: "temperature",
    text: "深夜十一点，你加完班走出公司，发现常去的那家小店还亮着灯，你会？",
    options: [
      { letter: "A", text: "假装没看见，直接打车回家睡觉", score: { warmth: 1 } },
      { letter: "B", text: "进去点碗热汤，坐下来慢慢吃完再回去", score: { warmth: 2 } },
      { letter: "C", text: "打个电话叫上住附近的朋友一起去吃夜宵", score: { spiciness: 1 } },
      { letter: "D", text: "冲进去点一桌子烧烤，拉朋友出来一起嗨", score: { spiciness: 2 } }
    ]
  },
  {
    id: 2,
    dimension: "质地轴",
    axis: "texture",
    text: "你精心准备了一周的方案，在会议上被人全盘否定，你会？",
    options: [
      { letter: "A", text: "默默点头接受，心里想着下次做得更好", score: { soft: 2 } },
      { letter: "B", text: "虚心请教哪里可以改进，接受建设性意见", score: { soft: 1 } },
      { letter: "C", text: "坚持自己的观点，用数据说服对方", score: { tough: 1 } },
      { letter: "D", text: "当场冷静反驳，列出所有支撑依据据理力争", score: { tough: 2 } }
    ]
  },
  {
    id: 3,
    dimension: "风味轴",
    axis: "flavor",
    text: "你独自一人在家做饭慰劳自己，你会选择？",
    options: [
      { letter: "A", text: "煮碗清汤面，加个蛋，简单却舒服", score: { light: 2 } },
      { letter: "B", text: "炒一盘番茄炒蛋，熟悉的味道最治愈", score: { light: 1 } },
      { letter: "C", text: "红烧肉配白米饭，狠狠地奖励自己一顿", score: { rich: 1 } },
      { letter: "D", text: "火锅底料炒香，炖上一锅热气腾腾的硬菜", score: { rich: 2 } }
    ]
  },
  {
    id: 4,
    dimension: "温度轴",
    axis: "temperature",
    text: "在朋友的婚礼上，你更愿意坐在？",
    options: [
      { letter: "A", text: "角落里安静吃饭，不做显眼的事", score: { warmth: 1 } },
      { letter: "B", text: "熟悉的亲友旁边，享受温馨的氛围", score: { warmth: 2 } },
      { letter: "C", text: "主动去认识新朋友，和陌生人聊天", score: { spiciness: 1 } },
      { letter: "D", text: "冲到舞台中央，带动气氛让大家嗨起来", score: { spiciness: 2 } }
    ]
  },
  {
    id: 5,
    dimension: "质地轴",
    axis: "texture",
    text: "你答应帮朋友的事，最后发现很难完成，你会？",
    options: [
      { letter: "A", text: "想办法糊弄过去，不要让朋友失望", score: { soft: 2 } },
      { letter: "B", text: "尽早坦白说太难了，请求朋友理解", score: { soft: 1 } },
      { letter: "C", text: "硬着头皮也要完成，承诺了就要做到", score: { tough: 1 } },
      { letter: "D", text: "想尽一切办法，甚至熬夜也要搞定", score: { tough: 2 } }
    ]
  },
  {
    id: 6,
    dimension: "风味轴",
    axis: "flavor",
    text: "你看电影时，更容易被什么样的场景打动？",
    options: [
      { letter: "A", text: "雨天主人公一个人坐在窗边发呆的画面", score: { light: 2 } },
      { letter: "B", text: "一家人围在一起吃家常菜的温馨场景", score: { light: 1 } },
      { letter: "C", text: "主角在高级餐厅举起酒杯庆祝的画面", score: { rich: 1 } },
      { letter: "D", text: "盛大宴会觥筹交错、灯火辉煌的场景", score: { rich: 2 } }
    ]
  },
  {
    id: 7,
    dimension: "温度轴",
    axis: "temperature",
    text: "当有人第一次见你就说'我们好像在哪见过'，你会？",
    options: [
      { letter: "A", text: "礼貌性微笑回应，但不往心里去", score: { warmth: 1 } },
      { letter: "B", text: "觉得有缘，主动多聊几句", score: { warmth: 2 } },
      { letter: "C", text: "开玩笑说'这是搭讪新方式吗'", score: { spiciness: 1 } },
      { letter: "D", text: "立刻热情回应，约着一起喝咖啡", score: { spiciness: 2 } }
    ]
  },
  {
    id: 8,
    dimension: "质地轴",
    axis: "texture",
    text: "你整理房间时，翻到了前任留下的东西，你会？",
    options: [
      { letter: "A", text: "直接扔掉，向前看最重要", score: { soft: 2 } },
      { letter: "B", text: "收进箱子里放着，偶尔想起也不难过", score: { soft: 1 } },
      { letter: "C", text: "拍张照留念，然后好好收起来", score: { tough: 1 } },
      { letter: "D", text: "小心翼翼包好，这是青春的印记", score: { tough: 2 } }
    ]
  },
  {
    id: 9,
    dimension: "风味轴",
    axis: "flavor",
    text: "你去一个陌生城市旅行，你更想体验？",
    options: [
      { letter: "A", text: "在青旅天台看日落，发呆一整个下午", score: { light: 2 } },
      { letter: "B", text: "在老街巷弄里走走，感受市井气息", score: { light: 1 } },
      { letter: "C", text: "去当地著名餐厅，尝遍所有招牌菜", score: { rich: 1 } },
      { letter: "D", text: "找一家深夜小酒馆，和当地人喝到天亮", score: { rich: 2 } }
    ]
  },
  {
    id: 10,
    dimension: "温度轴",
    axis: "temperature",
    text: "你心里烦闷的时候，更想一个人待着，还是找人倾诉？",
    options: [
      { letter: "A", text: "一个人待着，看看书听听音乐自己消化", score: { warmth: 2 } },
      { letter: "B", text: "和熟悉的朋友倾诉，不求建议只求陪伴", score: { warmth: 1 } },
      { letter: "C", text: "发条朋友圈，看谁来找自己", score: { spiciness: 1 } },
      { letter: "D", text: "拉上朋友喝酒唱歌，用热闹驱散烦闷", score: { spiciness: 2 } }
    ]
  },
  {
    id: 11,
    dimension: "质地轴",
    axis: "texture",
    text: "面对一条不合理的规定，你的态度是？",
    options: [
      { letter: "A", text: "表面遵守，暗地里想办法绕过去", score: { soft: 2 } },
      { letter: "B", text: "遵守就好，规定本身不重要", score: { soft: 1 } },
      { letter: "C", text: "找相关部门反映，推动规则改善", score: { tough: 1 } },
      { letter: "D", text: "无视规定，按自己认为对的方式做", score: { tough: 2 } }
    ]
  },
  {
    id: 12,
    dimension: "风味轴",
    axis: "flavor",
    text: "你更喜欢听别人怎么夸你？",
    options: [
      { letter: "A", text: "夸我低调务实，不张扬", score: { light: 2 } },
      { letter: "B", text: "夸我让人相处起来很舒服", score: { light: 1 } },
      { letter: "C", text: "夸我见解深刻，有品位", score: { rich: 1 } },
      { letter: "D", text: "夸我气场强大，与众不同", score: { rich: 2 } }
    ]
  }
]

export const calculateMBTI = (answers) => {
  const result = {
    warmth: 0,
    spiciness: 0,
    soft: 0,
    tough: 0,
    light: 0,
    rich: 0
  }

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null && questions[questionIndex]) {
      const option = questions[questionIndex].options[answerIndex]
      if (option && option.score) {
        Object.keys(option.score).forEach(key => {
          result[key] += option.score[key]
        })
      }
    }
  })

  return result
}

export const getAxisScore = (scores) => {
  return {
    temperature: scores.warmth - scores.spiciness,
    texture: scores.tough - scores.soft,
    flavor: scores.rich - scores.light
  }
}