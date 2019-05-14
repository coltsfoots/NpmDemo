import FormTablePagination from './index.vue'

export default FormTablePagination

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('vue-simple-synthesize-form', FormTablePagination)
}