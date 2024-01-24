module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s linear infinite'
      }
    }
  },
  plugins: []
}
