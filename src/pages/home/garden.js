import Head from "next/head";
import Canvas from "@/components/canvas/canvas";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import PlantObject from "@/components/plantObject/plantObject";

const Garden = () => {
    return (
        <>
            <Head>
                <title>My Garden</title>
                <meta name="description" content="littlelifegarden login page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <DndProvider backend={HTML5Backend}>

                </DndProvider>

            </div>
        </>
    )
}

export default Garden