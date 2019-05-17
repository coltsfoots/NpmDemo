# custom-form
# 最新版本 2.1.8

> 自定义表单

> 1.x 的版本因为不能动态从接口获取下拉框数据已经被替换掉了，其他配置方式也一起修改了一下，废话不多说，直接上配置

> 表单配置

参数 | 说明 | 类型 | 是否必填 | 默认值
----- | ----- | ----- | ----- | -----
formName | 表单名(ref) | String | 是 | form
size | 表单尺寸 | String | 是 | -
showResetBtn | 是否显示重置按钮 | Boolean | 否 | false
inline | 行内表单 | Boolean | 否 | false
labelWidth | 表单域标签宽度，子元素会继承 | Number | 否 | -
itemWidth | 表单域宽度 | Number | 否 | -
handleSubmit | 查询按钮点击事件处理函数，接收表单作为参数 | 否 | Function | -
forms | 表单项配置 | Array | 是 | []

> forms 参数配置

参数 | 说明 | 类型 | 是否必填 | 默认值
----- | ----- | ----- | ----- | -----
prop | 表单元素字段 | String | 是 | -
label | 表单元素字段文字 | String | 否 | -
rules | 表单元素验证规则 | Array | 否 | []
labelWidth | 表单域宽度 | Number | 否 | -
itemType | 表单元素类型 | String | 是 | input
size | 表单元素尺寸，可继承父级 | String | 否 | -
readonly | 是否只读 | 否 | Boolean | false
placeholder | 占位符 | String | 否 | -
itemWidth | 表单元素宽度 | Number | 否 | -
editable | 是否可输入，只在类型为 date daterange 的时候才有用 | Boolean | 否 | false
pickerOptions | 时间选择快捷选项 | Object | 否 | {}

> 动态下拉框配置

参数 | 说明 | 类型 | 是否必填 | 默认值
----- | ----- | ----- | ----- | -----
selectFetch | 获取远程数据的方法(必须支持Promise) | Function | 是 | -
selectResultField | 接口返回数据字段名 | String | 否 | result
selectResultHandle | 接口返回数据处理函数 | Function | 否 | -

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
