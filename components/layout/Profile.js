import {Menu,MenuButton,Button,Avatar,Center,MenuList,MenuItem,MenuDivider} from '@chakra-ui/react';


export default function Profile() {
  

    return (
        <Menu>
            <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar src={'https://api.dicebear.com/6.x/open-peeps/svg?randomizeIds=true&seed=sexmachine'} />
                </MenuButton>
            <MenuList alignItems={'center'}>
                <br />
                <Center>
                    <Avatar size={'2xl'} src={'https://api.dicebear.com/6.x/open-peeps/svg?randomizeIds=true&seed=sexmachine'}/>
                </Center>
                <br />
                <Center>                    
                    <p>Name Here</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>My Transactions</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem onClick={() => {}}>Sign Out</MenuItem>
            </MenuList>
        </Menu>
    )
}
