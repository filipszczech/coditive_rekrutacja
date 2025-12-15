<template>
    <div>
        <div class="bg-coditive_gray">
            <div class="max-w-xl mx-auto p-4 md:px-0 py-8 mb-5 md:mb-9">
                <CoditiveHeader class="mb-3">
                    <template #text>
                        <h2 class="text-lg md:text-3xl font-semibold">
                            Lista rekordów
                        </h2>
                    </template>
                </CoditiveHeader>
                <p class="text-neutral-500 max-w-2xl">
                    W tym widoku znajduje się lista rekordów, pobranych z bazy danych.
                </p>
            </div>
        </div>
        <div class="max-w-5xl mx-auto py-4">
            <Suspense>
                <template #default>
                    <AsyncPriceDataList />
                </template>
                <template #fallback>
                    <Loader />
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup>
    const AsyncPriceDataList = defineAsyncComponent(() => 
        import('~/components/PriceDataList.vue')
    );
</script>