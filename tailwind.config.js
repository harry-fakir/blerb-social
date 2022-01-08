module.exports = {
  mode: 'jit',
  purge: [
    './src/views/*.vue',
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        'blerb-gray': '#f3f4f6',
      },

    },
    fontFamily: {
      'sans': ['Inter', 'Arial', 'sans-serif'],
      'heading': ['MavenPro', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}
