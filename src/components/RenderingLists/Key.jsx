function Key() {
  const fruits = [
    { id: 1, name: "🍎 Apple" },
    { id: 2, name: "🥭 Mango" },
    { id: 3, name: "🍌 Banana" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🍓 My Favorite Fruits</h1>

      {fruits.map((fruit) => (
        <div
          key={fruit.id}
          style={{
            backgroundColor: "#f0fdf4",
            padding: "12px",
            margin: "10px auto",
            borderRadius: "10px",
            maxWidth: "250px",
            boxShadow: "0 2px 5px #ddd",
          }}
        >
          <h2>{fruit.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Key;
