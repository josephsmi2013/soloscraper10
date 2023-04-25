
import { useState } from 'react';
import { ButtonGroup, Button, Stack, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Table from './table';



export default function Index() {
  const [loanType, setLoanType] = useState('completed');

  return (
    <Flex flexDirection={'column'} flexGrow={1}>

      <Stack pb={6} direction={'row'}>
          <ButtonGroup >
              <Button  size={'sm'}>Dashboard</Button>
              <Button  size={'sm'}>Data Table</Button>
          </ButtonGroup>
      </Stack> 

      <Table />

    </Flex>

  )
}
