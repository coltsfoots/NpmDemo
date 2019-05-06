import CircleProgress from './circle-progress.vue'

export default CircleProgress

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('cz-circle-progress', CircleProgress)
}