/* VueJS ressource called from Landing Page */
const { createApp, ref, computed } = Vue;
const app = createApp({
  setup() {
    const someValue = ref(10);
    const name = ref('Your name');
    const someComputed = computed(() => someValue.value * 10);
    return {
      someValue,
      name,
      someComputed
    }
  }
});
app.mount("#app");