1. What problem does the context API help solve?

    It allows you to bring state directly to any component under the provider solving the issue of prop drilling in normal react.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Store is a file which contains all the data for a redux application and all modifications of that data is done in the store. All data is passed from the store to the rest of the application making it the single source of truth.
    Actions send payload data and a type property to a reducer. 
    Reducers are functions that use the type property of the action as the argument for a switch statement which will determine which changes to apply to the state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global which means any component can access the state if it is connected properly.
    Component state is state that is bound to a component.
    Application state should be the standard for controlling state in your application.
    You can use component state in a form which generally only needs one piece of state that does not usually interact with the rest of the app.
    Or in the case of a small app where you dont need to go through the effort of creating an application state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk allows us to pass functions into our action creators instead of an object. This allows us to dispatch synchronous actions after an asynchronous function happens.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like context api because you can set it up very quickly and the implementation of passing state is very simple. Using redux you need a lot of extra files and logic to do the same task.