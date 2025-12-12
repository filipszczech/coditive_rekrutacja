import { reactive } from 'vue';

const toast = reactive({
    show: false,
    message: '',
    type: 'info',
});

let timeout_id = null;

export function useToast() {
    const show_toast = (msg, type = 'info', duration = 3000) => {
        if (timeout_id) {
            clearTimeout(timeout_id);
            timeout_id = null;
        }

        toast.message = msg;
        toast.type = type;
        toast.show = true;
        
        timeout_id = setTimeout(() => {
            toast.show = false;
            timeout_id = null;
        }, duration);
    }
    return { toast, show_toast }
}
