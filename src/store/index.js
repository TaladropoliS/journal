import {createStore} from "vuex";

import journalModule from "../modules/diario/store/journal";

const store = createStore({
    modules: {
        journalModule
    }
})

export default store
