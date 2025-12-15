<template>
    <div>
        <div v-if="error" class="text-red-500 text-center">
            Wystąpił błąd podczas pobierania danych: {{ error }}
        </div>

        <div v-else-if="!h.data?.length === 0" class="text-center">
            Brak danych.
        </div>
        <div v-else class="overflow-x-auto rounded-md">
            <table class="w-full border border-gray-300">
                <thead>
                    <tr class="bg-gray-200 text-center">
                        <th class="border p-2">Produkt</th>
                        <th class="border p-2">Netto</th>
                        <th class="border p-2">Waluta</th>
                        <th class="border p-2">VAT</th>
                        <th class="border p-2">Nazwa VAT</th>
                        <th class="border p-2">Podatek</th>
                        <th class="border p-2">Brutto</th>
                        <th class="border p-2">IP</th>
                        <th class="border p-2">Data</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="d in h.data" :key="d.id" class="text-center bg-coditive_gray">
                    <td class="border p-2">{{ d.name }}</td>
                    <td class="border p-2">{{ d.netto }}</td>
                    <td class="border p-2">{{ d.currency }}</td>
                    <td class="border p-2">{{ d.vat }}</td>
                    <td class="border p-2">{{ d.vat_name }}</td>
                    <td class="border p-2">{{ d.tax }}</td>
                    <td class="border p-2">{{ d.brutto }}</td>
                    <td class="border p-2">{{ d.user_ip }}</td>
                    <td class="border p-2">{{ d.created }}</td>
                </tr>
                </tbody>
            </table>
            <div v-if="h.loading">
                <Loader />
            </div>
            <div class="flex justify-center mt-6">
                <button
                    v-if="h.next_cursor"
                    :disabled="h.loading"
                    @click="load_more"
                    class="px-6 py-2 bg-coditive_accent text-black font-semibold rounded-md"
                    >
                    Załaduj więcej
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const h = reactive({
        data: [],
        next_cursor: null,
        loading: false,
    });

    const { data, error } = await useFetch("/api/financial-records");
    if (error.value) {
        h.data = null;
    } else if (data.value?.success) {
        h.data = data.value.data;
    } else {
        h.data = [];
    }

    if (data.value?.success) {
        h.data = data.value.data;
        h.next_cursor = data.value.next_cursor;
    }

    const load_more = async () => {
        if (!h.next_cursor) return;
        h.loading = true;

        const { data, error } = await useFetch("/api/financial-records", {
            query: { after: h.next_cursor },
        });

        h.loading = false;
        if (error.value) {
            return;
        }
        if (!data.value?.data?.length) {
            h.next_cursor = null;
            return;
        }
        h.data.push(...data.value.data);
        h.next_cursor = data.value.next_cursor;
    };
</script>