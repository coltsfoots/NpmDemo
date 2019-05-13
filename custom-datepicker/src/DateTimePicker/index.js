import DateTimePicker from './index.vue'

export default DateTimePicker

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('vue-simple-custom-datepicker', DateTimePicker)
}