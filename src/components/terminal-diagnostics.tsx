"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DIAGNOSTIC_LOGS = [
  { text: "> INIT system_kernel v4.2.1", type: "process" },
  { text: "> LOADING project_manifest...", type: "process" },
  { text: "> FOUND 22 deployments", type: "success" },
  { text: "> VERIFIED 19 credentials", type: "success" },
  { text: "> SCANNING threat_surface...", type: "warning" },
  { text: "> SECURE: All ports nominal", type: "success" },
  { text: "> BUILDING neural_pipeline...", type: "process" },
  { text: "> ML_MODEL accuracy: 99.2%", type: "success" },
  { text: "> WEBSOCKET bridge: ACTIVE", type: "success" },
  { text: "> UPTIME: 99.97%", type: "success" },
  { text: "> PING karim@MIU: 0.4ms", type: "process" },
  { text: "> R&D_STATUS: OPERATIONAL", type: "success" },
];

export default function TerminalDiagnostics({ isOverlay = false }: { isOverlay?: boolean }) {
  const [logs, setLogs] = useState<{ text: string; type: string }[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLog = DIAGNOSTIC_LOGS[indexRef.current % DIAGNOSTIC_LOGS.length];
      setLogs(prev => [...prev.slice(-4), nextLog]);
      indexRef.current++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`Terminal-diagnostics ${isOverlay ? 'fixed-overlay' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="Terminal-header">
        <span>SYSTEM_DIAG</span>
        <span style={{ color: '#10b981' }}>● LIVE</span>
      </div>
      <div className="Terminal-logs">
        {logs.map((log, i) => (
          <motion.div
            key={`${i}-${log.text}`}
            className={`log-entry ${log.type}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {log.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
