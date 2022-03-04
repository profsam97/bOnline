<template>
                              <table class="table table-hover table-responsive-md">
  <thead>
    <tr class="">
      <th class="font-weight-bold text-black-100" scope="col ">Date</th>
      <th scope="col">Type </th>
      <th scope="col">Amount</th>
      <th scope="col">Balance </th>
    <th scope="col">Reference </th>
      <th scope="col">Download </th>
    </tr>
  </thead>
  <tbody>
    <table-row/>
    <table-row/>
    <table-row/>
    <table-row/>
    <table-row/>
    <table-row/>
  </tbody>
</table>
</template>

<script>
import TableRow from './TableRow.vue'
    export default {
  components: { TableRow },
        
    }
</script>

<style lang="scss" scoped>

</style>