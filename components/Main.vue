<template>
   <body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
       <Sidebar/>
        <!-- End of Sidebar -->
<div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <!-- Topbar -->
                <Navbar/>
                <About/>
            </div>
</div>
        <!-- Content Wrapper -->
        
    </div>
</body>


</template>

<script>
import Sidebar from './Sidebar.vue'
    export default {
  components: { Sidebar },
        
    }
</script>

<style lang="scss" scoped>

</style>