import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			include: {
				"fa7-brands": ["*"],
				"fa7-regular": ["*"],
				"fa7-solid": ["*"],
			},
		}),
	],
});
