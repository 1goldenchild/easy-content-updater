import { useEffect, useState } from 'react'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { supabase } from '@/integrations/supabase/client'

export const useAuth = () => {
  const { session, isLoading: isSessionLoading } = useSessionContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isSessionLoading) {
      setIsLoading(false)
    }
  }, [isSessionLoading])

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return {
    session,
    isLoading,
    signOut
  }
}