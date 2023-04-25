
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Flex, Stack, useColorModeValue, } from '@chakra-ui/react';

export default function Login() {

    const supabase = useSupabaseClient()
    
    return (
        <Flex maxH={400} flexGrow={1} justifyContent={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Flex p={8} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'}>
                <Stack spacing={4}>                
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme={'dark'} />
                </Stack>
            </Flex>
        </Flex>                            
    )
}
