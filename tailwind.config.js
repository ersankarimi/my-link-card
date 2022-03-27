module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#303030',
				'radial-gradient-1': '#A5EFFF',
				'radial-gradient-2': 'rgba(110,191,244,.22)',
				'stroke-radial-gradient-1': '#EABFFF',
				'stroke-radial-gradient-2': 'rgba(135,38,183,.2)',
				'stroke-radial-gradient-1_1': '#98F9FF',
				'stroke-radial-gradient-1_1': 'rgba(255,255,255,.1)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				primary: '-46px 64px 166px rgba(104, 31, 177, 0.76)',
				'shadow-list': '-10px 10px 180px rgba(104, 31, 177, 0.4)',
			},
			backdropBlur: {
				primary: '80px',
			},
		},
	},
	plugins: [],
}
