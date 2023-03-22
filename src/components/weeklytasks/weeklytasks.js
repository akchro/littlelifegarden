import styles from './weeklytasks.module.scss'
import {TaskCard} from "@/components/taskcard/taskcard";

const WeeklyTasks = () => {

    const tasks = [
        {
            "id": 1,
            "description": "do this thing but weekly",
            "completed": false,
        },
        {
            "id": 2,
            "description": "do ting but weekly",
            "completed": true,
        },
        {
            "id": 3,
            "description": "do this thing but weekly",
            "completed": false,
        },
    ];

    const renderTasks = (tasks) => {
        let cards = [];
        for (const card of tasks) {
            cards.push(<TaskCard description={card['description']} completed={card['completed']} key={card["id"]}/>);
        }
        return cards;
    };

    return (
        <div className={styles.body}>
            {renderTasks(tasks)}
        </div>
    );
}

export {WeeklyTasks};