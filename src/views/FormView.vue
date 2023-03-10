<template>

  <v-col col="10" md="8" ms="12"  class="d-flex justify-center align-center">
    <v-card class="mx-auto">
      <v-container>
        <h3 class="title">Entrée les coordonnées manuellement dans l'historique </h3>
      </v-container>
      <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent="handleSubmit" class="myform">
          <v-col col="12" md="10" ms="12">
            <v-text-field
                v-model="cliff"
                label="cliff"
                :counter="7"
                :rules="cliffRules"
            ></v-text-field>

            <v-text-field
                v-model="height"
                label="height"
                :counter="7"
                :rules="heightRules"
            ></v-text-field>

            <v-text-field
                v-model="time"
                label="timer"
                :counter="7"
                :rules="timeRules"
            ></v-text-field>

            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-col>
        </v-form>
      </v-sheet>
    </v-card>
  </v-col>

</template>

<script>
export default {
  data() {
    return {
      cliff: '',
      height: '',
      time: '',
      cliffRules: [
        v => !!v || 'Cliff is required',
        v => v && v.length <= 7 || 'Cliff must be less than 7 characters'
      ],
      heightRules: [
        v => !!v || 'Height is required',
        v => v && v.length <= 7 || 'Height must be less than 7 characters'
      ],
      timeRules: [
        v => !!v || 'Time is required',
        v => v && v.length <= 7 || 'Time must be less than 7 characters'
      ]
    }
  },
  created() {
    this.formDataList = JSON.parse(localStorage.getItem('formData')) || [];
  },
  methods: {
    handleSubmit() {
      const formData = {
        cliff: this.cliff,
        height: this.height,
        time: this.time
      };
      alert('Les données ont été enregistrées avec succès !');

      this.formDataList.push(formData); // push new form data to formDataList

      localStorage.setItem('formData', JSON.stringify(this.formDataList)); // save formDataList to localStorage
    }
  }
}
</script>
<style>
.title{
  text-align: center;
}
.d-flex{
  margin: auto;

}


</style>