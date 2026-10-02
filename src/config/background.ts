export interface BackgroundConfig {
	/** 桌面端背景图片：public 路径（"/xx"）或远程 URL */
	desktop: string;
	/** 移动端背景图片，留空则复用 desktop */
	mobile?: string;
	/** 高斯模糊半径（px），值越大越柔 */
	blur: number;
	/** 页面底色遮罩强度 0-1，越大越接近纯色 */
	dim: number;
	/** 图片缩放，避免模糊后边缘露白 */
	scale: number;
	/** object-position，与 Firefly banner.position 同义 */
	position: string;
}

export const background: BackgroundConfig = {
	desktop: "/wallpaper.jpg",
	// 远程壁纸示例：
	// desktop: "https://example.com/wallpaper.jpg",
	mobile: "/wallpaper.jpg",
	blur: 64,
	dim: 0.3,
	scale: 1.3,
	position: "0% 20%",
};
