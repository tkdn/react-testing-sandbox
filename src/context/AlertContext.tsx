import { createContext, useCallback, useContext, useReducer } from "react"

type AlertState = {
  show: boolean
  message: string
}
type AlertDispatch = {
  showDispatcher: (message: string) => void
  hideDispatcher: () => void
}
const initialState = {
  show: false,
  message: ""
}
const alertStateContext = createContext<AlertState>(initialState)
const alertDispatchContext = createContext<AlertDispatch>({
  showDispatcher: () => void 0,
  hideDispatcher: () => void 0
})

export const useAlertState = () => useContext(alertStateContext)
export const useAlertDispatch = () => useContext(alertDispatchContext)

export function AlertProvider({ children }: { children: JSX.Element[] | JSX.Element }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const showDispatcher = useCallback((message: string) => dispatch(showAlert(message)), [])
  const hideDispatcher = useCallback(() => dispatch(hideAlert()), [])
  return (
    <alertStateContext.Provider value={state}>
      <alertDispatchContext.Provider value={{ showDispatcher, hideDispatcher }}>
        {children}
      </alertDispatchContext.Provider>
    </alertStateContext.Provider>
  )
}

type AlertAction = ReturnType<typeof showAlert> | ReturnType<typeof hideAlert>

function reducer(state: AlertState, action: AlertAction) {
  switch (action.type) {
    case "ui/alert:show":
      return {
        ...state,
        show: true,
        message: action.payload.message
      }
    case "ui/alert:hide":
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}

function showAlert(message: string) {
  return {
    type: "ui/alert:show",
    payload: {
      message
    }
  } as const
}

function hideAlert() {
  return {
    type: "ui/alert:hide"
  } as const
}
