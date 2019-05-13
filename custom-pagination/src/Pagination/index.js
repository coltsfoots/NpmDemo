import Pagination from './index.vue'

export default Pagination

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('vue-simple-custom-pagination', Pagination)
}