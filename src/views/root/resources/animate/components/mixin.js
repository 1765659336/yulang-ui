export const disappear = {
    data() {
        return {
            value: true,
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.value = false;
        }, 2000);
    },
    beforeDestroy() {
        clearTimeout(this.timer);
    },
};