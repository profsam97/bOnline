<template>
    <div>
 <div class="card shadow mb-4 myProduct">
                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header pt-3  align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-dark">Payment details</h6>

                                    <h4 class="text-muted text-xs mb-0">View details of your next invoice and payment method  </h4>
                                </div>  
                               
                                <!-- Card Body -->
                              <payment-details :payment='filteredAcc'/>
                        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
                 computed: {
            ...mapState([
                'filteredAcc'
            ])
        } 
    }
</script>

<style lang="scss" scoped>

</style>