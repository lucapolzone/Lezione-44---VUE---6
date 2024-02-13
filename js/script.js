const { createApp } = Vue

const app = createApp({
  data() {
    return {
      title: 'La mia Email list con VUE!',
      mails: []
    }
  },

  created() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( (response) => {
        //console.table(response.data.response);
        this.mails.push(response.data.response);
      })
    }
  }
})

app.mount('#app')