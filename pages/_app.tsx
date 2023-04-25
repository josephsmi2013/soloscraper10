
import type { AppProps } from 'next/app'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from '@/lib/initSupabase'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <SessionContextProvider supabaseClient={supabase} >
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>

    </SessionContextProvider>

  )
}

