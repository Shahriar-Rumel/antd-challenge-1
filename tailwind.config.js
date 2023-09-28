module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'black-gradient': `linear-gradient(to right, ${theme(
          'colors.black'
        )}, ${theme('colors.white')})`,
        'yellow-gradient': `linear-gradient(to right, #F6D365, #FDA085)`,
        'green-gradient': `linear-gradient(to right, #57CBAF, #2FA84F)`,
        'blue-gradient': `linear-gradient(to right, #9BAAFA, #367BF5)`,
        'teal-gradient': `linear-gradient(to right, #77A7BC, #1D8989)`,
        'maroon-gradient': `linear-gradient(to right, #80688E, #4F586A)`,
        'red-gradient': `linear-gradient(to right, #F4977B, #F95656)`,
        'orange-gradient': `linear-gradient(to right, #F4977B, #F9567E)`
      }),
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1440px'
      },
      boxShadow: {
        primary: '0px 4px 25px 0px rgba(141, 141, 141, 0.05)',
        secondary: '0px 4px 25px 0px rgba(29, 78, 216, 0.05)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-sherif'],
        sherif: ['Montserrat', 'serif'],
        mono: ['Menlo', 'monospace']
      },
      fontSize: {
        exs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px'
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeight: {
        none: 1,
        shorter: 1.25,
        short: 1.375,
        normal: 1.5,
        tall: 1.625,
        taller: 2
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        'tight-md': '-0.015em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      }
    }
  }
};
