<template>
    <transition name="fade">
        <div
            v-if="show"
            :class="[
                'fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-lg',
                type_class
            ]">
            {{ message }}
        </div>
    </transition>
</template>

<script setup>
    const { toast } = useToast();

    const show = computed(() => toast.show);
    const message = computed(() => toast.message);

    const type_class = computed(() => {
        switch (toast.type) {
            case 'success': return 'bg-coditive_accent text-neutral-800';
            case 'error': return 'bg-red-400 text-neutral-800';
            case 'info': return 'bg-coditive_gray text-neutral-600';
            default: return 'bg-coditive_gray text-neutral-600';
        }
    })
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>