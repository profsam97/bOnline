export { default as About } from '../..\\components\\About.vue'
export { default as Account } from '../..\\components\\Account.vue'
export { default as AccountRow } from '../..\\components\\AccountRow.vue'
export { default as BIlling } from '../..\\components\\BIlling.vue'
export { default as BillTable } from '../..\\components\\BillTable.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as LoadingBar } from '../..\\components\\LoadingBar.vue'
export { default as Logout } from '../..\\components\\Logout.vue'
export { default as Main } from '../..\\components\\Main.vue'
export { default as MyProduct } from '../..\\components\\MyProduct.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as Payment } from '../..\\components\\Payment.vue'
export { default as PaymentDetails } from '../..\\components\\PaymentDetails.vue'
export { default as ProductDetails } from '../..\\components\\ProductDetails.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as TableRow } from '../..\\components\\TableRow.vue'
export { default as Topbar } from '../..\\components\\Topbar.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
