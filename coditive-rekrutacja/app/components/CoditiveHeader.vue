<template>
    <div class="flex items-end gap-2">
        <div ref="text_ref">
            <slot name="text"></slot>
        </div>
        <div
            class="bg-coditive_accent mb-1"
            :style="{ width: rect_width + 'px', height: rect_height + 'px' }"
        ></div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const text_ref = ref(null);
    const rect_width = ref(0);
    const rect_height = ref(0);

    const update_rect = () => {
        if (text_ref.value) {
            if(text_ref.value.offsetWidth/16 < 20) {
                rect_width.value = 20;
            }
            else {
                rect_width.value = text_ref.value.offsetWidth/16;
            }
            rect_height.value = text_ref.value.offsetHeight/4;
        }
    }

    onMounted(() => {
        update_rect();
    })
</script>