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
				@change="form.handleSelectChange ? form.handleSelectChange(params[form.prop]) : null"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
			>
				<el-option
					v-for="(option, optionIndex) in form.options"
					:key="optionIndex"
					:value="option.value"
					:label="option.label"
				></el-option>
				<template v-if="form.selectFetch">
					<el-option
						v-for="(op, opIndex) in selectOptions[selectOptionPrefix + index]"
						:key="opIndex"
						:value="op.value"
						:label="op.label"
					></el-option>
				</template>
			</el-select>
			<el-cascader
				v-else-if="form.itemType === 'cascader'"
				v-model="params[form.prop]"
				:size="form.size || size"
				:placeholder="form.placeholder"
				:disabled="form.disabled"
				:separator="form.separator || '/'"
				:clearable="form.clearable"
				:expand-trigger="form.expandTrigger || 'click'"
				:filterable="form.filterable"
				:props="form.props"
				:options="form.options || cascaderOptions[cascaderOptionPrefix + index]"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
				@change="form.handleCascaderChange ? form.handleCascaderChange(params[form.prop]) : null"
			></el-cascader>
			<el-date-picker
				v-else-if="form.itemType === 'date'"
				v-model="params[form.prop]"
				type="date"
				:placeholder="form.placeholder"
				:size="form.size ? form.size : size"
				:disabled="form.disabled"
				:readonly="form.readonly"
				:editable="form.editable"
				format="yyyy年MM月dd日"
				@change="form.changeDate ? form.changeDate(params[form.prop]) : null"
				:value-format="form.valueFormat || 'yyyy-MM-dd'"
				:style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
				:picker-options="form.pickerOptions || {}"
			></el-date-picker>
			<el-date-picker
				v-else-if="form.itemType === 'daterange'"
				v-model="params[form.prop]"
				type="daterange"
				format="yyyy年MM月dd日"
				range-separator="至"
				@change="form.changeDate ? form.changeDate(params[form.prop]) : null"
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
			>查询</el-button>
			<el-button
				type="primary"
				v-if="showResetBtn"
				:size="size"
				@click="handleResetForm"
			>重置</el-button>
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
		const cascaderOptionPrefix = 'cascadere-option-prefix'
    const dataObj = {
			selectOptions: {},
			cascaderOptions: {}
    }
    const params = {}
    forms.forEach((form, index) => {
      const propType = typeof form.prop
      if (propType === 'string' && form.prop !== 'cascader') {
        params[form.prop] = ''
      } else if (form.prop === 'cascader') {
				params[form.prop] = []
				if(form.cascaderFetch) {
					const dataKey = cascaderOptionPrefix + index
					dataObj.cascaderOptions[dataKey] = []
					this.getCasacderOptions({
						fetch: form.cascaderFetch,
						dataKey,
						resultField: form.selectResultField || 'result',
						resultHandle: form.cascaderResultHandle
					})
				}
      } else {
        throw new Error('Prop is must be a String')
      }
      if (form.itemType === 'select' && form.selectFetch) {
        const dataKey = selectOptionPrefix + index
        dataObj.selectOptions[dataKey] = []
        this.getSelectOptions({
          fetch: form.selectFetch,
					dataKey,
					porps: form.props,
          resultField: form.selectResultField || 'result',
          resultHandle: form.selectResultHandle
        })
      }
    })
    return {
      params,
			selectOptionPrefix,
			cascaderOptionPrefix,
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
  methods: {
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
        if (resultHandle) {
          this.selectOptions[dataKey] = result.map(resultHandle)
        } else {
          this.selectOptions[dataKey] = result
        }
      })
		},
		getCasacderOptions({fetch, dataKey, props, resultField, resultHandle}) {
			fetch().then(response => {
				const result = response[resultField]
				if(resultHandle && !props) {
					this.cascaderOptions[dataKey] = result.map(resultHandle)
				} else {
					this.cascaderOptions[dataKey] = result
				}
			})
		}
  }
}
</script>

<style scoped>

</style>
