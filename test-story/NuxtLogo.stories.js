import NuxtLogo from '../src/components/NuxtLogo/NuxtLogo.vue'

export default {
  title: 'NuxtLogo',
  component: NuxtLogo,
}

export const Default = () => ({
  components: { NuxtLogo },
  template: '<NuxtLogo />',
})
