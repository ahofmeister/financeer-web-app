import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

import {Database} from "@/supabase/types";

const supabase = createServerComponentClient<Database>({cookies})

export const getTransactions = async () => {
    const {data, error} = await supabase.from('transactions').select("*")

    if (error) {
        throw error
    }
    return data
}
