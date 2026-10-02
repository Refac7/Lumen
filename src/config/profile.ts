export interface ProfileLink {
	/** 展示名称 */
	name: string;
	/** Iconify 图标名（fa7-brands / fa7-solid / fa7-regular） */
	icon: string;
	/** 目标地址 */
	url: string;
	/** 可选的一行简介 */
	hint?: string;
	/** 分组标题，同组的链接会排在一起 */
	group: string;
}

export interface Profile {
	name: string;
	/** 主标题下方的标语 */
	bio: string;
	/** 顶部徽标文字 */
	badge: string;
	avatar: string;
	/** 主题色相 0-360，与 Firefly 的 hue 一致 */
	hue: number;
	/** 个人介绍段落 */
	about: string[];
	/** 个人标签 */
	tags: string[];
	links: ProfileLink[];
}

export const profile: Profile = {
	name: "Refac7",
	bio: "你与光芒 / You & Radiance",
	badge: "LUMEN · 个人主页",
	avatar: "https://img.refact.cc/base/avatar.jpg",
	hue: 250,
	about: [
		"折腾自建服务与前端开发，把踩过的坑写成技术笔记。",
		"也聊 ACGN 游戏杂谈与生活随想，偶尔做点好看的小东西。",
	],
	tags: ["自建服务", "前端开发", "ACGN", "生活随想"],
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Refac7",
			hint: "github.com/Refac7",
			group: "社交 SOCIAL",
		},
		{
			name: "BiliBili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/441325177",
			hint: "space.bilibili.com/441325177",
			group: "社交 SOCIAL",
		},
		{
			name: "Blog",
			icon: "fa7-regular:pen-to-square",
			url: "https://www.refact.cc/",
			hint: "www.refact.cc",
			group: "站点 SITES",
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "https://www.refact.cc/rss.xml",
			hint: "www.refact.cc/rss.xml",
			group: "站点 SITES",
		},
		{
			name: "Atom",
			icon: "fa7-solid:atom",
			url: "https://www.refact.cc/atom.xml",
			hint: "www.refact.cc/atom.xml",
			group: "站点 SITES",
		},
	],
};
