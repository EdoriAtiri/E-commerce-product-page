export default {
  mount: {
    src: '/public',
    public: '/',
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  plugins: [['@snowpack/plugin-postcss']],
};
