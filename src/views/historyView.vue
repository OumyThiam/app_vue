<template>
  <v-table>
    <thead>
    <tr>
      <th>time</th>
      <th>m</th>
      <th>ft</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, rowIndex) in items" :key="rowIndex">
      <td>{{ row.time }}</td>
      <td>{{ row.m }}</td>
      <td>{{ row.ft }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
  export default {
  props: {
},
  name: 'HistoryView',
  data: () => {
  return {
  items: JSON.parse(localStorage.getItem("history")),

}



},
}
</script>

