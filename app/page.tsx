import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import {getTransactions} from "@/supabase/supabase";

export const dynamic = 'force-dynamic'

const TABLE_HEAD = ["Transaction", "Amount", "Date"];


export default async function Index() {
    const supabase = createServerComponentClient({cookies})

    const {
        data: {user},
    } = await supabase.auth.getUser()
    const transactions = await getTransactions();

    return (
        <div className={"text-white"}>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                        >
                            {head}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {transactions.map(
                    (
                        {
                            id,
                            description,
                            amount,
                            datetime,
                        },
                        index,
                    ) => {
                        const isLast = index === transactions.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={id}>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                            {description}
                                    </div>
                                </td>
                                <td className={classes}>
                                        {amount}
                                </td>
                                <td className={classes}>
                                        {datetime}
                                </td>
                            </tr>
                        );
                    },
                )}
                </tbody>
            </table>
        </div>
    )
}
