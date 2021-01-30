const tracker = ""
const ga = typeof window !== "undefined"
    ? window?.ga || function(){}
    : function(){}

export function setStatus(status: Record<string, unknown>){
    ga(`${tracker}set`, status)
}

export function sendEvent(
    action: string,
    category: string,
    fields?: string | Record<string, unknown>
) {
    ga(`${tracker}event`, action, category, fields)
}

export function sendPageview() {
    ga("send", "pageview")
}
