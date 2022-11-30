const { createApp } = Vue;

const app = createApp({
  data () {
    return {
      listaMail: []
    };
  },

  mounted () {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        this.listaMail = resp.data.response;
        console.log(resp.data)
      })
  }
}).mount('#app')