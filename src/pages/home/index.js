import Head from 'next/head';
import Image from 'next/image';
import {Inter} from '@next/font/google';
import styles from '@/styles/Home.module.scss';
import {DailyTasks} from "@/components/dailytasks/dailyTasks";
import {useState} from "react";
import {WeeklyTasks} from "@/components/weeklytasks/weeklytasks";
import {MonthlyTasks} from "@/components/monthlytasks/monthlytasks";
import Link from "next/link";


export default function Index() {

    const [active, setActive] = useState("DailyTasks");

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="littlelifegarden home"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.content}>
                <div className={styles.taskbar}>
                    <button onClick={() => setActive("DailyTasks")}>Daily Tasks</button>
                    <button onClick={() => setActive("WeeklyTasks")}>Weekly Tasks</button>
                    <button onClick={() => setActive("MonthlyTasks")}>Monthly Tasks</button>
                    <Link href={"/home/garden"}><button>My Garden</button></Link>
                </div>

                <div className={styles.taskBody}>
                    {active === "DailyTasks" && <DailyTasks/>}
                    {active === "WeeklyTasks" && <WeeklyTasks/>}
                    {active === "MonthlyTasks" && <MonthlyTasks/>}
                </div>
            </div>

        </>
    );
}
