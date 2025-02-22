export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      car_brands: {
        Row: {
          brand_name: string
          chinese_zodiac: string
          created_at: string
          founding_year: number
          id: string
        }
        Insert: {
          brand_name: string
          chinese_zodiac: string
          created_at?: string
          founding_year: number
          id?: string
        }
        Update: {
          brand_name?: string
          chinese_zodiac?: string
          created_at?: string
          founding_year?: number
          id?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          metadata: Json | null
          stripe_customer_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          stripe_customer_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      email_sequence_status: {
        Row: {
          created_at: string
          id: string
          last_email_sent: string | null
          scheduled_for: string | null
          sent: boolean | null
          sequence_position: number
          user_reading_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_email_sent?: string | null
          scheduled_for?: string | null
          sent?: boolean | null
          sequence_position?: number
          user_reading_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_email_sent?: string | null
          scheduled_for?: string | null
          sent?: boolean | null
          sequence_position?: number
          user_reading_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_sequence_status_user_reading_id_fkey"
            columns: ["user_reading_id"]
            isOneToOne: false
            referencedRelation: "user_readings"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_users: {
        Row: {
          created_at: string
          date_of_birth: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          date_of_birth: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          date_of_birth?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          chinese_zodiac: string | null
          created_at: string
          date_of_birth: string | null
          id: string
          life_path: number | null
          partial_energy: number | null
          secret_number: number | null
        }
        Insert: {
          chinese_zodiac?: string | null
          created_at?: string
          date_of_birth?: string | null
          id: string
          life_path?: number | null
          partial_energy?: number | null
          secret_number?: number | null
        }
        Update: {
          chinese_zodiac?: string | null
          created_at?: string
          date_of_birth?: string | null
          id?: string
          life_path?: number | null
          partial_energy?: number | null
          secret_number?: number | null
        }
        Relationships: []
      }
      user_readings: {
        Row: {
          created_at: string
          date_of_birth: string
          email: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          date_of_birth: string
          email: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          date_of_birth?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_scheduled_jobs: {
        Args: {
          p_pattern: string
        }
        Returns: {
          jobname: string
          schedule: string
          command: string
        }[]
      }
      schedule_email: {
        Args: {
          p_job_name: string
          p_schedule: string
          p_command: Json
        }
        Returns: string
      }
      unschedule_job: {
        Args: {
          p_job_name: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
