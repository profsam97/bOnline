<template>
<div class="card shadow mb-4 myProduct">
                                <div
                                    class="card-header py-2  align-items-center justify-content-between">
                                    <h6 class="m-1 font-weight-bold text-dark">My Products</h6>
                                    <h6 class="text-xs"> All your products at a glance</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <product-details 
                                    v-for="products in filteredAcc.products"
                                    :key="products.id"
                                    :product='products'
                                    />
                                    <div class="mt-5">
                                    </div>                                </div>
                            </div>
</template>

<script>
import ProductDetails from './ProductDetails.vue'
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