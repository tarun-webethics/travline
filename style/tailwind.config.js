tailwind.config = {
   theme: {
      colors: {
         'orange': '#263A29',
         'blue': '#41644A',
         'grey': '#1F2937',
         'lightgrey': '#424242',
         'white': '#ffffff'
      },
      fontFamily: {
         'poppins': ['Poppins', 'sans-serif'],
         'merriweather': ['Merriweather', '-serif'],
      },
      extend: {
         spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
         },
         borderRadius: {
            '4xl': '2rem',
         },
         fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
         },
      },
      container: {
         padding: {
            DEFAULT: '1rem',
            lg: '4rem',
         },
         center: true,
      },
   },
}