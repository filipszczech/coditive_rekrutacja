<template>
    <nav class="fixed top-0 left-0 right-0">
        <div class="px-4 py-4 lg:px-12 lg:py-6 flex items-center justify-between bg-neutral-50">
            <NuxtLink to="/" @click="open = false">
                <CoditiveHeader>
                    <template #text>
                        <h1 class="text-xl lg:text-3xl font-semibold">
                            Coditive - zadanie rekrutacyjne
                        </h1>
                    </template>
                </CoditiveHeader>
            </NuxtLink>
            <button @click="open = !open">
                <svg v-if="open" class="w-7 h-7 lg:w-9 lg:h-9" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <svg v-else class="w-7 h-7 lg:w-9 lg:h-9" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
        <transition name="slide">
            <div
                v-if="open"
                class=""
                @click.self="open = false"
            >
                <aside class="w-full h-screen bg-coditive_gray p-6 lg:px-12 flex flex-col gap-6">
                    <NuxtLink
                        to="/"
                        @click="open = false"
                        class="text-xl md:text-2xl font-semibold">
                        Kalkulator VAT
                    </NuxtLink>
                    <NuxtLink
                        to="/lista-operacji"
                        @click="open = false"
                        class="text-xl md:text-2xl font-semibold">
                        Lista operacji
                    </NuxtLink>
                </aside>
            </div>
        </transition>
    </nav>
</template>

<script setup>
    const open = ref(false);
</script>

<style>
    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.4s ease, opacity 0.4s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
        transform: scale(0.9);
        opacity: 0;
    }
</style>