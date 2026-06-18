import "./App.css";
import useTrafficControl from "./hooks/useTrafficControl";

function App() {
  const { connected, dashboardState } = useTrafficControl();
  const machine = dashboardState.machines[0];

  return (
    <div className="app">
      <header className="header">
        <h1>🧵 StitchFlow Web Command Center</h1>
        <p>Real-time embroidery production monitoring</p>
        <strong>{connected ? "✅ Connected to server" : "❌ Not connected"}</strong>
      </header>

      <section className="dashboard-grid">
        <div className="card">
          <h2>{dashboardState.connectedDevices}</h2>
          <p>Connected Devices</p>
        </div>

        <div className="card">
          <h2>{dashboardState.activeJobs}</h2>
          <p>Active Jobs</p>
        </div>

        <div className="card">
          <h2>{dashboardState.alerts.length}</h2>
          <p>Machine Alerts</p>
        </div>
      </section>

      <section className="machine-panel">
        <h2>Machine Command Overview</h2>

        <div className="machine-grid">
          <div>
            <strong>Status</strong>
            <p>{machine.status}</p>
          </div>

          <div>
            <strong>Speed</strong>
            <p>{machine.speed}%</p>
          </div>

          <div>
            <strong>Thread Tension</strong>
            <p>{machine.tension}</p>
          </div>

          <div>
            <strong>Current Job</strong>
            <p>{machine.currentJob}</p>
          </div>

          <div>
            <strong>Progress</strong>
            <p>{machine.progress}%</p>
          </div>
        </div>
      </section>

      <section className="alerts-panel">
        <h2>Recent Alerts</h2>

        {dashboardState.alerts.length === 0 ? (
          <p>No alerts yet.</p>
        ) : (
          dashboardState.alerts.slice(-5).map((alert, index) => (
            <p key={index} className="alert">
              ⚠️ {alert}
            </p>
          ))
        )}
      </section>
    </div>
  );
}

export default App;