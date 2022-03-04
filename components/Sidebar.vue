<template>
    <div>
 <ul class="navbar-nav navbar-light bg-light text-dark sidebar sidebar-light accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
     <div class="d-flex no-gutters mx-3"><span class="text-primary text-lowercase"> b </span> O 
    <span class="text-lowercase"> nline</span></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">
    <li class="nav-item active">
                <NuxtLink exact class="nav-link " to="/">
    <i class="fa fas fa-house"></i>            
         <span class="mx-3">Home</span></NuxtLink>
            </li>
            <!-- Divider -->
            
            <hr class="sidebar-divider">
            <!-- Nav Item - Tables -->
            <li class="nav-item active">
                <NuxtLink  class="nav-link" to="/about"
                >
                    <i class="fas fa-briefcase"></i>
                    <span class="mx-3">Billing</span></NuxtLink>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">   
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style  scoped>

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active{
  background-color:  #007bff !important;
  border: 0.1rem solid #007bff;
  border-radius: 5px;
    color:  #fff !important;
}

/* a.nuxt-link-active{
  background-color:  #007bff !important;
  border: 0.1rem solid #007bff;
  border-radius: 5px;
    color:  #fff !important;
} */
</style>