const tracker = ""
const fallbackFn = (command: string, ...fields: unknown[]) => {
  console.log(`window.ga(`, command, ...fields, `)`)
}
const ga = typeof window !== "undefined" ? window?.ga || fallbackFn : fallbackFn

export function setStatus(status: Record<string, unknown>) {
  ga(`${tracker}set`, status)
}

export function sendEvent(action: string, category: string, fields?: string | Record<string, unknown>) {
  ga(`${tracker}event`, action, category, fields)
}

export function sendPageview() {
  ga("send", "pageview")
}
