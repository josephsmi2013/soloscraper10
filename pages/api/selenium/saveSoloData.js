import { authenticate, closeDriver, getCompletedLoans, getCurrentLoans, getNewLoans } from "./selenium";
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'


export default async function handler(req, res) {

    const supabaseServerClient = createServerSupabaseClient({ req, res, });

    //use selenium to retrieve loans
    await authenticate();
    let loans = [];

    //create a supabase server client to store the available loans
    loans = await getNewLoans();    
    await supabaseServerClient.from('loans_available').delete().gte('loan_id',0);
    await supabaseServerClient.from('loans_available').insert(loans).select();

    //create a supabase server client to store the current loans
    loans = await getCurrentLoans();    
    await supabaseServerClient.from('loans_current').delete().gte('loan_id',0);
    await supabaseServerClient.from('loans_current').insert(loans).select();

    //create a supabase server client to store the completed loans
    loans = await getCompletedLoans();    
    await supabaseServerClient.from('loans_completed').delete().gte('loan_id',0);
    await supabaseServerClient.from('loans_completed').insert(loans).select();

    //Close the selenium driver
    await closeDriver();

	await res.status(200).redirect('/');

}
