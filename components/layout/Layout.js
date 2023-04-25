import { Flex} from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({children}) {

  return (
    <Flex m={0} p={0} flexDirection={'column'} minH={'100vh'}>
      <Navbar />
      <Flex flexGrow={1} as={'main'}>{children}</Flex>
      <Footer />
    </Flex>
  )
}