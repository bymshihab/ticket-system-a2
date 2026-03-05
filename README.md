
## QnA
---
### 1. What is JSX, and why is it used?

**JSX** lets us write **HTML inside JavaScript** when using React.

Example:

```jsx
<h1>Hello</h1>
```

**Why we use it:**

* It looks like HTML, so it is **easy to read**
* It helps us **build UI faster**

---

### 2. What is the difference between State and Props?

**State**

* Data that **belongs to the component**
* It **can change**

**Props**

* Data sent from **parent to child component**
* The child **cannot change it**

Example idea:

* Parent gives props like a **gift**
* Child can **use it but not change it**

---

### 3. What is the useState hook, and how does it work?

`useState` lets a component **remember data**.

Example:

```jsx
const [count, setCount] = useState(0);
```

* `count` → the value
* `setCount` → function to change the value

When the value changes, **React updates the screen automatically**.

---

### 4. How can you share state between components?

Ways to share data:

1. **Lifting State Up**
   Move the state to the **parent component** and send it to children with props.

2. **Context API**
   Share data with many components without passing props step by step.

3. Libraries like **Redux** help manage big app data.

---

### 5. How is event handling done in React?

React handles events like **button clicks** with functions.

Example:

```jsx
<button onClick={handleClick}>Click</button>
```

```jsx
function handleClick() {
  console.log("Button clicked");
}
```

When the button is clicked, the function runs.


