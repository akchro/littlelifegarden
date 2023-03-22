import styles from './monthlytasks.module.scss';
import {TaskCard} from "@/components/taskcard/taskcard";

const MonthlyTasks = () => {

    const tasks = [
        {
            "id": 1,
            "description": "do this thing but monthly",
            "completed": false,
        },
        {
            "id": 2,
            "description": "do ting but monthly",
            "completed": false,
        },
        {
            "id": 3,
            "description": "do this thing but monthly",
            "completed": true,
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

    return (
        <div className={styles.body}>

        </div>
    );
};

export {MonthlyTasks};