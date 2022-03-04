<template>
    <div class="row">
        <account-row 
            v-for="account in Account"
            :key="account.id"
            :account="account"
        />
                         <!-- <div class="col-xl-3  col-lg-4 col-md-6 mb-4">
                            <div class="card   h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-sm font-weight-bold h6 text-primary mb-3 d-flex">
                                                Macrotel Phone
                                               <div class="col-auto">
                                           <span class="badge badge-pill badge-light text-success">Active</span>
                                        </div></div>
                                             
                                            <div class="h6 mb-0 text-muted text-gray-800">Account ID: 200000</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                            <div class="card   h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-sm font-weight-bold h6 text-primary mb-3 d-flex">
                                                Macrotel Phone
                                               <div class="col-auto">
                                           <span class="badge badge-pill badge-light text-success">Active</span>
                                        </div></div>
                                             
                                            <div class="h6 mb-0 text-muted text-gray-800">Account ID: 200000</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> -->
    </div>
</template>

<script>
    import { mapState } from 'vuex';
import AccountRow from './AccountRow.vue';

    export default {
  components: { AccountRow },
        computed: {
            ...mapState([
                'Account',
            ])
        }
    }
</script>

<style lang="scss" scoped>

</style>