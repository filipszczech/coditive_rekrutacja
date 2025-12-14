<template>
	<div class="fixed w-full h-full bg-neutral-50">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <Toast />
	</div>
</template>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
</style>