<template>
  <v-table>
    <thead>
    <tr>
      <th>time</th>
      <th>cliff</th>
      <th>height</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, rowIndex) in items1" :key="rowIndex">
      <td>{{ row.time }}</td>
      <td>{{ row.cliff }}</td>
      <td>{{ row.height}}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: {
  },
  name: 'historyForm',
  data: () => {
    return {
      items1: JSON.parse(localStorage.getItem("formData")),

    }



  },
}
</script>

