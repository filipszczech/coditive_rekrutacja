import { computed } from "vue";

export const useForm = () => {
    const default_data = {
        name: '',
        netto: null,
        currency: 'PLN',
        vat: '23%',
        vat_options: ['23%', '22%', '8%', '7%', '5%', '3%', '0%', 'zw.', 'np.', 'o.o.'],
    };

    const form_data = reactive({ ...default_data });

    const vat_number = computed(() => {
        const n = form_data.vat.match(/(\d+)%/);
        return n ? parseInt(n[1]) : 0;
    });

    const netto_number = computed(() => {
        const n = parseFloat(form_data.netto);
        return isNaN(n) ? 0 : n;
    })

    const tax_calculated = computed(() => {
        return +(netto_number.value * (vat_number.value / 100)).toFixed(2);
    })

    const brutto_calculated = computed(() => {
        return +(netto_number.value + tax_calculated.value).toFixed(2);
    })

    const calculate = () => {
        return {
            name: form_data.name,
            netto: netto_number.value,
            currency: form_data.currency,
            vat: vat_number.value,
            vat_name: form_data.vat,
            tax: tax_calculated.value,
            brutto: brutto_calculated.value,
        }
    }

    const reset = () => {
        Object.assign(form_data, { ...default_data });
    };

    return {
        form_data,
        calculate,
        tax_calculated,
        brutto_calculated,
        reset,
    }
}