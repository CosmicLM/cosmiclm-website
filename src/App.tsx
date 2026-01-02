// The Root Component
// Currently acts as a simple container. 
// Later, this will hold your <BlochSphereScene /> and UI overlays.

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      {/* Placeholder for the visualizer */}
      <h1 style={{ color: 'white', fontFamily: 'sans-serif', padding: '20px' }}>
        System Ready
      </h1>
    </div>
  );
}

export default App;