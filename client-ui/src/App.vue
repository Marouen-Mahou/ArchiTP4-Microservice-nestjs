<template>
<v-app>
  <div>
    <v-card class="ma-5">
      <v-card-title class="accent white--text">REQUEST A LOAN</v-card-title>
      <v-card-text class="pa-3">
         <v-text-field
            v-model="name"
            label="Name"
            outlined
            clearable
            dense
          ></v-text-field>
      <v-text-field
           v-model="amount"
            label="Amount"
            outlined
            clearable
            dense
          ></v-text-field>
      </v-card-text>
      
      <v-btn class="success ma-3" @click="requestLoan">Request</v-btn>
    </v-card>
    

  </div>
</v-app>

</template>

<script>

export default {
  name: 'App',

  methods: {
     requestLoan() {
       //Get products lists
        this.$Axios.get('http://localhost:3001/start-procedure')
        .then((res) => {
            alert(res.data)   
        }).catch(() => {
            alert("error occured while requesting a loan")
        })
     }
  },

  data: () => ({
        name: '',
        amount: ''
      }),
};
</script>
