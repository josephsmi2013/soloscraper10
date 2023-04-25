import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton} from '@chakra-ui/react';
import { useDisclosure, Button, Stack, Spacer} from '@chakra-ui/react';
import { useRef } from 'react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<HamburgerIcon boxSize={10} ref={btnRef} onClick={onOpen} />

			<Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader></DrawerHeader>

					<DrawerBody flexGrow={1}>
						<Stack direction={'column'}>													
							<Link href={'/'}><Button onClick={() => {onClose()}} w={'full'}>Card View</Button></Link>
							<Link href={'/charts'}><Button onClick={() => {onClose()}} w={'full'}>Chart View</Button></Link>						
							<Spacer minH={8} />
							<Link href={'../api/selenium/saveSoloData'}><Button w={'full'} colorScheme={'blue'}>Refresh Data</Button></Link>
						</Stack>
					</DrawerBody>

				</DrawerContent>
			</Drawer>
		</>
	);
}
