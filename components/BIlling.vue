<template>
  <div class="card shadow mb-4">
                                <div class="card-header py-2 my-2">
                                    <h6 class="m-0 font-weight-bold text-dark">Billing history</h6>
                                    <h6 class="text-xs my-1 ">Choose a billing plan to see more details</h6>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive-md">
                                 <bill-table/>     
</div>
              <pagination/>
            </div>
        </div>
</template>

<script>
import BillTable from './BillTable.vue'
import Pagination from './Pagination.vue'
    export default {
  components: { BillTable, Pagination },
        
    }
</script>

<style lang="scss" scoped>

</style>