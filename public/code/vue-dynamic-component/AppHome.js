import useClickCoordinates from "./useClickCoordinates.js";
import AppButton from "./AppButton.js";

const AppHome = {
    template: `
      <div>
        <app-button
          v-for="coordinate in coordinates"
          :coordinate :key="coordinate.key">X</app-button>
      </div>
    `,
    setup() {
        const { coordinates } = useClickCoordinates();
        return { coordinates };
    },
    components: {
        'app-button': AppButton,
    },
}

export default AppHome;
