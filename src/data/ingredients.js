const ingredients = [
  {
    id: "tofu",
    name: "豆腐",
    emoji: "🧈",
    vector: { temperature: -2, texture: -2, flavor: -2 },
    trait: "温润如玉",
    pairing: "与昆布高汤同煮，便是人间至味",
    whispers: {
      texture_low: "质地绵软，像是会把所有的温暖都融化在嘴里。",
      texture_mid: "入口即化，温柔得让人想起某些遥远的记忆。",
      texture_high: "虽然紧实，却依然保持着那份柔软的内心。",
      temp_cold: "冷而不冽，像是深秋清晨的井水。",
      temp_warm: "温热适口，恰到好处的温度让人安心。",
      flavor_light: "味道清淡，但细品之下有回甘。",
      flavor_rich: "滋味醇厚，是时间沉淀出的味道。"
    }
  },
  {
    id: "kombu",
    name: "昆布",
    emoji: "🌿",
    vector: { temperature: -1, texture: -1, flavor: -2 },
    trait: "清雅内敛",
    pairing: "与柴鱼片同熬，鲜味悠长而深远",
    whispers: {
      texture_low: "质地柔韧，需要慢慢咀嚼才能品出真味。",
      texture_mid: "细腻光滑，带着海洋特有的润泽。",
      texture_high: "弹性十足，每一口都能感受到海的力量。",
      temp_cold: "带着海风的凉意，清醒而深远。",
      temp_warm: "温暖如春海，让鲜味慢慢释放。",
      flavor_light: "鲜而不艳，是低调的奢华。",
      flavor_rich: "鲜味浓郁却不咄咄逼人。"
    }
  },
  {
    id: "mountainYam",
    name: "山药",
    emoji: "🥔",
    vector: { temperature: -1, texture: -1, flavor: 0 },
    trait: "厚德载物",
    pairing: "切片蘸酱，生脆中带着温润的甜",
    whispers: {
      texture_low: "绵软细腻，像是大地的温柔拥抱。",
      texture_mid: "粘稠润滑，带着山间清泉的凉意。",
      texture_high: "清脆爽口，咬下去是阳光的味道。",
      temp_cold: "性凉而润，像是深山的清泉。",
      temp_warm: "温补不上火，是温和的力量。",
      flavor_light: "味道清淡，却回味无穷。",
      flavor_rich: "甘甜内敛，不张扬却难忘。"
    }
  },
  {
    id: "chineseCabbage",
    name: "白菜",
    emoji: "🥬",
    vector: { temperature: -1, texture: 0, flavor: -1 },
    trait: "朴素大方",
    pairing: "文火慢炖，吸饱汤汁便是人间至鲜",
    whispers: {
      texture_low: "叶片软烂，是时间慢炖出的温柔。",
      texture_mid: "脆嫩相宜，每一层都有不同的口感。",
      texture_high: "爽脆清甜，是冬日里的第一口新鲜。",
      temp_cold: "清凉去火，像是初冬的第一场霜。",
      temp_warm: "热腾腾端上来，暖意从舌尖蔓延到心底。",
      flavor_light: "清淡如水，却是百味之首。",
      flavor_rich: "吸饱了汤汁，每一口都是精华。"
    }
  },
  {
    id: "ginger",
    name: "生姜",
    emoji: "🫚",
    vector: { temperature: 2, texture: 1, flavor: 1 },
    trait: "外刚内柔",
    pairing: "红糖姜茶，暖入心扉",
    whispers: {
      texture_low: "纤维细腻，辣味温柔而绵长。",
      texture_mid: "入口先是辛辣，回味却是甘甜。",
      texture_high: "质地紧实，辣得理直气壮。",
      temp_cold: "辛辣温中，驱散身体里的寒气。",
      temp_warm: "暖意从胃里升起，蔓延至四肢百骸。",
      flavor_light: "辛香点缀，恰到好处。",
      flavor_rich: "辛辣浓烈，是冬日里的火焰。"
    }
  },
  {
    id: "garlic",
    name: "大蒜",
    emoji: "🧄",
    vector: { temperature: 2, texture: 1, flavor: 2 },
    trait: "敢爱敢恨",
    pairing: "铁板煎香，便是夜宵的灵魂",
    whispers: {
      texture_low: "软糯香甜，完全没有辛辣的刺激。",
      texture_mid: "绵密细腻，甜中带着微微的辛。",
      texture_high: "爽脆带劲，咬下去是满满的活力。",
      temp_cold: "本性温热，像是藏着一个小太阳。",
      temp_warm: "煎至金黄，香气四溢，暖胃更暖心。",
      flavor_light: "蒜香清新，是画龙点睛的存在。",
      flavor_rich: "浓香馥郁，是夜宵桌上不可或缺的角色。"
    }
  },
  {
    id: "chili",
    name: "辣椒",
    emoji: "🌶️",
    vector: { temperature: 2, texture: 1, flavor: 2 },
    trait: "爱憎分明",
    pairing: "麻婆豆腐，麻辣鲜香烫嘴",
    whispers: {
      texture_low: "皮薄肉软，辣意来得温柔却持久。",
      texture_mid: "脆嫩多汁，辣得让人精神一振。",
      texture_high: "肉质厚实，每一口都是辣的礼赞。",
      temp_cold: "性热如火，驱寒效果立竿见影。",
      temp_warm: "辣得满头大汗，却让人欲罢不能。",
      flavor_light: "微辣提鲜，是调味的点睛之笔。",
      flavor_rich: "麻辣双重刺激，让人又爱又怕。"
    }
  },
  {
    id: "potato",
    name: "土豆",
    emoji: "🥔",
    vector: { temperature: 0, texture: -1, flavor: 0 },
    trait: "包容智慧",
    pairing: "咖喱土豆，绵软入味",
    whispers: {
      texture_low: "沙沙的口感，是让人安心的味道。",
      texture_mid: "绵软细腻，入口即化的温柔。",
      texture_high: "紧实弹牙，需要细细咀嚼的美味。",
      temp_cold: "冷热皆宜，冰镇后口感更佳。",
      temp_warm: "热乎乎的，暖意从舌尖传遍全身。",
      flavor_light: "清淡本味，是最质朴的食材。",
      flavor_rich: "吸饱了汤汁，每一口都是满足。"
    }
  },
  {
    id: "egg",
    name: "鸡蛋",
    emoji: "🥚",
    vector: { temperature: 0, texture: -1, flavor: 1 },
    trait: "圆融通达",
    pairing: "番茄炒蛋，家常菜的终极奥义",
    whispers: {
      texture_low: "嫩滑如丝，像是云朵融化在嘴里。",
      texture_mid: "细腻绵软，每一口都是温柔的触碰。",
      texture_high: "紧实弹牙，是阳光赋予的力量。",
      temp_cold: "冰凉的蛋白，清醒而纯粹。",
      temp_warm: "温热的蛋黄，是家的味道。",
      flavor_light: "清淡本真，是百搭的万能食材。",
      flavor_rich: "滋味浓郁，是蛋白质赋予的满足感。"
    }
  },
  {
    id: "bambooShoot",
    name: "竹笋",
    emoji: "🎍",
    vector: { temperature: 0, texture: 2, flavor: -1 },
    trait: "清高有节",
    pairing: "油焖春笋，不负春光",
    whispers: {
      texture_low: "软嫩可人，是春天最鲜嫩的味道。",
      texture_mid: "脆爽多汁，每一口都是春天的气息。",
      texture_high: "紧实有嚼劲，是竹的傲骨。",
      temp_cold: "清凉去燥，像是山间的清风。",
      temp_warm: "热油快炒，香气激发，春意盎然。",
      flavor_light: "清淡宜人，是素菜中的君子。",
      flavor_rich: "鲜味醇厚，是山珍的代表。"
    }
  },
  {
    id: "carrot",
    name: "胡萝卜",
    emoji: "🥕",
    vector: { temperature: 1, texture: 1, flavor: 1 },
    trait: "活力四射",
    pairing: "清炒胡萝卜，鲜甜脆爽",
    whispers: {
      texture_low: "软糯香甜，是孩子的最爱。",
      texture_mid: "脆嫩多汁，每一口都是阳光的味道。",
      texture_high: "紧实爽脆，嚼出满满的活力。",
      temp_cold: "生吃清脆，是夏日的小确幸。",
      temp_warm: "炒熟后更甜，暖意融融。",
      flavor_light: "清甜爽口，是蔬菜中的小太阳。",
      flavor_rich: "滋味浓郁，营养丰富。"
    }
  },
  {
    id: "radish",
    name: "白萝卜",
    emoji: "🥡",
    vector: { temperature: -1, texture: 0, flavor: -1 },
    trait: "外硬内软",
    pairing: "煮汤配鱼，鲜甜共舞",
    whispers: {
      texture_low: "软糯绵密，入口即化的温柔。",
      texture_mid: "脆嫩多汁，是家常的滋味。",
      texture_high: "紧实爽脆，需要用力咀嚼的美味。",
      temp_cold: "性凉去火，是夏日的清凉。",
      temp_warm: "热汤煮过，暖意从内而外。",
      flavor_light: "清淡微甜，是最简单的快乐。",
      flavor_rich: "吸饱了汤汁，鲜味在口中绽放。"
    }
  },
  {
    id: "shiitake",
    name: "香菇",
    emoji: "🍄",
    vector: { temperature: 0, texture: 0, flavor: 1 },
    trait: "深藏不露",
    pairing: "小鸡炖蘑菇，山珍配山珍",
    whispers: {
      texture_low: "软嫩易嚼，是素食者的肉。",
      texture_mid: "肉质肥厚，口感饱满而充实。",
      texture_high: "紧实弹牙，是阳光晒过的味道。",
      temp_cold: "带着山林的清凉气息。",
      temp_warm: "热汤炖煮，鲜味完全释放。",
      flavor_light: "鲜而不妖，是低调的美味。",
      flavor_rich: "香气浓郁，是山珍特有的深厚。"
    }
  },
  {
    id: "sesame",
    name: "芝麻",
    emoji: "⚫",
    vector: { temperature: 0, texture: 1, flavor: 2 },
    trait: "小中见大",
    pairing: "芝麻酱拌面，香到舔碗底",
    whispers: {
      texture_low: "研磨成粉，细腻入口即化。",
      texture_mid: "半碎半整，增加口感的层次。",
      texture_high: "整粒芝麻，需要细细咀嚼的香。",
      temp_cold: "冷拌凉拌，依然香气扑鼻。",
      temp_warm: "热食更香，温暖中香气四溢。",
      flavor_light: "清香淡雅，是点缀的精灵。",
      flavor_rich: "浓香四溢，是压场的角色。"
    }
  },
  {
    id: "starAnise",
    name: "八角",
    emoji: "⭐",
    vector: { temperature: 1, texture: 1, flavor: 2 },
    trait: "不可或缺",
    pairing: "红烧肉，八角是也",
    whispers: {
      texture_low: "质地松软，香气容易释放。",
      texture_mid: "密实有度，需要时间慢慢炖煮。",
      texture_high: "坚硬完整，香气锁在骨子里。",
      temp_cold: "常温常在，四季皆可用的温暖。",
      temp_warm: "热油激发，香气瞬间绽放。",
      flavor_light: "提香点缀，恰到好处。",
      flavor_rich: "浓香霸道，是菜肴的灵魂。"
    }
  },
  {
    id: "beef",
    name: "牛肉",
    emoji: "🥩",
    vector: { temperature: 1, texture: 1, flavor: 2 },
    trait: "厚重深沉",
    pairing: "红酒炖牛肉，岁月酿成的香",
    whispers: {
      texture_low: "软嫩多汁，是时间炖出的温柔。",
      texture_mid: "略有嚼劲，每一口都是满足。",
      texture_high: "紧实弹牙，是力量与韧性的结合。",
      temp_cold: "可以生食的纯粹，是另一种境界。",
      temp_warm: "热腾腾端上来，暖意从舌尖蔓延。",
      flavor_light: "清淡烹饪，保留本味的甘甜。",
      flavor_rich: "滋味浓郁，是肉食者的盛宴。"
    }
  },
  {
    id: "tomato",
    name: "西红柿",
    emoji: "🍅",
    vector: { temperature: 1, texture: -1, flavor: 1 },
    trait: "热情似火",
    pairing: "番茄炒蛋，酸甜可口",
    whispers: {
      texture_low: "软烂多汁，是做汤的好选择。",
      texture_mid: "酸甜适中，口感丰富。",
      texture_high: "紧实爽脆，适合生吃。",
      temp_cold: "生吃清爽，是夏日的开胃菜。",
      temp_warm: "煮熟后更甜，营养丰富。",
      flavor_light: "酸甜爽口，是蔬菜中的水果。",
      flavor_rich: "滋味浓郁，是很多菜品的灵魂。"
    }
  },
  {
    id: "chicken",
    name: "鸡肉",
    emoji: "🍗",
    vector: { temperature: 1, texture: 0, flavor: 1 },
    trait: "百搭全能",
    pairing: "可乐鸡翅，甜香可口",
    whispers: {
      texture_low: "软嫩多汁，入口即化。",
      texture_mid: "肉质紧实，口感饱满。",
      texture_high: "有嚼劲，越嚼越香。",
      temp_cold: "可以做凉拌，清爽不油腻。",
      temp_warm: "热食更香，温暖身心。",
      flavor_light: "清淡鲜美，适合各种烹饪方式。",
      flavor_rich: "滋味浓郁，是肉食者的最爱。"
    }
  },
  {
    id: "tofuSkin",
    name: "腐皮",
    emoji: "📄",
    vector: { temperature: -1, texture: -1, flavor: 0 },
    trait: "柔能克刚",
    pairing: "腐皮寿司，包裹春天的味道",
    whispers: {
      texture_low: "薄如蝉翼，入口即化的轻盈。",
      texture_mid: "软硬适中，是恰到好处的平衡。",
      texture_high: "厚实饱满，是豆浆的精华凝结。",
      temp_cold: "凉拌最佳，是夏日的清凉。",
      temp_warm: "热汤浸入，温柔地吸收汤汁。",
      flavor_light: "清淡本味，是最纯净的存在。",
      flavor_rich: "豆香浓郁，是豆浆的极致浓缩。"
    }
  },
  {
    id: "miso",
    name: "味噌",
    emoji: "🍯",
    vector: { temperature: 1, texture: -1, flavor: 1 },
    trait: "醇厚绵长",
    pairing: "味噌汤，早晨的第一口温柔",
    whispers: {
      texture_low: "细腻如丝，顺滑入口。",
      texture_mid: "绵密适中，每一口都有存在感。",
      texture_high: "浓稠厚重，是发酵的深度。",
      temp_cold: "冷汤夏日，清凉解暑。",
      temp_warm: "热汤暖身，是日本的国民味道。",
      flavor_light: "清淡米香，是发酵的初心。",
      flavor_rich: "咸香醇厚，是时间酿造的美味。"
    }
  }
]

