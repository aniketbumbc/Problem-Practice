const count = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <h3>{count}</h3>
    </>
  );
};
