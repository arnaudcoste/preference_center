/* VueJS ressource called from Landing Page */
const { createApp, ref, computed } = Vue;
const app = createApp({
  setup() {
    const someValue = ref(10);
    const text = ref('Enter your text');
    const inputText = ref('');
    const choiceAction = () => {
      console.log('choiceAction: ', inputText.value)
    }
    return {
      someValue,
      text,
      inputText,
      choiceAction
    }
  }
});
app.mount("#app");