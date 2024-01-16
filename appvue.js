/* VueJS ressource called from Landing Page */
const { createApp, ref, computed } = Vue;
const app = createApp({
  setup() {
    const someValue = ref(10);
    const text = ref('Enter your text');
    const inputText = ref('guest');
    const someComputed = computed(() => someValue.value * 10);
    return {
      someValue,
      text,
      inputText,
      someComputed
    }
  }
});
app.mount("#app");