import AppButton from "./AppButton.js";
import useClickCoordinates from "./useClickCoordinates.js";

const App = {
    setup() {
        const { coordinates } = useClickCoordinates();
        return { coordinates };
    },
    components: {
        'app-button': AppButton,
    }
}

export default App;
