# React useCallback – Real-World Example

This project demonstrates **why and where `useCallback` is used in React**
using a **real-world Notification Settings example**.

The focus of this project is **performance optimization** when passing
functions from a **parent component to a child component**.

---

## 🚀 What is useCallback?

`useCallback` is a React hook used to **memoize a function reference**.

It ensures that a function is **not recreated on every re-render**
unless its dependencies change.

### One-line definition:
> useCallback is used to prevent unnecessary re-renders caused by changing function references.

---

## ❓ Why do we need useCallback?

In React:
- Components re-render when state or props change
- Functions inside components are **re-created on every render**

When a function is passed to a **child component**:
- A new function reference can cause the child to re-render unnecessarily

👉 This can hurt performance in **large applications**.

---

## ✅ Solution: useCallback

`useCallback` keeps the **same function reference**
until its dependency values change.

This works best with `React.memo` on child components.

---

## 🌍 Real-World Use Case in This Project

### Scenario:
- A **Settings page** with a notification toggle
- A **parent component** re-renders frequently (counter updates)
- A **child component** receives a toggle function as a prop

### Goal:
- Prevent the child component from re-rendering
- Re-render only when toggle state actually changes

---

## 🧠 Key Concepts Demonstrated

- Parent → Child communication
- Function reference equality
- `useCallback` for function memoization
- `React.memo` for child component optimization
- Real performance benefit (check console logs)

---

## 📂 Project Structure

