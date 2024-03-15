<template>
  <header class="flex items-center justify-between font-montserrat">
    <a class="screen-min-w-1200px:text-1_2rem screen-w-1450px:!text-1_42rem screen-w-1724px:text-1_8rem font-montserrat font-bold text-blue_0055fc text-1_969rem leading-10" href="#">
      Medical Tracker
    </a>
    <span>
      <img class="screen-min-w-1200px:h-20px screen-w-1600px:h-[25px]" src="../../assets/images/Stars.png" alt="Stars">
    </span>
    <nav class="flex">
      <ul class="screen-min-w-1200px:mr-[30px] screen-min-w-1200px:gap-[35px] screen-w-1724px:gap-2_8rem screen-w-1600px:mr-14 flex screen-w-1600px:gap-60px mr-70px">
        <li>
          <NavItem class="!text-blue_0055fc">Home</NavItem>
        </li>
        <li>
          <NavItem>About us</NavItem>
        </li>
        <li>
          <NavItem>Find doctor</NavItem>
        </li>
        <li>
          <NavItem>Our services</NavItem>
        </li>
      </ul>
      <ul class="flex">
        <li class="screen-min-w-1200px:mr-8 mr-50px">
          <span>
            <img class="screen-min-w-1200px:h-[30px] screen-w-1600px:h-w[35px] h-45px" src="../../assets/images/IconSearch.png" alt="Search icon">
          </span>
        </li>
        <li>
          <a href="#">
            <img class="screen-min-w-1200px:h-[30px] screen-w-1600px:h-w[35px] h-45px" src="../../assets/images/IconAccount.png" alt="Account">
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

import NavItem from "@/components/Header/NavItem.vue";
</script>
