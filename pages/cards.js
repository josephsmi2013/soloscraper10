import { useSession} from '@supabase/auth-helpers-react'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Login from '@/components/auth/Login'
import CardsIndex from '@/components/cards/Index'


export default function Cards() {
  const session = useSession()

  return (
      <Flex flexGrow={1} p={6}>
        <Head>
          <title>Soloscraper 10</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {!session ? (<Login /> ) : (<CardsIndex />)}
      </Flex>
  )
}
