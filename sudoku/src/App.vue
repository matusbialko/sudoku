<template>
  <div class="flex flex-row justify-center items-center w-screen h-screen bg-neutral-800 text-white">
    <Sudoku />
  </div>
</template>

<script>
import Sudoku from './app@sudoku/Sudoku.vue'

export default {
  components: { 
    Sudoku 
  },    
}
</script>
