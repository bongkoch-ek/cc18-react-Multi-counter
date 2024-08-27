
function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 0 }
    ])
    let lastId = 1
    const updateCounter = (id, num) => {
        // console.log(id)
        let idx = counters.findIndex(el => el.id === id)
        // console.log(idx)
        const newCounter = [...counters]
        if (newCounter[idx].number + num < 0) return
        newCounter[idx].number += num
        setCounters(newCounter)
        console.log(counters)
    }

    const addClick = () => {
        let lastId = counters.reduce((pre, curr) => { return curr.id }, 0)
        setCounters([...counters, { id: lastId + 1, number: 0 }])
    }

    const delCounter = (delId) => {
        setCounters(counters.filter(el => el.id !== delId))
    }
    return (
        <div className='app'>
            <h1 className="show-sum">Sum = {counters.reduce((pre, curr) => { return pre + curr.number }, 0)} </h1>
            <button className="btn-add" onClick={addClick}>Add Counter</button>
            {
                counters.map(el => (
                    <Counter key={el.id} item={el} udCounter={updateCounter} delCounter={delCounter}/>
                ))
            }
        </div>
    )
}

function Counter(props) {
    const { item, udCounter,delCounter } = props
    return (
        <div className='counter'>
            <button onClick={() => { udCounter(item.id, -1) }}> - </button>
            <h2 >{item.number}</h2>
            <button onClick={() => { udCounter(item.id, 1) }}> + </button>
            <button onClick={() => { udCounter(item.id, -item.number) }}> C </button>
            <button onClick={() => { delCounter(item.id) }}> X </button>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)