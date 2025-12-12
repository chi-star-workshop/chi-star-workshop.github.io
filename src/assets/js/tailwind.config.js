tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Urbanist', 'sans-serif'],
            },
            colors: {
                // Ivory/Paper palette - Subtle warmth
                paper: '#FEFDFB',
                
                // Forest Green palette - Professional & Academic
                forest: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d', // Primary Link/Action
                    800: '#166534', // Darker text
                    900: '#14532d', // Headers
                },
                // Neutral Stone
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    800: '#292524',
                    600: '#57534e',
                }
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: theme('colors.stone.600'),
                        fontFamily: theme('fontFamily.sans'),
                        h1: {
                            fontFamily: theme('fontFamily.sans'),
                            color: theme('colors.forest.900'),
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                        },
                        h2: {
                            fontFamily: theme('fontFamily.sans'),
                            color: theme('colors.forest.900'),
                            fontWeight: '700',
                            borderBottom: `1px solid ${theme('colors.stone.200')}`,
                            paddingBottom: '0.5rem',
                            letterSpacing: '-0.01em',
                        },
                        h3: {
                            fontFamily: theme('fontFamily.sans'),
                            color: theme('colors.forest.800'),
                            fontWeight: '600',
                        },
                        strong: {
                            color: theme('colors.stone.800'),
                            fontWeight: '600',
                        },
                        a: {
                            color: theme('colors.forest.700'),
                            textDecoration: 'none',
                            fontWeight: '600',
                            '&:hover': {
                                textDecoration: 'underline',
                                color: theme('colors.forest.800'),
                            },
                        },
                    },
                },
            }),
        }
    }
}