
import { Flex } from "@chakra-ui/react";
import List from "./List";


export default function Wrapper({loanType}) {

  return (
    <Flex flexGrow={1} >
        <List loanType={loanType}/>
    </Flex>
  )
}
