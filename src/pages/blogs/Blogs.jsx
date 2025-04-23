import BlogsCard from "@/components/blogs/BlogsCard";
import Container from "@/components/layout/Container";
import React from "react";

const blogs = [
  {
    question: "What is useState and how does it work in React?",
    answer:
      "In React, useState is a Hook that allows developers to manage state in functional components. It returns an array with two elements: the current state value and a function to update it. When the update function is called, React re-renders the component with the new state value. This enables dynamic and interactive UI behavior, such as toggling modals, updating input values, or tracking user interactions.",
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer:
      "useEffect is a Hook used to handle side effects in functional components, such as fetching data from APIs, setting up subscriptions, or manually manipulating the DOM. It runs after the render phase and can be configured to run on every render, only once on mount, or when specific dependencies change. This helps manage lifecycle events cleanly without relying on class-based lifecycle methods.",
  },
  {
    question: "What is a custom hook in React and when should you use one?",
    answer:
      "A custom hook in React is a reusable function that starts with use and encapsulates logic involving one or more built-in hooks like useState, useEffect, etc. Custom hooks are useful when you need to reuse stateful logic across multiple components, promoting cleaner and more maintainable code. For example, you might create a useFetch hook to centralize data fetching logic.",
  },
  {
    question:
      "Difference between controlled and uncontrolled components. Which one is better?",
    answer:
      "Controlled components are React components where form data is handled by the component's state using useStat`, and the value of input fields is always driven by React. In contrast, uncontrolled components store their own state internally using refs (useRef) and do not rely on React state for value changes. Controlled components offer better control and are preferred for most forms as they make form handling predictable and easier to validate, though uncontrolled components can be simpler for quick or less complex scenarios.",
  },
  {
    question: "Tell us something about useFormStatus() in React.",
    answer:
      "useFormStatus() is a React Hook used with <form> elements, particularly in the context of Server Actions or frameworks like Next.js. It provides information about the form's current status, such as whether it's currently submitting. This can be especially helpful for showing loading indicators or disabling buttons while the form is processing, enhancing user experience during asynchronous submissions.",
  },
];

const Blogs = () => {
  return (
    <Container className="py-8 sm:py-16">
      <div className="flex flex-col gap-4">
        {blogs.length > 0 &&
          blogs.map((blog, i) => (
            <BlogsCard key={i} question={blog.question} answer={blog.answer} />
          ))}
      </div>
    </Container>
  );
};

export default Blogs;
