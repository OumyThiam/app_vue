<template>
  <div>
    <v-toolbar class="deep-purple" />
    <v-list dense>
      <template v-for="(item, i) in items" :key="i">
        <v-divider dark></v-divider>
        <v-list-item  ripple :to="item.action" >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item-action>

        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'drawerComponent',
  data: function () {
    return {
      items: [
        { icon: 'mdi-home', text: this.$t('drawer.home'), action: '/' },
        { icon: 'mdi-history', text: this.$t('drawer.history'), action: '/history' },
        { icon: 'mdi-clipboard-text', text: this.$t('drawer.title_form'), action: '/form' },
        { icon: 'mdi-format-list-bulleted', text: this.$t('drawer.title_history'), action: '/historyform' },
        { icon: 'mdi-help', text: this.$t('title_about'), action: '/about' },
      ]
    }
  }

}
</script>
<style>
.body-2{
  margin-left: 20px;
}


</style>