export type Json = | string | number | boolean | null | { [key: string]: Json } | Json[]

export type AvailableLoans = Database['public']['Tables']['loans_available']['Row']
export type CurrentLoans = Database['public']['Tables']['loans_current']['Row']
export type CompletedLoans = Database['public']['Tables']['loans_completed']['Row']

export interface Database {
  public: {
    Tables: {
      loans_available: {
        Row: {
          loan_id: number        
          loan_amount: string
          loan_lender_tip: string
          loan_reason: string
          loan_due_date: string
          requester_name: string
          requester_score: string
          requester_loans_repaid: string
          inserted_at: string          
        }
        Insert: {
          loan_id?: number        
          loan_amount?: string
          loan_lender_tip?: string
          loan_reason?: string
          loan_due_date?: string
          requester_name?: string
          requester_score?: string
          requester_loans_repaid?: string
          inserted_at?: string    
        }
        Update: {
          loan_id?: number        
          loan_amount?: string
          loan_lender_tip?: string
          loan_reason?: string
          loan_due_date?: string
          requester_name?: string
          requester_score?: string
          requester_loans_repaid?: string
          inserted_at?: string   
        }
      },
      loans_current: {
        Row: {
          loan_id: number        
          loan_amount: string
          loan_lender_tip: string
          loan_reason: string
          loan_due_date: string
          requester_name: string
          requester_score: string
          requester_loans_repaid: string
          inserted_at: string
          user_id: string          
        }
        Insert: {
          loan_id?: number        
          loan_amount?: string
          loan_lender_tip?: string
          loan_reason?: string
          loan_due_date?: string
          requester_name?: string
          requester_score?: string
          requester_loans_repaid?: string
          inserted_at?: string
          user_id: string            
        }
        Update: {
          loan_id?: number        
          loan_amount?: string
          loan_lender_tip?: string
          loan_reason?: string
          loan_due_date?: string
          requester_name?: string
          requester_score?: string
          requester_loans_repaid?: string
          inserted_at?: string  
          user_id: string            
        }
      },
      loans_completed: {
        Row: {
          loan_id: number        
          loan_amount: string
          loan_lender_tip: string
          loan_reason: string
          loan_due_date: string
          requester_name: string
          requester_score: string
          requester_loans_repaid: string
          inserted_at: string
          user_id: string                   
        }
        Insert: {
          loan_id?: number        
          loan_amount?: string
          loan_lender_tip?: string
          loan_reason?: string
          loan_due_date?: string
          requester_name?: string
          requester_score?: string
          requester_loans_repaid?: string
          inserted_at?: string
          user_id: string              
        }
        Update: {
          loan_id?: number        
          loan_amount?: string
          loan_lender_tip?: string
          loan_reason?: string
          loan_due_date?: string
          requester_name?: string
          requester_score?: string
          requester_loans_repaid?: string
          inserted_at?: string
          user_id: string             
        }
      },      
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