const hiddenIngredients = [
  {
    id: "himalayanSalt",
    name: "粉盐",
    emoji: "🩷",
    vector: { temperature: 0, texture: 0, flavor: 0 },
    description: "亿万年前的海洋结晶，纯净得近乎透明。",
    trait: "纯粹至臻",
    pairing: "只需一滴，便能唤醒所有食材的本味",
    whisper: "至简至纯，是所有味道的起点与终点。"
  },
  {
    id: "deepSeaKombu",
    name: "深海昆布",
    emoji: "🌊",
    vector: { temperature: -2, texture: 0, flavor: -2 },
    description: "来自千米深海的馈赠，承载着海洋最深的秘密。",
    trait: "深邃神秘",
    pairing: "与任何食材相遇，都能创造奇迹",
    whisper: "深沉的宁静，却蕴含着无尽的力量。"
  },
  {
    id: "volcanicPepper",
    name: "火山胡椒",
    emoji: "🔥",
    vector: { temperature: 2, texture: 2, flavor: 2 },
    description: "来自火山口的热烈，辛辣中带着矿石的矿物质感。",
    trait: "极致热烈",
    pairing: "只需一粒，便能点燃整道菜的灵魂",
    whisper: "燃烧吧，在火焰中绽放最耀眼的光芒。"
  }
]

