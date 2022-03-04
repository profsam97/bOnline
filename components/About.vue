<template>
                <!-- Begin Page Content -->
                    <div>
                    <!-- Page Heading -->
                    <div class="m-1 p-3 bg-white ">
                    <div class="d-sm-flex bg-white align-items-center justify-content-between mb-2">
                        <h1 class="h3 mb-0 fontBold">Billing</h1>
                    </div>
                        <p class="fontWeight">Overview of your account</p>
                        </div>
                    <!-- Content Row -->
                  <div class="container-fluid">

                        <!-- Earnings (Monthly) Card Example -->
                      <Account/>

                    <!-- Content Row -->
                   <div v-if="isClicked" >
                    <div class="row">
                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-8">
                           <Payment />
                            </div>
                        <div class="col-xl-4 col-lg-4 myProduct" >
                            <MyProduct/>
                        </div>
                    </div>
            
                        <div class="row">
                        <!-- Content Column -->
                        <div class="col-12 mb-2">

                            <!-- Billing History -->
                          <b-illing/>
             
                        </div>


                <!-- /.container-fluid -->

            </div>
                   </div>
                   <div v-else>
                       <h6 class="text-center"> 
                           Please Click on an Account to view more Details
                       </h6>
                   </div>
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <!-- <Footer/> -->
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    <!-- End of Page Wrapper -->

</template>

<script>
import { mapState } from 'vuex';
import BIlling from './BIlling.vue'
import Loading from './LoadingBar.vue';
    export default {
  components: { BIlling, Loading },
                  computed: {
            ...mapState([
                'isClicked',
                'filteredAcc',
                'isLoading'
            ])
        }
    }
   
</script>

<style lang="scss" scoped>

</style>