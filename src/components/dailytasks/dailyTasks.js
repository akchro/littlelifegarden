import styles from './dailytasks.module.scss'
import {TaskCard} from "@/components/taskcard/taskcard";

const DailyTasks = () => {

    const tasks = [
        {   "id": 1,
            "description": "do this thing",
            "completed": false,
        },
        {
            "id": 2,
            "description": "do ting",
            "completed": true,
        },
        {   "id": 3,
            "description": "do this thing2",
            "completed": false,
        },
        {   "id": 4,
            "description": "do this thin3",
            "completed": false,
        },
        {   "id": 5,
            "description": "do this thin4",
            "completed": false,
        },
        {   "id": 6,
            "description": "do this thing5",
            "completed": false,
        },
    ]



    const renderTasks = (tasks) => {
        let cards = []
        for (const card of tasks) {
            cards.push(<TaskCard description={card['description']} completed={card['completed']} key={card["id"]}/>)
        }
        return cards
    }

    return (
        <div className={styles.body}>
            {renderTasks(tasks)}
        </div>
    )
}

export {DailyTasks};