import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	// screens: {
  	// 	sm: '640px',
  	// 	md: '768px',
  	// 	lg: '1024px',
  	// 	xl: '1280px'
  	// },
  	extend: {
  		colors: {
			primary: {
				50: '#f0f9ff',
				100: '#e0f2fe',
				200: '#bae6fd',
				300: '#7dd3fc',
				400: '#38bdf8',
				500: '#0ea5e9',
				600: '#0284c7',
				700: '#0369a1',
				800: '#075985',
				900: '#0c4a6e',
				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				50: '#f5f3ff',
				100: '#ede9fe',
				200: '#ddd6fe',
				300: '#c4b5fd',
				400: '#a78bfa',
				500: '#8b5cf6',
				600: '#7c3aed',
				700: '#6d28d9',
				800: '#5b21b6',
				900: '#4c1d95',
				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
			},
			dark: {
				800: '#1e293b',
				900: '#0f172a'
			},
  			primarycolor: {
  				black: '#1e1e1e',
  				white: '#ffffff',
  				blue: '#5AB2FF',
  				blue1: '#A0DEFF',
  				blue2: '#CAF4FF',
  				blue3: 'rgba(90, 178, 255, 0.1)',
  				blue4: '#117bd9',
  				green2: '#e9fff7',
  				green: '#37cea3',
  				gray: '#838383',
  				gray1: '#5A5A5A ',
  				gray2: 'rgba(131, 131, 131, 0.2)',
  				gray3: 'rgba(131, 131, 131, 0.005)',
  				orange: '#ff5734',
  				purple: '#be94f5',
  				yellow: '#FFF9D0',
  				yellow1: 'rgba(255, 249, 208, 0.6)',
  				purple2: '#F0EFFF',
  				purple3: '#A7A3FF',
				LightGrayishBlue: "#f8fafc"
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
		  animation: {
			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'float': 'float 6s ease-in-out infinite',
			'wave': 'wave 1.5s linear infinite',
			'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
		},
		keyframes: {
			float: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-10px)' },
			},
			wave: {
				'0%': { transform: 'rotate(0deg)' },
				'10%': { transform: 'rotate(14deg)' },
				'20%': { transform: 'rotate(-8deg)' },
				'30%': { transform: 'rotate(14deg)' },
				'40%': { transform: 'rotate(-4deg)' },
				'50%': { transform: 'rotate(10deg)' },
				'60%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(0deg)' },
			}
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
