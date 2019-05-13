import CustomForm from './index.vue'

export default CustomForm

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('vue-simple-custom-form', CustomForm)
}

