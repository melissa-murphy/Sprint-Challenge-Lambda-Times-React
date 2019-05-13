1.   What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. 
    - PropTypes are built in to the React system as a method of validating data passed from one component to another. E.g., PropTypes.number assumes the data passed in that prop is a number. 

2.   Describe a life-cycle event in React? 
    - There are three phases: 
        - Render 
            - ‘Birth’ -- Items are mounted, started for the beginning of their lifecycle. Rendering can occur 

        - Pre-commit 
            - ‘Growth’ -- props, state, etc., can update here. Rendering can occur 

        - Commit 
            - ‘Death’ -- unmounting of the component 

3.  Explain the details of a Higher Order Component? 
    - HOC are components that take in a component in order to make a new component. I think of HOC as a ‘squisher’, but more accurately they are an option for increasing reusability of React code.   

4.  What are three different ways to style components in React? Explain some of the benefits of each. 
    - Technically four, if you still include regular stylesheets? (.classname) 
    - Inline styling -- camelCase className=”” 
        - Good for beginnings, small projects 

    - CSS modules - each component has its own stylesheet.  
        - Good for exportability with modules. 

    - Styled components 
        - Combines css modules and inline styling, resulting in components that are written with a mixture of JS and CSS