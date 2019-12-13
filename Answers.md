1. What problem does the context API help solve?

With Context API you no longer have to pass props down from component to component. We can now store data on a context object, and retrieve that data in the necessary components from the context object, not props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is simply an object with up to two properties, a type property and an optional payload property. The type property is a string that explains what interaction just happened. The payload property is data that goes along with that interaction.

Reducers calculate the new version of state based on the current state and a given Action.

The store contains our application state. It is known as the single source of truth because the data is in one spot and it is immutable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is shared across an application whereas component state is localized to a single component. 
When we have state that is needed in multiple components we would use Application state but when don’t need state except in that one component we would just use Component State, something like a counter.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that provides the ability to handle asynchronous operations inside our Action Creators.  In these functions we can then pass methods such as dispatch. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management is probably Redux. I like that the state and actions are stored in one place and you can pass it to any component using your connect method and passing in state as props.
