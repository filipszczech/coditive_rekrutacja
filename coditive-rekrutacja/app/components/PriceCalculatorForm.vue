<template>
    <div class="max-w-xl mx-auto">
        <CoditiveHeader class="mb-4">
            <template #text>
                <h2 class="text-lg md:text-2xl font-semibold">
                    Kalkulator VAT
                </h2>
            </template>
        </CoditiveHeader>
        <form @submit.prevent="submit_form" class="flex flex-col gap-4">
            <div>
                <label class="block text-sm font-semibold mb-2">
                    Nazwa produktu:
                </label>
                <input
                    v-model="form_data.name"
                    type="text"
                    class="p-2 w-full bg-neutral-200 rounded-md"
                    required
                />
            </div>
            <div>
                <label class="block text-sm font-semibold mb-2">
                    Kwota netto:
                </label>
                <input
                    v-model.number="form_data.netto"
                    type="number"
                    step="0.01"
                    class="p-2 w-full bg-neutral-200 rounded-md"
                    required
                />
            </div>
            <div>
                <label class="block text-sm font-semibold mb-2">
                    Waluta:
                </label>
                <input
                    type="text"
                    :value="form_data.currency"
                    disabled
                    class="p-2 w-full bg-gray-200 rounded-md"
                />
            </div>
            <div>
                <label class="block text-sm font-semibold mb-2">
                    Stawka VAT:
                </label>
                <select v-model="form_data.vat" class="w-full bg-neutral-200 p-2 rounded-md">
                    <option
                        v-for="v in form_data.vat_options"
                        :key="v"
                        :value="v">
                        {{ v }}
                    </option>
                </select>
            </div>
            <button
                :disabled="h.loading"
                type="submit"
                class="bg-neutral-900 hover:bg-neutral-300 text-white hover:text-neutral-900 py-2 rounded-md mt-2 transition-all duration-300">
                Oblicz
            </button>
        </form>
        <div v-if="h.result" class="mt-6 p-3 bg-neutral-200 rounded-md text-center font-semibold">
            Cena produktu {{ h.result.name }}, wynosi: {{ h.result.brutto }} zł brutto, kwota podatku to {{ h.result.tax }} zł.
        </div>
    </div>
</template>

<script setup>
    const { form_data, calculate, reset } = useForm();
    const { show_toast } = useToast();

    const h = reactive({
        result: null,
        loading: false,
    });

    const submit_form = async () => {
        h.loading = true;
        const result = calculate();
        const { data } = await useFetch("/api/financial-records", {
            method: "POST",
            body: {
                name: result.name,
                netto: result.netto,
                currency: result.currency,
                vat: result.vat,
                vat_name: result.vat_name,
                tax: result.tax,
                brutto: result.brutto,
            },
        });
        if (data.value?.success) {
                show_toast(`Składka produktu ${result.name} została obliczona.`, "success");
                h.result = result;
                reset();
        } else {
            show_toast(data.value?.error || "Nie udało się zapisać danych", "error");
        }
        h.loading = false;
    };
</script>