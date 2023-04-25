
import {Stack,Heading,Text, Flex} from '@chakra-ui/react';
import {useColorModeValue} from '@chakra-ui/react';

export default function Card({ loan }) {
    return (
      <Flex display={'block'} p={6} maxW={{ base: 'full', md: '275px' }} w={'full'} bg={useColorModeValue('whiteAlpha.100', 'gray.900')} 
          boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>   

          <Stack spacing={0} align={ 'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}> {loan.requester_name} </Heading>
            <Text color={'gray.500'}>{loan.loan_reason}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{loan.loan_amount}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>Amount</Text>              

            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{loan.loan_lender_tip}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>Tip</Text>              
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{loan.requester_score}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>Score</Text>              
            </Stack>              
          </Stack>
        </Flex>   
    )
}
