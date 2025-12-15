<template>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
</template>
  
<script setup>
</script>
  
<style scoped>
    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .loader {
        border: 0.5rem solid #f4f4fa;
        border-top: 0.5rem solid #34ff80;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>