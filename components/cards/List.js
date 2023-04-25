import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import Card from './Card'


export default function List({loanType}) {
  const supabase = useSupabaseClient()
  const [loans, setLoans] = useState([])

  const [errorText, setErrorText] = useState('')  

  useEffect(() => {
    const fetchLoans = async () => {
      const { data:loans, error } = await supabase
        .from(`loans_${loanType}`)
        .select('*')
        .order('loan_id', { ascending: true })

      if (error){
        console.log('error', error)
        setErrorText('Error fetching market loans')
      }
      else  setLoans(loans);
    }

    fetchLoans()
  }, [loanType, supabase])

  return (
      <Flex p={4}>    
          <Container maxW={"10xl"} >
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {!!errorText && <Alert text={errorText} />}
              {loans.map((loan) => ( <Card key={loan.loan_id} loan={loan} /> ))}                    
            </Flex>
          </Container>
      </Flex>
  )
}

const Alert = ({ text }) => (
  <div className="rounded-md bg-red-100 p-4 my-3">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
)
