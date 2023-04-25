import {Flex,Stack, IconButton} from '@chakra-ui/react';
import {useColorMode,useColorModeValue} from '@chakra-ui/react';
import { BellIcon, MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import Profile from './Profile';
import Logout from '../auth/Logout';
import Sidebar from './Sidebar';


export default function Navbar() {  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex display={'block'} bg={useColorModeValue('gray.100', 'gray.900')} px={4} as={'nav'}>
        <Flex h={16} justifyContent={'space-between'} alignItems={'center'} >
          
          <Flex alignItems={'center'}>
            <Stack direction={'row'}>
              <Sidebar />
              <Flex w={'100px'} alignItems={'center'}>Logo</Flex>
            </Stack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack spacing={5} direction={'row'} align={'center'}>
              <Profile />
              <IconButton size={'lg'} icon={<Search2Icon boxSize={9} />} rounded={'full'} aria-label='search' />
            </Stack>
          </Flex>
        

          <Flex alignItems={'center'}>
            <Stack spacing={5} direction={'row'}>  
              <Logout />                     
              <IconButton icon={<BellIcon />} rounded={'full'} aria-label='notifications'/>                
              <IconButton rounded={'full'} onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} aria-label='colorMode' />
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}