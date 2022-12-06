import { createContext, ReactNode, useContext, useState } from 'react'

interface UserSessionContextData {
  session: {
    data?: {
      name: string
      email: string
      password: string
      token: string
      status: boolean
    } | null
    email?: string | null
  }
  setSession: (
    session: {
      data?: {
        name: string
        email: string
        password: string
        token: string
        status: boolean
      }
      email?: string
    } | null
  ) => void
}

interface UserSessionProviderProps {
  children: ReactNode
}

const UserSessionContext = createContext({} as UserSessionContextData)

export function UserSessionProvider({ children }: UserSessionProviderProps) {
  const [session, setSession] = useState(null)

  return (
    <UserSessionContext.Provider value={{ session, setSession }}>
      {children}
    </UserSessionContext.Provider>
  )
}

export const useSession = () => useContext(UserSessionContext)
