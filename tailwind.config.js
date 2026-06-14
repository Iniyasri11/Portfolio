export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        primaryPink: '#f9c5d1',
        lightPink: '#fcdde4',
        accentPink: '#f8a1b4',
        backgroundPink: '#fff6f8',
        roseMist: '#fde8ed',
        blushLayer: 'rgba(249, 197, 209, 0.16)',
        transparentRose: 'rgba(248, 161, 180, 0.08)',
      },
      fontFamily: {
        heading: ['Georgia', 'Cambria', "Times New Roman", 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      borderRadius: {
        soft: '1.25rem',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(249, 197, 209, 0.12)',
      },
      backdropBlur: {
        soft: '12px',
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
};
