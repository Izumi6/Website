export default function SNNControls({ threshold, setThreshold, leakRate, setLeakRate, inputCurrent, setInputCurrent, metrics }) {
  return (
    <div className="lab-controls-panel">
      <div className="lab-controls-section">
        <span className="lab-controls-label">── CONTROLS ──</span>

        <div className="lab-slider-group">
          <div className="lab-slider-header">
            <label className="lab-slider-label" htmlFor="threshold">Threshold Voltage</label>
            <span className="lab-slider-value">{threshold.toFixed(2)} V</span>
          </div>
          <input
            id="threshold"
            type="range"
            min="0.3"
            max="2.0"
            step="0.05"
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
            className="lab-slider"
            aria-label="Threshold Voltage"
          />
        </div>

        <div className="lab-slider-group">
          <div className="lab-slider-header">
            <label className="lab-slider-label" htmlFor="leakRate">Leak Rate (τ decay)</label>
            <span className="lab-slider-value">{leakRate.toFixed(2)}</span>
          </div>
          <input
            id="leakRate"
            type="range"
            min="0.5"
            max="0.99"
            step="0.01"
            value={leakRate}
            onChange={(e) => setLeakRate(parseFloat(e.target.value))}
            className="lab-slider"
            aria-label="Leak Rate"
          />
        </div>

        <div className="lab-slider-group">
          <div className="lab-slider-header">
            <label className="lab-slider-label" htmlFor="inputCurrent">Input Current</label>
            <span className="lab-slider-value">{inputCurrent.toFixed(2)} mA</span>
          </div>
          <input
            id="inputCurrent"
            type="range"
            min="0.0"
            max="1.2"
            step="0.05"
            value={inputCurrent}
            onChange={(e) => setInputCurrent(parseFloat(e.target.value))}
            className="lab-slider"
            aria-label="Input Current"
          />
        </div>
      </div>

      <div className="lab-controls-section">
        <span className="lab-controls-label">── LIVE METRICS ──</span>
        <div className="lab-metrics-grid">
          <MetricBadge value={metrics.spikeRate} label="SPIKE RATE" unit="/sec" color="cyan" />
          <MetricBadge value={metrics.energyCost} label="ENERGY COST" unit="µJ" color="amber" />
          <MetricBadge value={`${metrics.efficiency}%`} label="EFFICIENCY" color="emerald" />
          <MetricBadge value={metrics.activeNeurons} label="NEURONS ACTIVE" color="blue" />
        </div>
      </div>
    </div>
  )
}

function MetricBadge({ value, label, unit = '', color = 'blue' }) {
  const colorClasses = {
    cyan: 'lab-metric-cyan',
    amber: 'lab-metric-amber',
    emerald: 'lab-metric-emerald',
    blue: 'lab-metric-blue',
  }

  return (
    <div className={`lab-metric-badge ${colorClasses[color] || ''}`}>
      <span className="lab-metric-value">{value}{unit && <small>{unit}</small>}</span>
      <span className="lab-metric-label">{label}</span>
    </div>
  )
}