const specialPairings = {
  "tofu+kombu": { name: "味噌汤", emoji: "🍲", desc: "昆布的清与豆腐的嫩，在时间中慢慢相融" },
  "kombu+shiitake": { name: "素食高汤", emoji: "🥣", desc: "山珍与海味的相遇，鲜味叠加却不侵犯" },
  "ginger+garlic": { name: "万能调料", emoji: "🧄", desc: "中式烹饪的根基，缺一不可的灵魂伴侣" },
  "egg+tomato": { name: "番茄炒蛋", emoji: "🍳", desc: "家常菜的初恋，简单却让人魂牵梦萦" },
  "potato+beef": { name: "土豆炖牛腩", emoji: "🥘", desc: "绵软与嚼劲的对话，火候到了便浑然一体" },
  "bambooShoot+pork": { name: "腌笃鲜", emoji: "🎍", desc: "春笋与鲜肉的相遇，是时节馈赠的美味" },
  "chili+garlic": { name: "蒜蓉辣酱", emoji: "🌶️", desc: "刺激与辛辣的对决，让人又爱又怕" },
  "sesame+walnut": { name: "芝麻核桃酱", emoji: "⚫", desc: "浓香与油润的完美结合" },
  "starAnise+beef": { name: "红烧牛肉", emoji: "⭐", desc: "八角的独特香气渗入牛肉，这就是过年的味道" },
  "radish+carrot": { name: "清爽凉菜", emoji: "🥗", desc: "双色蔬菜的清脆，是夏天的清凉解药" },
  "miso+tofu": { name: "味噌豆腐汤", emoji: "🍯", desc: "发酵的醇厚遇上豆腐的细腻，暖胃更暖心" }
}

