import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
           <h2 className='text-xl font-bold m-4'>1. When should you use context API?</h2> 
           <p className='m-4'>The Context API is a feature in React that allows data to be shared between components without having to pass props down the component tree manually.</p>
           <h2 className='text-xl font-bold m-4'>2. What is a custom hook?</h2>
           <p className='m-4'>A custom hook is a reusable function in React that can encapsulate stateful logic and be used in multiple components. Custom hooks allow developers to extract common logic from components and reuse it in a modular and scalable way.</p>
           <h2 className='text-xl font-bold m-4'>3. What is useRef?</h2>
           <p className='m-4'>useRef is a hook in React that allows you to create a mutable reference that persists across renders. It returns an object with a single property, current, which can be used to store and retrieve a value that is not affected by component re-renders.</p>
           <h2 className='text-xl font-bold m-4'>4. What is useMemo?</h2>
           <p className='m-4'>useMemo is a hook in React that allows you to memoize a function's return value and optimize the performance of your components.</p>
        </div>
    );
};

export default Blog;