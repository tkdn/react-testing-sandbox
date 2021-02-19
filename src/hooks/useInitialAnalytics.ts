import { useEffect } from "react"

import { sendPageview, setStatus } from "~/libs/analytics"

type User = {
  id: string
  role: string
}
export function useInitialAnalytics(user: User) {
  useEffect(() => {
    setStatus(user)
    sendPageview()
  }, [])
}
