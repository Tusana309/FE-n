import { getAccessTokenFromLS, getProfileFromLS } from 'src/utills/auth'
import { createContext, useState } from 'react'
// import { User } from 'src/types/user.type'
interface AppContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: any | null
  setProfile: React.Dispatch<React.SetStateAction<any | null>>
  ticket: any | null
  setTicket: React.Dispatch<React.SetStateAction<any | null>>
  message: any | null
  setMessage: React.Dispatch<React.SetStateAction<any | null>>
  id: any | null
  setId: React.Dispatch<React.SetStateAction<any | null>>
}
const initialAppContext: AppContextType = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  ticket: [],
  setTicket: () => null,
  message: [],
  setMessage: () => null,
  id: [],
  setId: () => null
}
export const AppContext = createContext<AppContextType>(initialAppContext)
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<any | null>(initialAppContext.profile)
  const [ticket, setTicket] = useState<any | null>(initialAppContext.ticket)
  const [message, setMessage] = useState<any | null>(initialAppContext.message)
  const [id, setId] = useState<any | null>(initialAppContext.id)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        id,
        setId,
        setIsAuthenticated,
        profile,
        setProfile,
        ticket,
        setTicket,
        message,
        setMessage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
