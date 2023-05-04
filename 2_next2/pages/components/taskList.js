import {useSelector} from "react-redux"

export default function TaskList () {
    const tasks = useSelector (state => state.profile)
    console.log (tasks)
    return (
        <div>
            {
                tasks.map(task => (
                    <div key={tasks.id}>
                        <h3>{task.nombre}</h3>
                    </div>

                ) )
            }
        </div>
    )
}