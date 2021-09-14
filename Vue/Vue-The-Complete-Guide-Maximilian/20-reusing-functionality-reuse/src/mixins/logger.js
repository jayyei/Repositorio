export default {
  // in a component with a mounted hook, both lifecycle hooks would execute, first the mounted in the component and last the mounted in the mixin
  mounted() {
    console.log('Mounted!')
  }
}