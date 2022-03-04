<template>
    <div>
  <div class="card-body">
  <h6 class="font-weight-bold text-dark">Next Invoice : {{ payment.next_invoice_date }}</h6>
     <div class="container   row  mt-5">
        <div class=" col-sm-12 col-md-12   col-lg-5 col-xl-5 bg-light mb-2  align-items-center">
                 <div class="col mr-2">
                <h6 class=" h6 text-dark mb-3 d-flex">
                             Current balance
                                         </h6>
                                        <div class="h4"> ${{payment.balance}}</div>
    
          <div class="h6 mb-0 d-md-flex d-md-row d-none  my-3"> 
            <i class="fas fa-lock" aria-hidden="true"></i> <small class="text-muted ml-2 "> This is a secure 256-bit SSL encripyted payment. You are safe
                </small>
        </div>
          <div class="h6 mb-0 d-md-none my-3"> 
            <i class="fas fa-lock" aria-hidden="true"></i> <small class="text-muted ml-2 "> This is a secure 256-bit SSL encripyted payment. You are safe
                </small>
        </div>

         <button class="btn btn-primary mt-3 mb-2">Pay now</button>
                                        </div>
                                    </div>
                     <!-- <div class="d-md-none mb-2 bg-white  py-2">   </div> -->
                            <div class=" bg-light mb-2 col-lg-6 col-xl-6 col-md-12   offset-lg-1 offset-xl-1 col-sm-12 no-gutters ">
                         <div class="col mr-2 ">
                             <div class="d-flex mb-2">
                    <h6 class=" d-row  text-dark p-1 ">
                                                Payment Method</h6>
                                               <div class=" d-row col-auto">
                                           <span class="badge badge-pill badge-light text-dark py-2">{{payment.payment_method}}</span>
                                        </div>
                             </div>
         <div class="h6 mb-0 d-md-flex d-md-row d-none   mt-1 py-3"> 
            <i class="fas fa-lightbulb text-success" aria-hidden="true"></i> <p class="text-success ml-2">  Guide: </p>
            <small class="text-muted ml-2 py-1 "> To manage your payments more easily. we recommend switching to Direct Debit. </small>
                      </div>
            <div class="h6 mb-0  d-md-none mt-1 py-3"> 
             <div class="d-flex d-row">
            <i class="fas fa-lightbulb text-success" aria-hidden="true"></i> <p class="text-success ml-2">  Guide: </p>
             </div>
            <small class="text-muted  "> To manage your payments more easily. we recommend switching to Direct Debit. </small>
       
                                        </div>
     <button class="btn btn-primary mt-4 mb-2 ">Switch to direct Debit</button>
                                    </div>
                                    </div>
                                </div>

                            </div>
    </div>
</template>

<script>
    export default {
        props: ['payment']
    }
</script>

<style lang="scss" scoped>

</style>