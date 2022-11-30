const { createApp } = Vue;

const app = createApp({
  data () {
    return {
      listaMail: [],
      bonusMail:[]
    };
  },

  mounted () { // funzione standard di vue 
    for (let i = 0; i < 10; i++){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        this.listaMail.push(resp.data.response);
        console.log(resp.data)
      })
    }

    this.bonusMail = this.listaMail
  }
}).mount('#app')