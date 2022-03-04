<template>
    <ul class="navbar-nav ml-auto">
                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                        </li>
                        <div class="topbar-divider d-none d-sm-block"></div>
                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle"  id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="img-profile rounded-circle"
                                    src="~/assets/img/undraw_profile.svg">
                                    <div class="d-flex flex-column">
                                <span class="mx-2 d-none d-lg-inline fontBold">First Lastname</span>
                                <a href="mailto:" class="mx-2 d-none  small d-lg-inline ">firstlastname@bonline.com</a>
                                    </div>
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                         <b-nav-item-dropdown >
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
                            </a> 
                        </li>

                    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>