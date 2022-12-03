<template>
  <div class="flex flex-row w-[800px] h-[800px] p-4 border border-solid border-gray-500 bg-white">
    <div 
      v-for="x in 9" 
      class="w-1/9 h-full" 
      :key="x"
    >
      <div 
        v-for="y in 9" 
        class="w-full h-1/9 border-solid border-black" 
        :class="{'border-r': x%3 === 0 && x !== 9, 'border-b': y%3 === 0 && y !== 9}" 
        :key="y"
      >
        <Cell 
          :pos="{x, y}" 
          :class="{'border-r': x%3 !== 0, 'border-b': y%3 !== 0}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  components: {
    Cell,
  },
}
</script>