const duplicatePhilosophy = [
  "相同的灵魂聚在一起，是为了寻找更纯粹的共鸣。",
  "重叠不是冗余，而是深度的叠加。",
  "当相似的灵魂相遇，便能创造出意想不到的和谐。"
]

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.temperature * vecB.temperature +
                     vecA.texture * vecB.texture +
                     vecA.flavor * vecB.flavor
  const magnitudeA = Math.sqrt(vecA.temperature ** 2 + vecA.texture ** 2 + vecA.flavor ** 2)
  const magnitudeB = Math.sqrt(vecB.temperature ** 2 + vecB.texture ** 2 + vecB.flavor ** 2)

  if (magnitudeA === 0 || magnitudeB === 0) return 0
  return dotProduct / (magnitudeA * magnitudeB)
}

const getMagnitude = (vec) => {
  return Math.sqrt(vec.temperature ** 2 + vec.texture ** 2 + vec.flavor ** 2)
}

const checkHiddenIngredient = (scoreVector) => {
  const magnitude = getMagnitude(scoreVector)
  const dominant = (scoreVector.temperature + scoreVector.texture + scoreVector.flavor) / 3

  if (magnitude < 0.5 && Math.abs(dominant) < 0.3) {
    return hiddenIngredients.find(h => h.condition === "extreme_balance")
  }

  if (scoreVector.temperature <= -1.5 && scoreVector.texture <= -1.5 && scoreVector.flavor <= -1.5) {
    return hiddenIngredients.find(h => h.id === "deepSeaKombu")
  }

  if (scoreVector.temperature >= 1.5 && scoreVector.texture >= 1.5 && scoreVector.flavor >= 1.5) {
    return hiddenIngredients.find(h => h.id === "volcanicPepper")
  }

  return null
}

