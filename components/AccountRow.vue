<template>
    <div @click="isClicked(account.account_id)" class="col-xl-3 bg-light  col-lg-4 col-md-6 mb-4 ">
        <!--  -->

     <div class="card opac h-100 py-2 border rounded " :class="isClicked &&  filteredAcc.account_id == account.account_id ? 'isActive' : ''">
                     <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-sm font-weight-bold h6 text-primary mb-3 d-flex">
                    {{account.first_name }}  {{account.last_name }}
                                               <div class="col-auto">
                                           <span class="badge badge-pill badge-light text-success">Active</span>
                                        </div></div>
                                             
                                <div class="h6 mb-0 text-muted text-gray-800">Account ID: {{account.account_id}}</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

    export default {
        props: ['account'],
          computed: {
            ...mapState([
                'filteredAcc',
                'isClick',
            ])
        },
        methods: {
            isClicked: function(id) {
            //   this.$store.getters.getAccountById(id);
            this.$store.commit('getAccountById', id)
            }
        }
        // computed: {
        //     isClicked(id) {
        //     }
        // }
    }
     
</script>

<style lang="scss" scoped>

</style>