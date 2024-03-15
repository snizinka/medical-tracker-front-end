<script setup lang="ts">
import ActionButton from "@/components/Buttons/ActionButton.vue";
</script>

<template>
  <div class="screen-w-1600px:!mb-[5.55vh] screen-min-w-1200px:mb-[2rem] screen-w-1200px:flex-start screen-w-1200px:mx-auto screen-w-1200px:!max-w-80% inline-flex mb-3_5rem">
    <ActionButton class="screen-w-1600px:mr-6 mr-11">Book an appointment</ActionButton>
    <ActionButton class="border-2 border-gray_2d2d2d bg-transparent">
      <svg class="scale-150" width="24" height="24" xmlns="http://www.w3.org/2000/svg"  clip-rule="evenodd">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
      </svg>
    </ActionButton>
  </div>
</template>
