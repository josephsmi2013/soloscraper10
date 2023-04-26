
import { useState } from 'react';
import { ButtonGroup, Button, Stack, Flex } from '@chakra-ui/react';
import Wrapper from './Wrapper';


export default function Index() {
  const [loanType, setLoanType] = useState('completed');

  return (
    <Flex flexDirection={'column'} flexGrow={1}>

      <Stack pb={6} direction={'row'}>
          <ButtonGroup >
              <Button onClick={() => setLoanType('available')} size={'sm'}>Available Loans</Button>
              <Button onClick={() => setLoanType('current')} size={'sm'}>Current Loans</Button>
              <Button onClick={() => setLoanType('completed')} size={'sm'}>Completed Loans</Button>
          </ButtonGroup>
      </Stack> 

      <Wrapper loanType={loanType} />

    </Flex>

  )
}
