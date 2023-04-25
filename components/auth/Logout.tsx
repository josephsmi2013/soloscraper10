import { Button } from '@chakra-ui/react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Logout() {
	const supabase = useSupabaseClient();
	const session = useSession();

	return (
		<>
			{session ? (
				<Button
					onClick={async () => {
						const { error } = await supabase.auth.signOut();
						if (error) console.log('Error logging out:', error.message);
					}}>
					Logout
				</Button>
			) : (
				<div></div>
			)}
		</>
	);
}
