import React from "react"
import { RoutesApp } from "./routes"
import { AuthProvider } from "./contexts/auth"

export const Login = () => {
  return (
    <AuthProvider>
      <RoutesApp/>
    </AuthProvider>
  )
}