const generateWhisper = (ingredient, scoreVector) => {
  const { temperature, texture, flavor } = scoreVector

  const whisperParts = []

  if (texture <= -1) {
    whisperParts.push(ingredient.whispers.texture_low)
  } else if (texture >= 1) {
    whisperParts.push(ingredient.whispers.texture_high)
  } else {
    whisperParts.push(ingredient.whispers.texture_mid)
  }

  if (temperature <= -1) {
    whisperParts.push(ingredient.whispers.temp_cold)
  } else if (temperature >= 1) {
    whisperParts.push(ingredient.whispers.temp_warm)
  }

  if (flavor <= -1) {
    whisperParts.push(ingredient.whispers.flavor_light)
  } else if (flavor >= 1) {
    whisperParts.push(ingredient.whispers.flavor_rich)
  }

  const mainWhisper = whisperParts[Math.floor(Math.random() * whisperParts.length)]

  return `${ingredient.trait}。${mainWhisper}`
}

export const getIngredientByScore = (scoreVector) => {
  if (Math.random() < 0.05) {
    const hidden = checkHiddenIngredient(scoreVector)
    if (hidden) {
      return {
        id: hidden.id,
        name: hidden.name,
        emoji: hidden.emoji,
        description: hidden.description,
        trait: hidden.trait,
        pairing: hidden.pairing,
        whisper: hidden.whisper,
        vector: hidden.vector,
        isHidden: true
      }
    }
  }

  let bestMatch = ingredients[0]
  let bestSimilarity = -1

  ingredients.forEach(ingredient => {
    const similarity = cosineSimilarity(scoreVector, ingredient.vector)
    if (similarity > bestSimilarity) {
      bestSimilarity = similarity
      bestMatch = ingredient
    }
  })

  const whisper = generateWhisper(bestMatch, scoreVector)

  return {
    id: bestMatch.id,
    name: bestMatch.name,
    emoji: bestMatch.emoji,
    description: bestMatch.pairing,
    trait: bestMatch.trait,
    pairing: bestMatch.pairing,
    whisper: whisper,
    vector: bestMatch.vector,
    isHidden: false
  }
}

