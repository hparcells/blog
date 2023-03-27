// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Hunter's Blog";
export const SITE_DESCRIPTION = "My blog from web development to writing and everything in between.";
export const TWITTER_HANDLE = "@hunterparcells";
export const MY_NAME = "Hunter Parcells";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
