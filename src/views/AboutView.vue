<template>
  <v-card class="description">
  <v-container class="text">
    <h3>A propos de nous</h3><br>

    <span class="space">{{ $t("drawer.about") }}</span>
  </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'aboutView'
}
</script>
<style>
.text{

  top:100px;
  text-align: center;
  font-size: 30px;
  color:white;
  margin-top: 20px;


}

.description{
  top:100px;
  width: 600px;
  height: 400px;
  margin:auto;
  background-color: blueviolet;

}

@media screen and (max-width: 768px){

  .description{
    top:0px;
    width: 100%;
    height: 100%;
    margin:auto;
    background-color: blueviolet;

  }

}
</style>