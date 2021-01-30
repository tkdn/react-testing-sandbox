interface Window {
  readonly dataLayer: { [key: string]: string }[]
  readonly ga: (command: string, ...fields: unknown[]) => void
}
