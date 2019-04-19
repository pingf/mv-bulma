import './style.scss'

export default {
  name: 'mv-box',
  render(h) {
    return h(
      'div',
      {
        class: 'box'
      },
      this.$slots.default
    )
  }
}
