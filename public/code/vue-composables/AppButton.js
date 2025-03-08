import useClickCoordinates from "./useClickCoordinates.js";

const AppButton = {
    template: `<button :style @click.stop="remove">X</button>`,
    props: ['coordinate'],
    setup({ coordinate }) {
        const { remove } = useClickCoordinates();
        return {
            style: coordinate.style,
            remove: () => remove(coordinate),
        };
    }
}

export default AppButton;
