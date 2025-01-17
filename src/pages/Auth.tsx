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
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Access your personalized numerology analysis
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow p-6 border border-white/10">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#8B5CF6',
                    brandAccent: '#7C3AED',
                  },
                },
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