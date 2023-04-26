import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import Table from './Table'


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
      <Flex flexGrow={1} p={4}>    

            <Flex flexGrow={1} flexWrap="wrap" >
              {!!errorText && <Alert text={errorText} />}
              {loans && <Table loans={loans} />}                    
            </Flex>

      </Flex>
  )
}

const Alert = ({ text }) => (
  <div className="rounded-md bg-red-100 p-4 my-3">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
)
