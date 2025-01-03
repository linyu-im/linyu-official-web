import plugin from 'tailwindcss/plugin'

export default {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: {value: '#eef6ff'},
                    100: {value: '#daeaff'},
                    200: {value: '#bddbff'},
                    300: {value: '#92c1fc'},
                    400: {value: '#67afff'},
                    500: {value: '#4c9bff'},
                    600: {value: '#3580fc'},
                    700: {value: '#174ade'},
                    800: {value: '#193db4'},
                    900: {value: '#1a378e'}
                }
            }
        }
    },
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
    ],
}
