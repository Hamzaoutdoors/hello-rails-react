const LOAD_GREETING = 'App/greetings/LOAD_GREETING';

const URL = 'http://localhost:3000/v1/greetings';

const initialState = {
    id: 1000,
    greeting: "hey mr robot"
};

export const loadGreeting = (payload) => ({
    type: LOAD_GREETING,
    payload
});

export const getGreetings = () => async (dispatch) => {
    await fetch(URL)
    .then((res) => res.json())
    .then((greeting) => dispatch(loadGreeting(greeting)))
    .catch((err) => console.log(err))
}

const greetingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GREETING:
            return action.payload[Math.floor(Math.random() * 8)]
        default:
            return state;
    }
}

export default greetingsReducer;