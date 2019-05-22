<template>
	<el-form
		:model="params"
		:inline="inline"
		:ref="formName"
		:label-width="labelWidth ? (labelWidth + 'px') : ''"
		@submit.native.prevent="handleSearch()"
	>
		<el-form-item
			v-for="(form, index) in forms"
			:key="index"
			:prop="form.prop"
			:label="form.label"
			:rules="form.rules || []"
			:label-width="form.labelWidht ? (form.labelWidth + 'px') : ''"
		>
			<el-input
				v-if="form.itemType === 'input' || form.itemType === undefined"
				v-model="params[form.prop]"
				:size="form.size ? form.size : size"
				:readonly="form.readonly"
				:disabled="form.disabled"
				:placeholder="form.placeholder"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
			></el-input>
			<el-select
				v-else-if="form.itemType === 'select'"
				v-model="params[form.prop]"
				:size="form.size ? form.size : size"
				:disabled="form.disabled"
				:placeholder="form.placeholder"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
			>
				<el-option
					v-for="(option, optionIndex) in form.options"
					:key="optionIndex"
					:value="option.value"
					:label="option.label"
				></el-option>
				<el-option
					v-for="(op, opIndex) in selectOptions[selectOptionPrefix + index]"
					:key="opIndex"
					:value="op.value"
					:label="op.label"
				></el-option>
			</el-select>
			<el-date-picker
				v-else-if="form.itemType === 'date'"
				v-model="params[form.prop]"
				type="date"
				format="yyyy年MM月dd日"
				@change="form.changeDate(params[form.prop])"
				:value-format="form.valueFormat || 'yyyy-MM-dd'"
				:placeholder="form.placeholder"
				:size="form.size ? form.size : size"
				:disabled="form.disabled"
				:readonly="form.readonly"
				:editable="form.editable"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
				:picker-options="form.pickerOptions || {}"
			></el-date-picker>
			<el-date-picker
				v-else-if="form.itemType === 'daterange'"
				v-model="params[form.prop]"
				type="daterange"
				format="yyyy年MM月dd日"
				range-separator="至"
				@change="form.changeDate(params[form.prop])"
				:value-format="form.valueFormat || 'yyyy-MM-dd'"
				:size="form.size ? form.size : size"
				:disabled="form.disabled"
				:readonly="form.readonly"
				:editable="form.editable"
				:placeholder="form.placeholder"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
				:picker-options="form.pickerOptions || {}"
			></el-date-picker>
		</el-form-item>
		<el-form-item>
			<el-button
				type="primary"
				:size="size"
				@click="handleSearch"
			><i v-if="showSearchIcon" class="el-icon-search"></i>查询</el-button>
			<el-button
				type="primary"
				v-if="showResetBtn"
				:size="size"
				@click="handleResetForm"
			>重置</el-button>
			<slot name="button-slot"></slot>
		</el-form-item>
	</el-form>
</template>

<script>
import { formProps } from './formProps'
export default {
  name: 'CustomForm',
  props: formProps,
  data() {
    const { forms } = this.$props
    const selectOptionPrefix = 'select-option-prefix'
    const dataObj = {
      selectOptions: {}
    }
    const params = {}
    forms.forEach((form, index) => {
      const propType = typeof form.prop
      if (propType === 'string') {
        params[form.prop] = ''
      } else {
        throw new Error('Prop is must be a String')
      }
      if (form.itemType === 'select' && form.selectFetch) {
				const dataKey = selectOptionPrefix + index
        dataObj.selectOptions[dataKey] = []
        this.getSelectOptions({
          fetch: form.selectFetch,
          dataKey,
          resultField: form.selectResultField || 'result',
          resultHandle: form.selectResultHandle
        })
      }
    })
    return {
      params,
      selectOptionPrefix,
      ...dataObj
    }
  },
  computed: {
    itemStyle() {
      const { itemWidth } = this.$props
      if (itemWidth) {
        return `width: ${itemWidth}px;`
      }
      return ''
    }
	},
	created() {
		console.log(this)
	},
  methods: {
		isArray(value){
			return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]'
		},
    handleSearch() {
      this.getParams((error, params) => {
        if (!error) {
          const { handleSubmit } = this.$props
          if (handleSubmit) {
            handleSubmit(params)
          } else {
            throw new Error('Need to set attribute handleSubmit')
          }
        }
      })
    },
    getParams(callback) {
      this.$refs[this.formName].validate(valid => {
        if (valid) {
          if (callback) {
            callback(null, this.params)
          }
        }
      })
    },
    handleResetForm() {
      this.$refs[this.formName].resetFields()
    },
    getSelectOptions({ fetch, dataKey, resultField, resultHandle }) {
      fetch().then(response => {
        const result = response[resultField]
        if (resultHandle && this.isArray(result)) {
          this.selectOptions[dataKey] = result.map(resultHandle)
        } else {
          this.selectOptions[dataKey] = result
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
