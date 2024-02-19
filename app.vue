<script setup lang="ts">
import InputText from 'primevue/inputtext';


const title = ref("enter title here")
</script>

<template>
  <div class="ml-5">
    <div class="text-[3rem] text-orange-400 font-bold mb-10">Try it Bryan, you'll like it</div>

      <InputText class="mb-5" v-model="title" placeholder="Search" />
      <Card class="w-3/12">
      <template #title>{{title}}</template>
      <template #content>
        <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
        </p>
      </template>
      </Card>

  </div>
</template>
