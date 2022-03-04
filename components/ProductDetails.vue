<template>
    <div>
        <div class="d-flex d-row ">
    <i  :class="product.product_kind !== 'WEBSITE' ? 'fas fa-phone' : 'fas fa-laptop'" aria-hidden="true"></i>
                <h6 class="mx-3">{{product.product_kind}}  - {{product.product_detail}}</h6>
                        </div>
                  <hr>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    export default {
        props: ['product'],
    }
</script>

<style lang="scss" scoped>

</style>