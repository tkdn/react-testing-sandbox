import { useAlertState } from "~/context/AlertContext"

export function Alert() {
  const { show, message } = useAlertState()
  if (!show) {
    return null
  }
  return <div style={{ background: "red", padding: "10px" }}>{message}</div>
}
