import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('auth:user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (email) => {
    const u = { email }
    setUser(u)
    localStorage.setItem('auth:user', JSON.stringify(u))
  }

  const register = (name, email) => {
    const u = { name, email }
    setUser(u)
    localStorage.setItem('auth:user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth:user')
  }

  const value = useMemo(() => ({ user, login, register, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() { return useContext(AuthContext) }
