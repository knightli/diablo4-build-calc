let sorcererData = {};

sorcererData["Trunk Data"] = {
	"基本": {
		connections: [ "核心" ],
		x: 0,
		y: 0
	},
	"核心": {
		connections: [ "防御" ],
		requiredPoints: 2,
		x: -1195.229,
		y: 609.355
	},
	"防御": {
		connections: [ "召唤魔法" ],
		requiredPoints: 6,
		x: 513.726,
		y: 1514.46
	},
	"召唤魔法": {
		connections: [ "掌控" ],
		requiredPoints: 11,
		x: -1199.059,
		y: 2442.965
	},
	"掌控": {
		connections: [ "终极技能" ],
		requiredPoints: 16,
		x: 505.046,
		y: 3340.265
	},
	"终极技能": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -1203.599,
		y: 4249.025
	},
	"Capstone": {
		requiredPoints: 33,
		x: -7.567,
		y: 4869.41
	},
};

sorcererData["基本"] = {
	"冰霜弹": {
		connections: [ "基本", "强化冰霜弹" ],
		description: `幸运一击几率：{#}
对一名敌人投掷冰霜弹，造成 {#} 点伤害并使其冻伤 {#}%。

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.

— 附魔效果 —
来自技能的直接伤害会施加最多 {#} 的冻伤。`,
		id: 0,
		maxPoints: 5,
		values: [ "30", "35", "15" ],
		extraValues: [ "30" ],
		x: -195.614,
		y: -247.035
	},
	"强化冰霜弹": {
		baseSkill: "冰霜弹",
		connections: [ "冰霜弹", "闪烁冰霜弹", "闪耀冰霜弹" ],
		description: `冰霜弹 击中冰冷的敌人有 {#}% 几率爆炸, 击中周围的敌人. 对冻结的敌人此几率提高为 100%

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		id: 1,
		maxPoints: 1,
		values: [ "15" ],
		x: -336.656,
		y: -421.415
	},
	"闪烁冰霜弹": {
		baseSkill: "冰霜弹",
		connections: [ "强化冰霜弹" ],
		description: `冰霜弹会使冻结的敌人陷入易伤状态，持续 {#} 秒。

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		id: 2,
		maxPoints: 1,
		values: [ "3" ],
		x: -592.019,
		y: -455.675
	},
	"闪耀冰霜弹": {
		baseSkill: "冰霜弹",
		connections: [ "强化冰霜弹" ],
		description: `冰霜弹命中冻伤或冻结的敌人时会生成 {#} 点法力。

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		id: 3,
		maxPoints: 1,
		values: [ "4" ],
		x: -263.99,
		y: -545.8
	},
	"电花": {
		connections: [ "基本", "强化电花" ],
		description: `幸运一击几率：{#}%
发射一道闪电，震击一名敌人 {#} 次，每一击造成 {#} 点伤害。

Tags: Basic, Shock, Damage, Lightning.

— 附魔效果 —
消灭敌人时有 {#}% 几率生成一个爆裂电花。`,
		id: 4,
		maxPoints: 5,
		values: [ "9", "4", "8" ],
		extraValues: [ "10" ],
		x: -489.038,
		y: -81.23
	},
	"强化电花": {
		baseSkill: "电花",
		connections: [ "电花", "闪烁电花", "闪耀电花" ],
		description: `每次电花命中其主要目标，都有 {#}% 几率额外命中最多 {#} 名敌人，造成 {#} 点伤害。如果没有其他可以命中的敌人，改为电花对其主要目标造成的伤害提高 {#}%

Tags: Basic, Shock, Damage, Lightning.`,
		id: 5,
		maxPoints: 1,
		values: [ "20", "3", "6", "20" ],
		x: -762.794,
		y: -204.92
	},
	"闪烁电花": {
		baseSkill: "电花",
		connections: [ "强化电花" ],
		description: `电花每次命中敌人时，有 {#}% 几率生成一个爆裂电花。

Tags: Basic, Shock, Damage, Lightning.`,
		id: 6,
		maxPoints: 1,
		values: [ "3" ],
		x: -782.894,
		y: -342.245
	},
	"闪耀电花": {
		baseSkill: "电花",
		connections: [ "强化电花" ],
		description: `电花每次施放时，暴击几率提高 {#}% ，持续 {#} 秒，最多提高 {#}%

Tags: Basic, Shock, Damage, Lightning.`,
		id: 7,
		maxPoints: 1,
		values: [ "2", "3", "10" ],
		x: -1028.789,
		y: -207.505
	},
	"电弧鞭笞": {
		connections: [ "基本", "强化电弧鞭笞" ],
		description: `幸运一击几率：{#}%
施放弧形闪电，对你面前的敌人造成 {#} 点伤害。每第 {#} 次施放电弧鞭笞，击晕所有命中的敌人 {#} 秒。

Tags: Basic, Shock, Damage, Lightning, Crowd Control.

— 附魔效果 —
当你使用有冷却时间的技能时，你周围的敌人会昏迷 {#}秒。`,
		id: 8,
		maxPoints: 5,
		values: [ "30", "42", "10", "2" ],
		extraValues: [ "0.5" ],
		x: 487.781,
		y: -80.27
	},
	"强化电弧鞭笞": {
		baseSkill: "电弧鞭笞",
		connections: [ "电弧鞭笞", "闪耀电弧鞭笞", "闪烁电弧鞭笞" ],
		description: `如果电弧鞭笞的初始扫击造成暴击，则额外扫击一次。

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		id: 9,
		maxPoints: 1,
		x: 765.421,
		y: -208.87
	},
	"闪耀电弧鞭笞": {
		baseSkill: "电弧鞭笞",
		connections: [ "强化电弧鞭笞" ],
		description: `用电弧鞭笞命中昏迷的敌人会使你的冷却时间缩短 {#} 秒。

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		id: 10,
		maxPoints: 1,
		values: [ "0.25" ],
		x: 1040.126,
		y: -209
	},
	"闪烁电弧鞭笞": {
		baseSkill: "电弧鞭笞",
		connections: [ "强化电弧鞭笞" ],
		description: `电弧鞭笞每命中一名敌人，移动速度提高 {#}%，持续 {#} 秒，最多提高 {#}%

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		id: 11,
		maxPoints: 1,
		values: [ "6", "5", "18" ],
		x: 759.211,
		y: -351.28
	},
	"火焰弹": {
		connections: [ "基本", "强化火焰弹" ],
		description: `幸运一击几率：{#}%
投掷一枚火焰弹，造成 {#} 点伤害，并使目标燃烧，在 {#} 秒内造成 {#} 点伤害。

Tags: Basic, Pyromancy, Damage, Fire, Burn.

— 附魔效果 —
来自技能的直接伤害会在 {#} 秒内额外施加最多 {#} 点燃烧伤害。`,
		id: 12,
		maxPoints: 5,
		values: [ "20", "10", "8", "40" ],
		extraValues: [ "8", "23" ],
		x: 202.516,
		y: -251.18
	},
	"强化火焰弹": {
		baseSkill: "火焰弹",
		connections: [ "火焰弹", "闪耀火焰弹", "闪烁火焰弹" ],
		description: `火焰弹穿透燃烧的敌人

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		id: 13,
		maxPoints: 1,
		x: 333.76,
		y: -423.11
	},
	"闪耀火焰弹": {
		baseSkill: "火焰弹",
		connections: [ "强化火焰弹" ],
		description: `火焰弹暴击会使你对敌人造成的燃烧伤害提高 {#}%，持续 {#} 秒。

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		id: 14,
		maxPoints: 1,
		values: [ "20", "4" ],
		x: 586.526,
		y: -457.72
	},
	"闪烁火焰弹": {
		baseSkill: "火焰弹",
		connections: [ "强化火焰弹" ],
		description: `火焰弹命中燃烧的敌人时，会生成 {#} 点法力。

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		id: 15,
		maxPoints: 1,
		values: [ "2" ],
		x: 249.014,
		y: -546.625
	},
};

sorcererData["核心"] = {
	"电荷弹": {
		connections: [ "核心", "强化电荷弹" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
在地面上施放 {#} 枚轨迹不规则的闪电弹，每枚造成 {#} 点伤害。

Tags: Core, Shock, Damage, Lightning, Mana.

— 附魔效果 —
当你击晕一名敌人时，有 {#}% 几率从其身上放出 {#} 枚电荷弹。`,
		id: 16,
		maxPoints: 5,
		values: [ "40", "25", "5", "17" ],
		extraValues: [ "40", "3" ],
		x: 133.995,
		y: 322.79
	},
	"强化电荷弹": {
		baseSkill: "电荷弹",
		connections: [ "电荷弹", "强效电荷弹", "毁灭电荷弹" ],
		description: `使用同一次技能施放的电荷弹命中一个敌人至少 {#} 次，会释放闪电新星，对附近的敌人造成 {#} 点伤害。

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 17,
		maxPoints: 1,
		values: [ "3", "15" ],
		x: 198.23,
		y: 523.06
	},
	"强效电荷弹": {
		baseSkill: "电荷弹",
		connections: [ "强化电荷弹" ],
		description: `电荷弹对昏迷的敌人造成的伤害提高 {#}%

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 18,
		maxPoints: 1,
		values: [ "25" ],
		x: 92.625,
		y: 636.325
	},
	"毁灭电荷弹": {
		baseSkill: "电荷弹",
		connections: [ "强化电荷弹" ],
		description: `用电荷弹命中一名敌人会使其造成的伤害降低 {#}%，持续 {#} 秒。

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 19,
		maxPoints: 1,
		values: [ "20", "3" ],
		x: 384.92,
		y: 599.82
	},
	"冰霜球": {
		connections: [ "核心", "强化冰霜球" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
施放一颗冰球，冻伤敌人 {#}，并放出尖锐碎片，造成总计 {#} 点伤害。冰霜球会在持续时间结束后爆炸，造成 {#} 点伤害，并冻伤敌人 {#}

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.

— 附魔效果 —
每当你施放非基础技能时，有 {#}% 几率向一名附近的敌人发射一颗冰霜球`,
		id: 20,
		maxPoints: 5,
		values: [ "40", "20", "34", "32", "29", "9" ],
		extraValues: [ "20" ],
		x: -639.26,
		y: -93.76
	},
	"强化冰霜球": {
		baseSkill: "冰霜球",
		connections: [ "毁灭冰霜球", "强效冰霜球", "冰霜球" ],
		description: `法力大于 {#} 点时，施放的冰霜球爆炸伤害提高 {#}%

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		id: 21,
		maxPoints: 1,
		values: [ "50", "30" ],
		x: -965.455,
		y: -151.935
	},
	"毁灭冰霜球": {
		baseSkill: "冰霜球",
		connections: [ "强化冰霜球" ],
		description: `冰霜球爆炸命中一名冻结的敌人时恢复 {#} 点法力。

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		id: 22,
		maxPoints: 1,
		values: [ "5" ],
		x: -1219.085,
		y: -125.825
	},
	"强效冰霜球": {
		baseSkill: "冰霜球",
		connections: [ "强化冰霜球" ],
		description: `冰霜球爆炸时有 {#}% 几率使命中的所有敌人陷入易伤状态，持续 {#} 秒。冰霜球总是会使冻结的敌人陷入易伤状态。

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		id: 23,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: -1066.555,
		y: -284.32
	},
	"焚烧": {
		connections: [ "核心", "强化焚烧" ],
		description: `法力消耗：{#} 每秒
幸运一击几率：{#}%
引导一道火焰射线燃烧敌人，每秒造成 {#} 点伤害。在 {#} 秒内，伤害每秒都会提高，最多 {#}点。

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.

— 附魔效果 —
每{c_number}{SF_0}{/c}秒，召唤一条蛇并{c_important}焚烧{/c}敌人，持续{c_number}{SF_1}{/c}秒`,
		id: 24,
		maxPoints: 5,
		values: [ "20", "40", "36", "4", "49%" ],
		extraValues: [ "20", "6" ],
		x: 0.845,
		y: -304.65
	},
	"强化焚烧": {
		baseSkill: "焚烧",
		connections: [ "焚烧", "毁灭焚烧", "强效焚烧" ],
		description: `在引导焚烧时，你会燃烧附近的敌人，每秒造成伤害，相当于焚烧的 {#}%

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		id: 25,
		maxPoints: 1,
		values: [ "15" ],
		x: -0.58,
		y: -500.805
	},
	"毁灭焚烧": {
		baseSkill: "焚烧",
		connections: [ "强化焚烧" ],
		description: `敌人因焚烧而燃烧时，其造成的伤害降低 {#}%

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		id: 26,
		maxPoints: 1,
		values: [ "20" ],
		x: -137.58,
		y: -608.375
	},
	"强效焚烧": {
		baseSkill: "焚烧",
		connections: [ "强化焚烧" ],
		description: `每隔 {#} 秒，会有一名被焚烧命中的敌人被定身 {#} 秒。

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		id: 27,
		maxPoints: 1,
		values: [ "4", "1" ],
		x: 144.77,
		y: -607.315
	},
	"火球": {
		connections: [ "核心", "强化火球" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
施放一团会爆炸的火焰，对周围的敌人造成 {#} 点伤害。

Tags: Core, Pyromancy, Damage, Fire, Mana.

— 附魔效果 —
当你消灭一名敌人时会使其爆炸成火球，造成其伤害的 {#}%`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33", "60" ],
		extraValues: [ "50" ],
		x: -363.79,
		y: -251.52
	},
	"强化火球": {
		baseSkill: "火球",
		connections: [ "火球", "强效火球", "毁灭火球" ],
		description: `火球的半径随行进距离扩大，最高可增加 {#}%

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		id: 29,
		maxPoints: 1,
		values: [ "50" ],
		x: -597.17,
		y: -411.325
	},
	"强效火球": {
		baseSkill: "火球",
		connections: [ "强化火球" ],
		description: `火球造成额外直接伤害，数值相当于你已对敌人施加的燃烧伤害的 {#}%

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		id: 30,
		maxPoints: 1,
		values: [ "10" ],
		x: -851.105,
		y: -424.01
	},
	"毁灭火球": {
		baseSkill: "火球",
		connections: [ "强化火球" ],
		description: `火球爆炸的暴击伤害提高 {#}% 。每命中一名敌人，该加成都会提高 {#}% ，总计提高最多 {#}%

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		id: 31,
		maxPoints: 1,
		values: [ "10", "5", "25" ],
		x: -599.05,
		y: -541.025
	},
	"连锁闪电": {
		connections: [ "核心", "强化连锁闪电" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
施放一道闪电，造成 {#} 点伤害，并最多在你和附近敌人之间连锁弹跳 {#} 次，目标优先选择敌人。

Tags: Core, Shock, Damage, Lightning, Mana.

— 附魔效果 —
消耗 {#} 点法力后自动施放连锁闪电`,
		id: 32,
		maxPoints: 5,
		values: [ "35", "25", "42", "6" ],
		extraValues: [ "100" ],
		x: -205.425,
		y: 323.95
	},
	"强化连锁闪电": {
		baseSkill: "连锁闪电",
		connections: [ "连锁闪电", "强效连锁闪电", "毁灭连锁闪电" ],
		description: `连锁闪电每次弹跳，暴击几率提高 {#}%

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 33,
		maxPoints: 1,
		values: [ "3" ],
		x: -357.145,
		y: 505.675
	},
	"强效连锁闪电": {
		baseSkill: "连锁闪电",
		connections: [ "强化连锁闪电" ],
		description: `如果连锁闪电从你身上跳走，其下一跳造成的伤害提高 {#}%

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 34,
		maxPoints: 1,
		values: [ "25" ],
		x: -579.895,
		y: 551.75
	},
	"毁灭连锁闪电": {
		baseSkill: "连锁闪电",
		connections: [ "强化连锁闪电" ],
		description: `连锁闪电暴击时，有 {#}% 几率生成一个爆裂电花。

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 35,
		maxPoints: 1,
		values: [ "25" ],
		x: -298.86,
		y: 634.625
	},
	"寒冰碎片": {
		connections: [ "核心", "强化寒冰碎片" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
射出 {#} 枚冰片，每枚造成 {#} 点伤害。对冻结的敌人造成的伤害提高 {#}%

Tags: Core, Frost, Frozen, Damage, Cold, Mana.

— 附魔效果 —
自动召唤寒冰碎片，并使其飞向冻结的敌人。`,
		id: 36,
		maxPoints: 5,
		values: [ "30", "25", "5", "25", "25" ],
		x: -639.885,
		y: 87.015
	},
	"强化寒冰碎片": {
		baseSkill: "寒冰碎片",
		connections: [ "寒冰碎片", "强效寒冰碎片", "毁灭寒冰碎片" ],
		description: `寒冰碎片有 {#}% 几率弹射向其他敌人。射向冻结敌人的寒冰碎片总是会弹射。

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		id: 37,
		maxPoints: 1,
		values: [ "15" ],
		x: -971.225,
		y: 141.315
	},
	"强效寒冰碎片": {
		baseSkill: "寒冰碎片",
		connections: [ "强化寒冰碎片" ],
		description: `当你有激活的屏障时，寒冰碎片可以将敌人视作冻结状态。

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		id: 38,
		maxPoints: 1,
		x: -1226.59,
		y: 115.585
	},
	"毁灭寒冰碎片": {
		baseSkill: "寒冰碎片",
		connections: [ "强化寒冰碎片" ],
		description: `单次施法中用 {#} 枚寒冰碎片命中一名敌人，会使其陷入易伤状态，持续 {#} 秒。

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		id: 39,
		maxPoints: 1,
		values: [ "5", "2" ],
		x: -1085.695,
		y: 260.63
	},
	"灭绝": {
		power_id: "Power_Sorcerer_Talent_Elemental_T1_N2",
		connections: [ "核心", "元素统御" ],
		description: `你的法力上限提高 {#} 点。

Tags: Mana.`,
		id: 40,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -520.555,
		y: 252.33
	},
	"元素统御": {
		power_id: "Power_Sorcerer_Talent_Elemental_T2_N3",
		connections: [ "灭绝" ],
		description: `法力大于 {#} 点时，你施放的核心技能伤害提高 {#}%

Tags: Mana, Damage, Core.`,
		id: 41,
		maxPoints: 3,
		values: [ "50", "{4/8/12}"],
		x: -856.385,
		y: 406.375
	},
	"强效咒护": {
		power_id: "Power_Sorcerer_Talent_Elemental_T1_N1",
		connections: [ "核心" ],
		description: `施放一个非基础技能后，你获得 {#}% 全元素抗性和 {#}% 的该技能对应的元素抗性，持续 {#} 秒。

Tags: Resistance, Non-Physical.`,
		id: 42,
		maxPoints: 3,
		values: [ "{2/4/6}", "{1/2/3}", "3" ],
		x: 622.72,
		y: 2.07
	},
};

sorcererData["防御"] = {
	"火盾": {
		connections: [ "防御", "强化火盾" ],
		description: `冷却时间：{#} 秒
幸运一击几率：{#}%
用火焰笼罩你的身体，持续 {#} 秒，同时燃烧周围的敌人，每秒造成 {#} 点伤害。

在火盾激活时，你获得免疫

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.

— 附魔效果 —
火盾会在受到致命伤害时自动激活。每 {#} 秒只能触发一次。`,
		id: 43,
		maxPoints: 5,
		values: [ "20", "50", "2", "23" ],
		extraValues: [ "120" ],
		x: -1.14,
		y: -278.29
	},
	"强化火盾": {
		baseSkill: "火盾",
		connections: [ "火盾", "神秘火盾", "微光火盾" ],
		description: `火盾激活时，移动速度提高 {#}%

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		id: 44,
		maxPoints: 1,
		values: [ "25" ],
		x: -4.89,
		y: -490.29
	},
	"神秘火盾": {
		baseSkill: "火盾",
		connections: [ "强化火盾" ],
		description: `火盾激活时，你获得 {#}% 法力消耗减免。

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		id: 45,
		maxPoints: 1,
		values: [ "25" ],
		x: -157.438,
		y: -605.77
	},
	"微光火盾": {
		baseSkill: "火盾",
		connections: [ "强化火盾" ],
		description: `火盾会为你恢复已损失生命的 {#}%

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		id: 46,
		maxPoints: 1,
		values: [ "50" ],
		x: 151.31,
		y: -608.105
	},
	"冰霜新星": {
		connections: [ "防御", "强化冰霜新星" ],
		description: `冷却时间：{#} 秒
使用次数：{#}
充能冷却时间：{#} 秒
释放一股冰霜洪流，冻结周围的敌人，持续 {#} 秒。

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.

— 附魔效果 —
幸运一击：你的召唤魔法技能在命中敌人时有 {#}% 几率释放一次冰霜新星。`,
		id: 47,
		maxPoints: 5,
		values: [ "15", "{{SF_2}}", "{{Recharge Time}}", "2" ],
		extraValues: [ "30" ],
		x: 7.87,
		y: 296.675
	},
	"强化冰霜新星": {
		baseSkill: "冰霜新星",
		connections: [ "冰霜新星", "神秘冰霜新星", "微光冰霜新星" ],
		description: `消灭被冰霜新星冻结的敌人会使其冷却时间缩短 {#} 秒，每次施放最多缩短 {#} 秒。

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		id: 48,
		maxPoints: 1,
		values: [ "2", "6" ],
		x: 9.55,
		y: 507.05
	},
	"神秘冰霜新星": {
		baseSkill: "冰霜新星",
		connections: [ "强化冰霜新星" ],
		description: `冰霜新星会使敌人陷入易伤状态，持续 {#} 秒。对首领提高至 {#} 秒。

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		id: 49,
		maxPoints: 1,
		values: [ "4", "8" ],
		x: -144.443,
		y: 623.882
	},
	"微光冰霜新星": {
		baseSkill: "冰霜新星",
		connections: [ "强化冰霜新星" ],
		description: `冰霜新星每命中一名敌人，都会生成 {#} 点法力。

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		id: 50,
		maxPoints: 1,
		values: [ "4" ],
		x: 165.83,
		y: 624.487
	},
	"寒冰甲": {
		connections: [ "防御", "强化寒冰甲" ],
		description: `冷却时间：{#} 秒
在你周围形成一个由寒冰形成的屏障，持续 {#} 秒，吸收相当于你基础生命 {#}% ({#}) 的伤害。寒冰甲激活时，你造成伤害的 {#}% 会被添加到屏障当中。

Tags: Defensive, Frost, Barrier, Cooldown, Damage.

— 附魔效果 —
被命中时，你有 {#}% 的几率施加寒冰甲。`,
		id: 51,
		maxPoints: 5,
		values: [ "20", "6", "30", "", "10" ],
		extraValues: [ "5" ],
		x: 421.865,
		y: 200.98
	},
	"强化寒冰甲": {
		baseSkill: "寒冰甲",
		connections: [ "寒冰甲", "微光寒冰甲", "神秘寒冰甲" ],
		description: `寒冰甲激活时，你的法力回复速度提高 {#}%

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		id: 52,
		maxPoints: 1,
		values: [ "25" ],
		x: 707.875,
		y: 325.705
	},
	"微光寒冰甲": {
		baseSkill: "寒冰甲",
		connections: [ "强化寒冰甲" ],
		description: `寒冰甲激活时，攻击你的敌人有 {#}% 几率被冻结 {#} 秒。

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		id: 53,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 787.605,
		y: 459.825
	},
	"神秘寒冰甲": {
		baseSkill: "寒冰甲",
		connections: [ "强化寒冰甲" ],
		description: `对易伤状态的敌人造成的伤害会额外为寒冰甲提供 {#}% 的屏障。

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		id: 54,
		maxPoints: 1,
		values: [ "100" ],
		x: 979.38,
		y: 318.55
	},
	"传送术": {
		connections: [ "防御", "强化传送术" ],
		description: `冷却时间：{#} 秒
幸运一击几率：{#}%
化身闪电，不可阻挡，涌向目标位置并在抵达时对附近造成 {#} 点伤害

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.

— 附魔效果 —
闪避被短距离传送术取代，拥有 {#} 秒的冷却时间。`,
		id: 55,
		maxPoints: 5,
		values: [ "11", "40", "25" ],
		extraValues: [ "17.0" ],
		x: 422.375,
		y: -202.015
	},
	"强化传送术": {
		baseSkill: "传送术",
		connections: [ "传送术", "神秘传送术", "微光传送术" ],
		description: `传送术每命中一名敌人，其冷却时间就会缩短 {#} 秒，最多缩短 {#} 秒。

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		id: 56,
		maxPoints: 1,
		values: [ "0.5", "3" ],
		x: 707.335,
		y: -346.205
	},
	"神秘传送术": {
		baseSkill: "传送术",
		connections: [ "强化传送术" ],
		description: `使用传送术后的 {#} 秒内，爆裂电花额外命中 {#} 名敌人。

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		id: 57,
		maxPoints: 1,
		values: [ "4", "2" ],
		x: 742.975,
		y: -485.9
	},
	"微光传送术": {
		baseSkill: "传送术",
		connections: [ "强化传送术" ],
		description: `传送后，你获得 {#}% 的伤害减免，持续 {#} 秒。

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		id: 58,
		maxPoints: 1,
		values: [ "30", "5" ],
		x: 967.73,
		y: -351.155
	},
	"元素调和": {
		power_id: "Power_Sorcerer_Talent_Elemental_T2_N2",
		connections: [ "防御" ],
		description: `幸运一击：暴击有 {#}% 几率重置你的一个防御技能的冷却时间。该效果每 {#} 秒只能触发一次。

Tags: Defensive, Lucky Hit, Critical Strikes, Cooldown.`,
		id: 59,
		maxPoints: 3,
		values: [ "{5/10/15}", "10" ],
		x: -615.154,
		y: 1.335
	},
	"玻璃大炮": {
		power_id: "Power_Sorcerer_Talent_Elemental_T2_N1",
		connections: [ "防御" ],
		description: `你造成的伤害提高 {#}%，但受到的伤害提高 {#}%

Tags: Damage.`,
		id: 60,
		maxPoints: 3,
		values: [ "{6/12/18}", "{3/6/9}" ],
		x: 630.605,
		y: 0.56
	},
};

sorcererData["召唤魔法"] = {
	"多头蛇": {
		power_id: "Power_Sorcerer_Hydra",
		connections: [ "召唤魔法", "强化多头蛇" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
召唤一只有 {#} 个头的多头蛇，持续 {#} 秒。每个头都会对敌人喷吐火焰，造成 {#} 点伤害。

同一时间最多可激活 {#} 只多头蛇。

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.

— 附魔效果 —
消耗 {#} 点法力后，召唤一只拥有 {#} 个头的多头蛇，持续 {#} 秒。`,
		id: 61,
		maxPoints: 5,
		values: [ "20", "77", "3", "12.0", "30", "1" ],
		extraValues: [ "300", "5", "5" ],
		x: 6.92,
		y: -281.666
	},
	"强化多头蛇": {
		baseSkill: "多头蛇",
		connections: [ "多头蛇", "祈法多头蛇", "召唤多头蛇" ],
		description: `处于健康状态时，你的多头蛇额外获得 {#} 个头。

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		id: 62,
		maxPoints: 1,
		values: [ "1" ],
		x: 6.62,
		y: -486.715
	},
	"祈法多头蛇": {
		baseSkill: "多头蛇",
		connections: [ "强化多头蛇" ],
		description: `在你暴击后，你的多头蛇的暴击几率提高 {#}%，持续 {#} 秒。

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		id: 63,
		maxPoints: 1,
		values: [ "30", "3" ],
		x: 158.38,
		y: -596.294
	},
	"召唤多头蛇": {
		baseSkill: "多头蛇",
		connections: [ "强化多头蛇" ],
		description: `多头蛇还会使敌人燃烧，在 {#} 秒内造成其基础伤害 {#}% 的额外伤害。

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		id: 64,
		maxPoints: 1,
		values: [ "6", "12" ],
		x: -145.46,
		y: -594.569
	},
	"冰刃": {
		connections: [ "召唤魔法", "强化冰刃" ],
		description: `冷却时间：{#} 秒
幸运一击几率：{#}%
召唤一对存在 {#} 秒的冰刃，迅速劈砍敌人，造成 {#} 点伤害并有 {#}% 几率使其陷入易伤状态，持续 {#} 秒。

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.

— 附魔效果 —
每度过 {#} 秒的冷却时间，你就会对随机敌人召唤一把 {#} 冰刃。`,
		id: 65,
		maxPoints: 5,
		values: [ "12", "71", "6.0", "31", "30", "2" ],
		extraValues: [ "20" ],
		x: -533.46,
		y: -0.359
	},
	"强化冰刃": {
		baseSkill: "冰刃",
		connections: [ "冰刃", "召唤冰刃", "祈法冰刃" ],
		description: `冰刃每次命中一个易伤敌人，其冷却时间缩短 {#} 秒。

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		id: 66,
		maxPoints: 1,
		values: [ "1" ],
		x: -898.675,
		y: -0.442
	},
	"召唤冰刃": {
		baseSkill: "冰刃",
		connections: [ "强化冰刃" ],
		description: `强化冰刃的 {#}% 的冷却时间缩减会应用到你的其他技能上。

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		id: 67,
		maxPoints: 1,
		values: [ "50" ],
		x: -1089.415,
		y: 85.628
	},
	"祈法冰刃": {
		baseSkill: "冰刃",
		connections: [ "强化冰刃" ],
		description: `每有一个激活的冰刃，你的冰刃的攻击速度就会提高 {#}%

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		id: 68,
		maxPoints: 1,
		values: [ "10" ],
		x: -1080.445,
		y: -89.709
	},
	"闪电矛": {
		connections: [ "召唤魔法", "强化闪电矛" ],
		description: `冷却时间：{#} 秒
幸运一击几率：{#}%
召唤一支搜寻敌人的闪电矛，持续 {#} 秒，每次命中造成 {#} 点伤害。

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.

— 附魔效果 —
吸收爆裂电花有 {#}% 的几率召唤一柄闪电矛。`,
		id: 69,
		maxPoints: 5,
		values: [ "20", "35", "6.0", "15" ],
		extraValues: [ "10" ],
		x: -413.195,
		y: 220.974
	},
	"强化闪电矛": {
		baseSkill: "闪电矛",
		connections: [ "闪电矛", "召唤闪电矛", "祈法闪电矛" ],
		description: `造成暴击后，闪电矛在持续时间内叠加暴击的几率提高 {#}%

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		id: 70,
		maxPoints: 1,
		values: [ "5" ],
		x: -685.66,
		y: 367.663
	},
	"召唤闪电矛": {
		baseSkill: "闪电矛",
		connections: [ "强化闪电矛" ],
		description: `拾取爆裂电花会使你施放的下一个闪电矛造成的伤害提高 {#}%，最多提高 {#}%

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		id: 71,
		maxPoints: 1,
		values: [ "20", "100" ],
		x: -931.92,
		y: 378.401
	},
	"祈法闪电矛": {
		baseSkill: "闪电矛",
		connections: [ "强化闪电矛" ],
		description: `闪电矛会在暴击时击晕敌人 {#} 秒。

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		id: 72,
		maxPoints: 1,
		values: [ "2" ],
		x: -732.94,
		y: 495.95
	},
	"召唤魔法精通": {
		power_id: "Power_Sorcerer_Talent_02",
		connections: [ "召唤魔法" ],
		description: `每有一个激活的召唤魔法，你造成的伤害提高 {#}%

Tags: Lucky Hit, Conjuration.`,
		id: 73,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: -1.85,
		y: 301.34
	},
	"精准魔法": {
		power_id: "Power_Sorcerer_Talent_03",
		connections: [ "召唤魔法" ],
		description: `你的幸运一击几率提高 {#}%

Tags: Lucky Hit.`,
		id: 74,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -449.215,
		y: -240.001
	},
	"元素协调": {
		power_id: "Power_Sorcerer_Talent_Elemental_T1_N3",
		connections: [ "法力护盾", "召唤魔法", "魔法防护" ],
		description: `当你对战精英怪且未受到其伤害时，每秒获得 {#}% 伤害减免，最多获得 {#}%

Tags: Damage Reduction, Elite Monsters.`,
		id: 75,
		maxPoints: 3,
		values: [ "{5/10/15}", "50" ],
		x: 532.58,
		y: 0.059
	},
	"法力护盾": {
		power_id: "Power_Sorcerer_Talent_06",
		connections: [ "元素协调" ],
		description: `你每消耗 {#} 点法力，就会获得 {#}% 的伤害减免，持续秒。

Tags: Mana, Damage Reduction.`,
		id: 76,
		maxPoints: 3,
		values: [ "100", "{5/10/15}", "5" ],
		x: 836.363,
		y: -77.321
	},
	"魔法防护": {
		power_id: "Power_Sorcerer_Talent_07",
		connections: [ "元素协调" ],
		description: `使用有冷却时间的技能可以获得一层相当于生命上限 {#}% 的屏障，持续 {#} 秒。

Tags: Barrier, Cooldown.`,
		id: 77,
		maxPoints: 3,
		values: [ "{10/20/30}", "", "5" ],
		x: 834.832,
		y: 80.406
	},
};

sorcererData["掌控"] = {
	"陨石术": {
		connections: [ "掌控", "强化陨石术" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
召唤一颗陨石打击目标位置，造成 {#} 点伤害并使地面燃烧，在 {#} 秒内造成 {#} 点伤害。

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.

— 附魔效果 —
幸运一击：有 {#}% 几率对敌人施放陨石术。`,
		id: 78,
		maxPoints: 5,
		values: [ "40", "40", "50", "3", "35" ],
		extraValues: [ "3" ],
		x: 601.53,
		y: -220.475
	},
	"强化陨石术": {
		baseSkill: "陨石术",
		connections: [ "陨石术", "法师陨石术", "巫师陨石术" ],
		description: `如果陨石术命中 {#} 名或更多敌人，有 {#}% 几率对同一位置额外施放一次陨石术。

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		id: 79,
		maxPoints: 1,
		values: [ "3", "30" ],
		x: 915.055,
		y: -337.375
	},
	"法师陨石术": {
		baseSkill: "陨石术",
		connections: [ "强化陨石术" ],
		description: `陨石术坠落速度加快 {#}%

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		id: 80,
		maxPoints: 1,
		values: [ "30" ],
		x: 1174.005,
		y: -328.576
	},
	"巫师陨石术": {
		baseSkill: "陨石术",
		connections: [ "强化陨石术" ],
		description: `陨石术命中时会使敌人定身 {#} 秒。

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		id: 81,
		maxPoints: 1,
		values: [ "2" ],
		x: 991.17,
		y: -462.803
	},
	"暴风雪": {
		connections: [ "掌控", "强化暴风雪" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
召唤一阵冰冷的暴风雪，造成 {#} 点伤害并在 {#} 秒内持续冻伤敌人 {#}%

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.

— 附魔效果 —
每过 {#} 秒，在头顶汇聚一阵暴风雪并跟随你移动，持续 {#} 秒。`,
		id: 82,
		maxPoints: 5,
		values: [ "40", "33", "120", "8", "18" ],
		extraValues: [ "15", "4" ],
		x: 300.64,
		y: -339.596
	},
	"强化暴风雪": {
		baseSkill: "暴风雪",
		connections: [ "暴风雪", "法师暴风雪", "巫师暴风雪" ],
		description: `暴风雪对被冻结敌人造成的伤害提高 {#}%

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		id: 83,
		maxPoints: 1,
		values: [ "25" ],
		x: 447.585,
		y: -525.399
	},
	"法师暴风雪": {
		baseSkill: "暴风雪",
		connections: [ "强化暴风雪" ],
		description: `法力大于 {#} 点时，施放的暴风雪持续时间延长 {#} 秒。

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		id: 84,
		maxPoints: 1,
		values: [ "50", "4" ],
		x: 402.595,
		y: -654.156
	},
	"巫师暴风雪": {
		baseSkill: "暴风雪",
		connections: [ "强化暴风雪" ],
		description: `当你有激活的暴风雪时，你的核心技能消耗的法力降低 {#}%

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		id: 85,
		maxPoints: 1,
		values: [ "10" ],
		x: 675.015,
		y: -585
	},
	"球状闪电": {
		connections: [ "掌控", "强化球状闪电" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
放出一个向前缓慢移动的闪电球持续电击敌人，造成 {#} 点伤害。

Tags: Mastery, Shock, Damage, Lightning, Mana.

— 附魔效果 —
幸运一击：暴击有 {#}% 的几率形成一团球状闪电。`,
		id: 86,
		maxPoints: 5,
		values: [ "50", "20", "18" ],
		extraValues: [ "25" ],
		x: 274.81,
		y: 344.08
	},
	"强化球状闪电": {
		baseSkill: "球状闪电",
		connections: [ "球状闪电", "巫师球状闪电", "法师球状闪电" ],
		description: `球状闪电造成伤害的速度提高，程度相当于你攻击速度加成的 {#}%

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		id: 87,
		maxPoints: 1,
		values: [ "200" ],
		x: 431.875,
		y: 536.465
	},
	"巫师球状闪电": {
		baseSkill: "球状闪电",
		connections: [ "强化球状闪电" ],
		description: `如果一名敌人被单次球状闪电命中至少 {#} 次，生成一个爆裂电花。该效果每次施法只能触发一次。

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		id: 88,
		maxPoints: 1,
		values: [ "4" ],
		x: 399.115,
		y: 661.625
	},
	"法师球状闪电": {
		baseSkill: "球状闪电",
		connections: [ "强化球状闪电" ],
		description: `球状闪电命中近距敌人 {#} 次后，你下一次施放会击晕其命中的敌人 {#} 秒。

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		id: 89,
		maxPoints: 1,
		values: [ "50", "1" ],
		x: 656.41,
		y: 586.43
	},
	"心灵之火": {
		power_id: "Power_Sorcerer_Talent_Fire_T1_N2",
		connections: [ "掌控", "致残烈焰", "吞噬烈焰" ],
		description: `健康状态下，你的爆焰技能造成的伤害提高 {#}%

Tags: Healthy, Pyromancy, Damage.`,
		id: 90,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 594.325,
		y: 0.68
	},
	"致残烈焰": {
		power_id: "Power_Sorcerer_Talent_08",
		connections: [ "心灵之火" ],
		description: `幸运一击：你的爆焰技能有 {#}% 几率使敌人定身 {#} 秒。该几率在你处于健康状态时翻倍。

Tags: Healthy, Lucky Hit, Crowd Control, Pyromancy.`,
		id: 132,
		maxPoints: 3,
		values: [ "5", "2" ],
		x: 884.67,
		y: 83.63
	},
	"吞噬烈焰": {
		power_id: "Power_Sorcerer_Talent_Fire_T2_N3",
		connections: [ "心灵之火" ],
		description: `你对燃烧的敌人造成的暴击伤害提高 {#}%，如果该敌人还被定身，则该加成提高至 {#}%

Tags: Damage, Burn, Critical Strikes, Crowd Control.`,
		id: 133,
		maxPoints: 3,
		values: [ "10", "25" ],
		x: 882.995,
		y: -75.715
	},
	"静电释能": {
		power_id: "Power_Sorcerer_Talent_Lightning_T1_N2",
		connections: [ "激发导体", "电冲震击", "掌控" ],
		description: `幸运一击：电冲技能暴击时，有最高 {#}% 几率生成一个爆裂电花。

Tags: Crackling Energy, Shock, Lucky Hit, Critical Strikes.`,
		id: 94,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -133.43,
		y: 371.055
	},
	"激发导体": {
		power_id: "Power_Sorcerer_Talent_09",
		connections: [ "静电释能" ],
		description: `吸收爆裂电花时，你会获得 {#} 点法力。

Tags: Crackling Energy, Mana.`,
		id: 134,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 4.47,
		y: 508.795
	},
	"电冲震击": {
		power_id: "Power_Sorcerer_Talent_Lightning_T2_N1",
		connections: [ "静电释能" ],
		description: `每次你击晕一名敌人，都会对其造成 {#} 点闪电伤害。

Tags: Shock, Damage, Crowd Control, Lightning.`,
		id: 95,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -280.938,
		y: 509
	},
	"寒冰帷幕": {
		power_id: "Power_Sorcerer_Talent_Cold_T1_N1",
		connections: [ "掌控", "急速冻结", "冰冷之锋" ],
		description: `你的屏障持续时间延长 {#}%

Tags: Barrier.`,
		id: 96,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -141.488,
		y: -351.513
	},
	"急速冻结": {
		power_id: "Power_Sorcerer_Talent_Cold_T1_N2",
		connections: [ "寒冰帷幕" ],
		description: `幸运一击：冰霜技能有 {#}% 几率立即冻结敌人。

Tags: Frozen, Lucky Hit, Crowd Control, Frost.`,
		id: 135,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 2.725,
		y: -507.73
	},
	"冰冷之锋": {
		power_id: "Power_Sorcerer_Talent_Cold_T2_N1",
		connections: [ "寒冰帷幕" ],
		description: `当你有激活的屏障时，你施加的冻伤提高 {#}%

Tags: Barrier, Chill, Crowd Control.`,
		id: 98,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: -276.711,
		y: -506.953
	},
	"火墙": {
		connections: [ "掌控", "强化火墙" ],
		description: `法力消耗：{#}
幸运一击几率：{#}%
制造一道烈焰墙使敌人燃烧，在 {#} 秒内造成 {#} 点伤害。

Tags: Mastery, Pyromancy, Damage, Burn, Mana.

— 附魔效果 —
每次敌人受到燃烧伤害时，都有 {#}% 几率在其脚下召唤2道火墙，持续 {#} 秒。`,
		id: 99,
		maxPoints: 5,
		values: [ "30", "40", "8", "160" ],
		extraValues: [ "5", "3" ],
		x: 592.435,
		y: 224.3
	},
	"强化火墙": {
		baseSkill: "火墙",
		connections: [ "火墙", "巫师火墙", "法师火墙" ],
		description: `你对站在火墙内的敌人造成的火焰伤害提高 {#}%

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		id: 100,
		maxPoints: 1,
		values: [ "25" ],
		x: 905.955,
		y: 347.945
	},
	"巫师火墙": {
		baseSkill: "火墙",
		connections: [ "强化火墙" ],
		description: `每道激活的火墙都会使你的法力回复速度提高 {#}%，最多提高 {#}%

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		id: 101,
		maxPoints: 1,
		values: [ "5", "25" ],
		x: 998.24,
		y: 479.99
	},
	"法师火墙": {
		baseSkill: "火墙",
		connections: [ "强化火墙" ],
		description: `敌人离开火墙后会继续燃烧 {#} 秒。

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		id: 102,
		maxPoints: 1,
		values: [ "3" ],
		x: 1170.415,
		y: 343.18
	},
};

sorcererData["终极技能"] = {
	"炼狱烈焰": {
		connections: [ "终极技能", "至尊炼狱烈焰" ],
		description: `冷却时间：{#}
幸运一击几率：{#}%
召唤一条不断向目标区域收紧的火蛇，在 {#} 秒内燃烧敌人，造成 {#} 点伤害。

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		id: 103,
		maxPoints: 1,
		values: [ "45", "38", "8", "295" ],
		x: -526.72,
		y: -71.235
	},
	"至尊炼狱烈焰": {
		baseSkill: "炼狱烈焰",
		connections: [ "炼狱烈焰", "至极炼狱烈焰" ],
		description: `炼狱烈焰会不断将敌人牵引向其中心

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		id: 104,
		maxPoints: 1,
		x: -866.555,
		y: -183.635
	},
	"至极炼狱烈焰": {
		baseSkill: "炼狱烈焰",
		connections: [ "至尊炼狱烈焰" ],
		description: `炼狱烈焰激活期间，你的爆焰技能不消耗法力。

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		id: 105,
		maxPoints: 1,
		x: -1163.615,
		y: -183.18
	},
	"不稳电流": {
		connections: [ "至尊不稳电流", "终极技能" ],
		description: `冷却时间：{#} 秒
闪电在你体内涌动，持续 {#} 秒。每当你施放电冲技能时，也会随机施放一个核心、召唤魔法或精通电冲技能。

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		id: 106,
		maxPoints: 1,
		values: [ "70", "10" ],
		x: -347.8,
		y: 279.81
	},
	"至尊不稳电流": {
		baseSkill: "不稳电流",
		connections: [ "不稳电流", "至极不稳电流" ],
		description: `不稳电流激活时，你的攻击速度提高 {#}%

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		id: 107,
		maxPoints: 1,
		values: [ "25" ],
		x: -568.77,
		y: 433.255
	},
	"至极不稳电流": {
		baseSkill: "不稳电流",
		connections: [ "至尊不稳电流" ],
		description: `不稳电流激活时，爆裂电花持续脉冲而不消耗充能。

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		id: 108,
		maxPoints: 1,
		x: -571.55,
		y: 596.365
	},
	"深度冻结": {
		connections: [ "至尊深度冻结", "终极技能" ],
		description: `冷却时间：{#}
幸运一击几率：{#}%
用冰块包裹自己，获得免疫，持续 {#} 秒，持续造成 {#} 点伤害并冻伤敌人 {#}%
深度冻结结束时，额外造成 {#} 点伤害。

再次施放深度冻结会提前结束技能效果。

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		id: 109,
		maxPoints: 1,
		values: [ "60", "5", "4", "13", "20", "100" ],
		x: -377.345,
		y: -274.565
	},
	"至尊深度冻结": {
		baseSkill: "深度冻结",
		connections: [ "深度冻结", "至极深度冻结" ],
		description: `深度冻结结束时，技能激活期间每冻结一个敌人，获得一层相当于你 {#}% 的基础生命({#})的屏障，持续 {#} 秒。

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		id: 110,
		maxPoints: 1,
		values: [ "10", "", "6" ],
		x: -592.28,
		y: -430.76
	},
	"至极深度冻结": {
		baseSkill: "深度冻结",
		connections: [ "至尊深度冻结" ],
		description: `深度冻结结束时，你的非终极技能冷却时间缩短 {#}%

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		id: 111,
		maxPoints: 1,
		values: [ "50" ],
		x: -590.745,
		y: -581.04
	},
	"永冻之霜": {
		power_id: "Power_Sorcerer_Talent_Cold_T2_N2",
		connections: [ "寒霜之灾", "终极技能", "寒冰之触" ],
		description: `冰霜技能对精英怪造成的伤害提高 {#}%

Tags: Elite Monsters, Damage, Frost.`,
		id: 113,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -3.97,
		y: -277.33
	},
	"寒霜之灾": {
		power_id: "Power_Sorcerer_Talent_01",
		connections: [ "永冻之霜", "凛冽寒风" ],
		description: `你对冻伤的敌人造成的伤害提高 {#}%，对冻结的敌人造成的伤害提高 {#}%

Tags: Chill, Frozen, Damage, Crowd Control.`,
		id: 136,
		maxPoints: 3,
		values: [ "{3/6/9}", "{6/12/18}" ],
		x: -195.39,
		y: -421.43
	},
	"凛冽寒风": {
		power_id: "Power_Sorcerer_Talent_05",
		connections: [ "寒霜之灾", "寒冰之触" ],
		description: `幸运一击：对易伤敌人造成冰霜伤害有 {#}% 几率生成 {#} 点法力。

Tags: Vulnerable, Cold, Lucky Hit, Mana.`,
		id: 137,
		maxPoints: 3,
		values: [ "{20/40/60}", "5" ],
		x: -5.22,
		y: -581.655
	},
	"寒冰之触": {
		power_id: "Power_Sorcerer_Talent_Cold_T2_N3",
		connections: [ "永冻之霜", "凛冽寒风" ],
		description: `你对易伤敌人造成的冰霜伤害提高{#}%

Tags: Vulnerable, Cold, Damage.`,
		id: 115,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 180.41,
		y: -421.81
	},
	"电流贯通": {
		power_id: "Power_Sorcerer_Talent_Lightning_T1_N1",
		connections: [ "电刑", "导电", "终极技能" ],
		description: `电冲技能命中敌人会使你的暴击几率提高 {#}%，打出暴击会重置该加成。

Tags: Critical Strikes, Shock.`,
		id: 116,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: 2.03,
		y: 287.38
	},
	"电刑": {
		power_id: "Power_Sorcerer_Talent_Lightning_T2_N3",
		connections: [ "电流贯通", "电击惊厥" ],
		description: `敌人被你的电冲技能暴击后，其造成的伤害降低 {#}%，持续 {#} 秒。

Tags: Critical Strikes, Damage Reduction, Shock.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}", "5" ],
		x: 201.78,
		y: 435.59
	},
	"电击惊厥": {
		power_id: "Power_Sorcerer_Talent_Lightning_T2_N2",
		connections: [ "导电", "电刑" ],
		description: `幸运一击：电冲技能有 {#}% 几率击晕敌人 {#} 秒。

Tags: Shock, Lucky Hit, Crowd Control.`,
		id: 118,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 3.66,
		y: 604.95
	},
	"导电": {
		power_id: "Power_Sorcerer_Talent_10",
		connections: [ "电流贯通", "电击惊厥" ],
		description: `电冲技能暴击会使你的移动速度提高 {#} %，持续 {#} 秒。

Tags: Shock, Critical Strikes, Movement.`,
		id: 119,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: -191.455,
		y: 436.8
	},
	"烈焰汹涌": {
		power_id: "Power_Sorcerer_Talent_04",
		connections: [ "火葬不熄", "灵魂之火", "终极技能" ],
		description: `消灭一名燃烧的敌人可以使你的法力回复速度提高 {#}%，持续 {#} 秒。

Tags: Burn, Mana.`,
		id: 123,
		maxPoints: 3,
		values: [ "{10/20/30}", "3" ],
		x: -533.615,
		y: 98.915
	},
	"火葬不熄": {
		power_id: "Power_Sorcerer_Talent_Fire_T2_N2",
		connections: [ "急性高热", "烈焰汹涌" ],
		description: `敌人每燃烧一秒，你对其造成的燃烧伤害都会提高，最多在 {#} 秒后提高 {#}%

Tags: Burn, Damage.`,
		id: 121,
		maxPoints: 3,
		values: [ "5", "{5/10/15}"],
		x: -863.88,
		y: 204.975
	},
	"急性高热": {
		power_id: "Power_Sorcerer_Talent_Fire_T2_N1",
		connections: [ "灵魂之火", "火葬不熄" ],
		description: `每隔 {#} 秒，附近每有一名燃烧的敌人，可以为你恢复生命上限的 {#}%({#}) 。敌人为首领时治疗效果提高至 {#}%

Tags: Healing, Burn.`,
		id: 138,
		maxPoints: 3,
		values: [ "1", "{0.3/0.6/0.9}", "", "{0.6/1.2/1.8}" ],
		x: -1162.135,
		y: 102.405
	},
	"灵魂之火": {
		power_id: "Power_Sorcerer_Talent_Fire_T1_N1",
		connections: [ "急性高热", "烈焰汹涌" ],
		description: `站立不动 {#} 秒后，你的爆焰技能消耗的法力降低 {#}%

Tags: Mana, Pyromancy.`,
		id: 139,
		maxPoints: 3,
		values: [ "1.5", "{5/10/15}" ],
		x: -868.11,
		y: 2.82
	}
};

sorcererData["Capstone"] = {
	"Shatter": {
		connections: [ "Capstone" ],
		description: `After Freeze expires, enemies explode for {#}% of the damage you dealt to them while Frozen.

Tags: Frozen, Crowd Control, Damage.`,
		id: 124,
		maxPoints: 1,
		values: [ "25" ],
		x: -633.197,
		y: 203.26
	},
	"Avalanche": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Your Frost Skills have up to a {#}% chance to make your next cast of Ice Shards, Frozen Orb, or Blizzard consume no Mana and deal x{#}% increased damage. Chance is doubled against Vulnerable enemies.

Tags: Vulnerable, Lucky Hit, Mana, Damage, Frost.`,
		id: 140,
		maxPoints: 1,
		values: [ "10", "40" ],
		x: -636.932,
		y: -2.225
	},
	"Combustion": {
		connections: [ "Capstone" ],
		description: `Your Burning effects deal x{#}% increased damage per unique source of Burning you have applied to the enemy. If the enemy is Burning from {#} or more sources, this bonus is doubled.

Tags: Burn, Damage.`,
		id: 141,
		maxPoints: 1,
		values: [ "2", "3" ],
		x: 633.813,
		y: -3.15
	},
	"Esu's Ferocity": {
		connections: [ "Capstone" ],
		description: `Your Fire Critical Strike Damage is increased by x{#}% against enemies above 50% Life. Your Fire Critical Strike Chance is increased by +{#}% against enemies below 50% Life.

Killing an enemy with a Critical Strike grants both bonuses against all enemies for {#} seconds.

Tags: Damage, Critical Strikes, Life, Fire.`,
		id: 127,
		maxPoints: 1,
		values: [ "25", "5", "3" ],
		x: 637.394,
		y: 202.605
	},
	"Overflowing Energy": {
		connections: [ "Capstone" ],
		description: `Crackling Energy hits {#} additional enemy. Each time Crackling Energy hits an enemy, your Shock Skill Cooldowns are reduced by {#} seconds, increased to {#} seconds against Elites.

Tags: Crackling Energy, Cooldown, Elite Monsters, Damage, Shock.`,
		id: 128,
		maxPoints: 1,
		values: [ "1", "0.1", "0.25" ],
		x: -187.52,
		y: 388.355
	},
	"Vyr's Mastery": {
		connections: [ "Capstone" ],
		description: `Close enemies take x{#}% increased damage from your Shock Skills and deal {#}% less damage to you. Critical Strikes increase these bonuses by {#}% for {#} seconds.

Tags: Shock, Damage, Damage Reduction, Critical Strikes.`,
		id: 129,
		maxPoints: 1,
		values: [ "10", "20", "25", "3" ],
		x: 185.762,
		y: 389.005
	},
};

export { sorcererData };