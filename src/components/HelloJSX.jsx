import { reactive } from 'vue'

export default {
    name: 'HelloJSX',
    setup(){
        const data = reactive({
            title: 'Hello JSX',
            msg: 'This is JSX component sample',
        })
        return () => (
            <div class = "alert alert-warning">
                <h1>{data.title}</h1>
                <p>{data.message}</p>
            </div>
        )
    }
}