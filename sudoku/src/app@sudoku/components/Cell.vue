<template>
    <div class="w-full h-full border-solid border-gray-300 cursor-pointer">
        <div class="flex flex-row justify-center items-center w-full h-full text-center text-3xl font-semibold border-2 border-solid border-transparent hover:border-blue-200">
            {{generateNumber}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pos: {
            type: Object,
            required: true 
        },
    },

    computed: {
        generateNumber() {
            const nubmerArray = [1,2,3,4,5,6,7,8,9]
            return Math.floor(Math.random() * nubmerArray.length)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>