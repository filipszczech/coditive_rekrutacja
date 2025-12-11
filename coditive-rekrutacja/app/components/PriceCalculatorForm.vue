<template>
    <div class="max-w-lg mx-auto">
        <h2 class="text-lg md:text-2xl font-semibold mb-4">
            Kalkulator VAT
        </h2>
        <form @submit.prevent="submit_form" class="flex flex-col gap-3">
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

    const h = reactive({
        result: null,
        loading: false,
    });

    const submit_form = async () => {
        h.result = calculate();
        console.log(h.result);
        reset();
    }
</script>