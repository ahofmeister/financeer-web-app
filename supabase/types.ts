export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          color: string | null
          created_at: string | null
          id: number
          name: string | null
          parent_id: number | null
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          parent_id?: number | null
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          parent_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          firstName: string | null
          id: string
          lastName: string | null
        }
        Insert: {
          firstName?: string | null
          id: string
          lastName?: string | null
        }
        Update: {
          firstName?: string | null
          id?: string
          lastName?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          amount: number | null
          category: number | null
          created_at: string | null
          datetime: string | null
          description: string
          id: number
          user_id: string
        }
        Insert: {
          amount?: number | null
          category?: number | null
          created_at?: string | null
          datetime?: string | null
          description: string
          id?: number
          user_id: string
        }
        Update: {
          amount?: number | null
          category?: number | null
          created_at?: string | null
          datetime?: string | null
          description?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_category_fkey"
            columns: ["category"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      pg_stat_monitor: {
        Row: {
          application_name: string | null
          blk_read_time: number | null
          blk_write_time: number | null
          bucket: number | null
          bucket_start_time: string | null
          calls: number | null
          client_ip: unknown | null
          cmd_type: number | null
          cmd_type_text: string | null
          comments: string | null
          cpu_sys_time: number | null
          cpu_user_time: number | null
          datname: unknown | null
          elevel: number | null
          local_blks_dirtied: number | null
          local_blks_hit: number | null
          local_blks_read: number | null
          local_blks_written: number | null
          max_exec_time: number | null
          max_plan_time: number | null
          mean_exec_time: number | null
          mean_plan_time: number | null
          message: string | null
          min_exec_time: number | null
          min_plan_time: number | null
          planid: string | null
          plans_calls: number | null
          query: string | null
          query_plan: string | null
          queryid: string | null
          relations: string[] | null
          resp_calls: string[] | null
          rows_retrieved: number | null
          shared_blks_dirtied: number | null
          shared_blks_hit: number | null
          shared_blks_read: number | null
          shared_blks_written: number | null
          sqlcode: string | null
          state: string | null
          state_code: number | null
          stddev_exec_time: number | null
          stddev_plan_time: number | null
          temp_blks_read: number | null
          temp_blks_written: number | null
          top_query: string | null
          top_queryid: string | null
          toplevel: boolean | null
          total_exec_time: number | null
          total_plan_time: number | null
          userid: unknown | null
          wal_bytes: number | null
          wal_fpi: number | null
          wal_records: number | null
        }
        Relationships: []
      }
      pg_stat_monitor_settings: {
        Row: {
          default_value: string | null
          description: string | null
          maximum: number | null
          minimum: number | null
          name: string | null
          options: string | null
          restart: string | null
          value: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      available_months_and_years: {
        Args: Record<PropertyKey, never>
        Returns: {
          month: number
          year: number
        }[]
      }
      categories_total_by_date: {
        Args: {
          datefrom: string
          dateto: string
        }
        Returns: {
          name: string
          sum: number
          month: number
          year: number
        }[]
      }
      category_total: {
        Args: {
          categoryid: number
        }
        Returns: {
          sum: number
          month: number
          year: number
        }[]
      }
      decode_error_level: {
        Args: {
          elevel: number
        }
        Returns: string
      }
      get_cmd_type: {
        Args: {
          cmd_type: number
        }
        Returns: string
      }
      get_histogram_timings: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_state: {
        Args: {
          state_code: number
        }
        Returns: string
      }
      histogram: {
        Args: {
          _bucket: number
          _quryid: string
        }
        Returns: Record<string, unknown>[]
      }
      pg_stat_monitor_internal: {
        Args: {
          showtext: boolean
        }
        Returns: Record<string, unknown>[]
      }
      pg_stat_monitor_reset: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      pg_stat_monitor_settings: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      pg_stat_monitor_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      range: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      transactions_by_category: {
        Args: {
          datefrom: string
          dateto: string
        }
        Returns: {
          id: string
          name: string
          total: number
        }[]
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

