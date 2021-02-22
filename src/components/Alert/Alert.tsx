import { CSSProperties } from "react"

import { useAlertState } from "~/context/AlertContext"

const styles: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "10px",
  opacity: 0.6,
  background: "red",
  color: "white",
  fontWeight: "bold"
}

export function Alert() {
  const { show, message } = useAlertState()
  if (!show) {
    return null
  }
  return <div style={styles}>{message}</div>
}
