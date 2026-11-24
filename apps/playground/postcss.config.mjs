// Local webpack reference: the upstream config also runs a custom ESM
// PostCSS plugin that webpack's postcss-loader cannot consume (it requires
// plugin paths as CommonJS modules). Tailwind alone is enough for this
// reference to render; admin CSS scoping is a styling-only concern.
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