export const getAllIngredients = () => ingredients

export const combineIngredients = (ingredientList) => {
  if (!ingredientList || ingredientList.length === 0) {
    return {
      dishName: "空盘",
      dishEmoji: "🍽️",
      dishDescription: "至少需要一种食材才能开始烹饪"
    }
  }

  if (ingredientList.length === 1) {
    const single = ingredientList[0]
    return {
      dishName: single.name,
      dishEmoji: single.emoji,
      dishDescription: `一个人的独食，是与自己的对话。`,
      isSingle: true
    }
  }

  const ingredientIds = ingredientList.map(i => i.id).sort()
  const pairKey = ingredientIds.join('+')

  if (specialPairings[pairKey]) {
    const special = specialPairings[pairKey]
    return {
      dishName: special.name,
      dishEmoji: special.emoji,
      dishDescription: special.desc,
      isSpecial: true
    }
  }

  const idCounts = {}
  ingredientList.forEach(i => {
    idCounts[i.id] = (idCounts[i.id] || 0) + 1
  })

  const duplicates = Object.entries(idCounts).filter(([id, count]) => count >= 2)
  const uniqueIngredients = Object.keys(idCounts).map(id => ingredients.find(i => i.id === id)).filter(Boolean)
  const uniqueNames = Object.keys(idCounts).map(id => ingredients.find(i => i.id === id).name).filter(Boolean)

  const avgVector = {
    temperature: ingredientList.reduce((sum, i) => sum + i.vector.temperature, 0) / ingredientList.length,
    texture: ingredientList.reduce((sum, i) => sum + i.vector.texture, 0) / ingredientList.length,
    flavor: ingredientList.reduce((sum, i) => sum + i.vector.flavor, 0) / ingredientList.length
  }

  if (duplicates.length > 0 && uniqueIngredients.length === 1) {
    const [dupId, dupCount] = duplicates[0]
    const dupIngredient = ingredients.find(i => i.id === dupId)
    const philosophy = duplicatePhilosophy[Math.floor(Math.random() * duplicatePhilosophy.length)]

    const dishNames = {
      2: [`双份${dupIngredient.name}`, `${dupIngredient.name}双拼`, `${dupIngredient.name}二重奏`, `${dupIngredient.name}成双`, `${dupIngredient.name}两重天`],
      3: [`三份${dupIngredient.name}`, `${dupIngredient.name}三重奏`, `${dupIngredient.name}三叠`, `${dupIngredient.name}三口香`, `${dupIngredient.name}三昧`],
      4: [`四份${dupIngredient.name}`, `${dupIngredient.name}大团圆`, `${dupIngredient.name}四喜`, `${dupIngredient.name}四季`, `${dupIngredient.name}四方`],
      5: [`五份${dupIngredient.name}`, `${dupIngredient.name}盛宴`, `${dupIngredient.name}五福`, `${dupIngredient.name}五味`, `${dupIngredient.name}五行`]
    }

    const names = dishNames[Math.min(dupCount, 5)] || dishNames[5]
    const dishName = names[Math.floor(Math.random() * names.length)]

    const duplicateDescriptions = [
      `${dupCount}份${dupIngredient.name}的相遇，味道更加浓郁醇厚。`,
      `${dupIngredient.name}的多重奏，层次丰富，回味无穷。`,
      `当${dupCount}份${dupIngredient.name}聚集在一起，创造出前所未有的美味。`,
      `${dupIngredient.name}的力量叠加，口感更加饱满。`,
      `相同的${dupIngredient.name}，不同的层次，带来惊喜的味蕾体验。`
    ]

    const description = duplicateDescriptions[Math.floor(Math.random() * duplicateDescriptions.length)]

    return [{
      dishName: dishName,
      dishEmoji: dupIngredient.emoji,
      dishDescription: `${description} ${philosophy}`,
      isSpecial: true,
      specialType: "duplicate"
    }]
  }

  const ingredientNames = ingredientList.map(i => i.name)
  const uniqueNameSet = [...new Set(ingredientNames)]
  const combinedName = uniqueNameSet.slice(0, 3).join('、') + (uniqueNameSet.length > 3 ? '等' : '')

  const specificDishes = [
    { ingredients: ["豆腐", "白菜"], name: "白菜豆腐汤", emoji: "🍲", desc: "清爽不油腻，是家常的温暖" },
    { ingredients: ["胡萝卜", "土豆"], name: "胡萝卜炖土豆", emoji: "🥔", desc: "软糯香甜，营养均衡" },
    { ingredients: ["鸡蛋", "西红柿"], name: "番茄炒蛋", emoji: "🍳", desc: "酸甜可口，经典家常菜" },
    { ingredients: ["牛肉", "土豆"], name: "土豆炖牛肉", emoji: "🍖", desc: "肉质软烂，土豆入味" },
    { ingredients: ["香菇", "鸡肉"], name: "香菇炖鸡", emoji: "🍄", desc: "香气四溢，营养丰富" },
    { ingredients: ["山药", "胡萝卜"], name: "山药胡萝卜粥", emoji: "🥣", desc: "温润滋补，养生佳品" },
    { ingredients: ["豆腐", "香菇"], name: "香菇豆腐", emoji: "🧈", desc: "清淡鲜美，素食精品" },
    { ingredients: ["白菜", "粉丝"], name: "白菜粉丝汤", emoji: "🍲", desc: "清爽开胃，简单美味" },
    { ingredients: ["鸡蛋", "韭菜"], name: "韭菜炒蛋", emoji: "🍳", desc: "鲜香可口，下饭神器" },
    { ingredients: ["牛肉", "辣椒"], name: "辣椒炒牛肉", emoji: "🌶️", desc: "香辣过瘾，刺激味蕾" },
    { ingredients: ["芝麻", "豆腐"], name: "芝麻豆腐", emoji: "⚫", desc: "香酥可口，营养丰富" },
    { ingredients: ["豆腐", "竹笋"], name: "竹笋烧豆腐", emoji: "🎍", desc: "清淡爽口，春季佳品" },
    { ingredients: ["芝麻", "竹笋"], name: "芝麻炒竹笋", emoji: "⚫", desc: "香脆可口，营养均衡" },
    { ingredients: ["芝麻", "豆腐", "竹笋"], name: "芝麻竹笋豆腐", emoji: "🥗", desc: "色香味俱全，营养丰富" },
    { ingredients: ["鸡蛋", "豆腐"], name: "鸡蛋豆腐羹", emoji: "🥚", desc: "嫩滑爽口，老少皆宜" },
    { ingredients: ["胡萝卜", "鸡蛋"], name: "胡萝卜炒蛋", emoji: "🥕", desc: "色彩鲜艳，营养丰富" },
    { ingredients: ["香菇", "胡萝卜"], name: "香菇胡萝卜", emoji: "🍄", desc: "鲜香可口，营养均衡" },
    { ingredients: ["土豆", "鸡蛋"], name: "土豆炒蛋", emoji: "🥔", desc: "软糯香甜，家常美味" },
    { ingredients: ["白菜", "豆腐", "香菇"], name: "白菜豆腐香菇汤", emoji: "🍲", desc: "清淡鲜美，营养丰富" },
    { ingredients: ["胡萝卜", "土豆", "牛肉"], name: "胡萝卜土豆炖牛肉", emoji: "🍖", desc: "营养丰富，暖身暖心" }
  ]

  const matchingDishes = specificDishes.filter(dish =>
    dish.ingredients.every(ing => uniqueNameSet.includes(ing))
  )

  const cookingMethods = ['炒', '煮', '炖', '蒸', '拌', '煎', '烤', '焖', '煲', '烩']
  const generateCreativeDish = (main, secondary, method) => ({
    dishName: `${main}${method}`,
    dishEmoji: ingredients.find(i => i.name === main)?.emoji || '🍽️',
    dishDescription: `${main}和${secondary}的${method}制美味，口感丰富，回味无穷`,
    isSpecial: false,
    specialType: "creative"
  })

  const resultDishes = []

  for (const dish of matchingDishes) {
    resultDishes.push({
      dishName: dish.name,
      dishEmoji: dish.emoji,
      dishDescription: dish.desc,
      isSpecial: true,
      specialType: "specific"
    })
  }

  if (uniqueNameSet.length >= 2) {
    const shuffledMethods = [...cookingMethods].sort(() => Math.random() - 0.5)
    const numCreativeDishes = Math.min(2, 5 - resultDishes.length)

    for (let i = 0; i < numCreativeDishes && i < uniqueNameSet.length - 1; i++) {
      const mainIdx = i % uniqueNameSet.length
      const secondaryIdx = (i + 1) % uniqueNameSet.length
      const method = shuffledMethods[i % shuffledMethods.length]
      const dish = generateCreativeDish(uniqueNameSet[mainIdx], uniqueNameSet[secondaryIdx], method)
      resultDishes.push(dish)
    }
  }

  if (resultDishes.length === 0) {
    const dishCatalog = [
      { name: "创意小炒", emoji: "🥗", desc: "新鲜食材的创意搭配，营养均衡" },
      { name: "暖心炖锅", emoji: "🍲", desc: "慢火熬煮，食材的精华都融入汤中" },
      { name: "鲜香炒饭", emoji: "🍚", desc: "粒粒分明，香气扑鼻" },
      { name: "清爽沙拉", emoji: "🥗", desc: "新鲜爽脆，健康又美味" },
      { name: "温馨汤品", emoji: "🍵", desc: "温润滋养，暖心又暖胃" }
    ]
    const randomDish = dishCatalog[Math.floor(Math.random() * dishCatalog.length)]
    resultDishes.push({
      dishName: randomDish.name,
      dishEmoji: randomDish.emoji,
      dishDescription: `${combinedName}，${randomDish.desc}`,
      isSpecial: false,
      specialType: "general"
    })
  }

  return resultDishes.slice(0, 4)
}
