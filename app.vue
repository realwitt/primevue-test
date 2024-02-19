<script setup lang="ts">
import InputText from 'primevue/inputtext';


const title = ref("enter title here")
</script>

<template>
  <div class="ml-5">
    <div class="text-[3rem] text-orange-400 font-bold mb-10">Try it Bryan, you'll like it</div>

      <InputText class="mb-5" v-model="title" placeholder="Search" />

      <div class="flex gap-10">
      <Card class="w-3/12">
      <template #title>{{title}}</template>
      <template #content>
        <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
        </p>
      </template>
      </Card>

      <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="./assets/images/usercard.jpg" />
      </template>
      <template #title>{{title}}</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
        </div>
      </template>
      </Card>
  </div>

  </div>
</template>
