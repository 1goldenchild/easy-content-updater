import { useEffect } from 'react'
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'

const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { session } = useAuth()
  const from = (location.state as any)?.from?.pathname || '/portal'

  useEffect(() => {
    if (session) {
      navigate(from, { replace: true })
    }
  }, [session, navigate, from])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your personalized numerology analysis
          </p>
        </div>
        
        <div className="mt-8">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'rgb(147 51 234)',
                    brandAccent: 'rgb(126 34 206)',
                    inputBackground: 'rgb(32 32 35)',
                    inputText: 'white',
                    inputPlaceholder: 'rgb(156 163 175)',
                    inputBorder: 'rgb(55 65 81)',
                    inputBorderHover: 'rgb(75 85 101)',
                    inputBorderFocus: 'rgb(147 51 234)',
                  },
                },
              },
              className: {
                container: 'auth-container',
                label: 'text-foreground',
                button: 'auth-button',
                anchor: 'text-purple-500 hover:text-purple-400',
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  )
}

export default Auth