function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
function App() {
  const [
    count,
    setCount
  ] = useStickyState(0, "count");

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

render(<App />);