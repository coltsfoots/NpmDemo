export const formProps = {
  formName: {
    type: String,
    default: 'form'
  },
  size: {
    type: String,
    default: '',
    validator: sizeValidator
  },
  showResetBtn: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  labelWidth: Number,
  itemWidth: Number,
  handleSubmit: Function,
  forms: {
    type: Array,
    required: true,
    default: () => []
  }
}

function sizeValidator(value) {
  const sizeType = ['large', 'small', 'mini']
  const valid = sizeType.indexOf(value.toLowerCase()) !== -1 || value === ''
  if (!valid) {
    throw new Error(`Size must be one of ['large', 'small', 'mini']`)
  }
  return valid
}
