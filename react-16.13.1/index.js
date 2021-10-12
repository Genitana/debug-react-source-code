function App() {
    const [count, setCount] = React.useState(0)
    // const [num, setNum] = React.useState(100)
    // const [test, setTest] = useTest('aa');

    const [state, dispatch] = React.useReducer(reducer, {num: 0}); 

    React.useEffect(() => {
        console.log('useEffect');
        
        return () => {
            console.log('cleanup',count);
            
        }
    }, [])
    return (
        <div>
            <h1>
                {count}
                <button onClick={() => {
                    setCount(v => v + 1);
                    setCount(v => v + 1)
                    }}> + </button>
            </h1>
            <h1>
                {state.num}
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            </h1>
            <ComponentFunction />
            <ComponentClass />
            
        </div>)
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment': 
            return {num: state.num };
        case 'decrement': 
            return {num: state.num - 1};
        default: 
            throw new Error();  
    }
}

function ComponentFunction() {
    console.log('come in ComponentFunction...');
    
    return <div><h2>ComponentFunction</h2></div>
}
class ComponentClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            num2:0,
        }
    }

    componentDidMount(){
        console.log("componentDidMount..");
    }

    componentDidUpdate(){
        console.log('DidUpdate..');
    }

    render(){
        return (<div>
            <h1>ComponentClass</h1>
            <h2>{this.state.num2}</h2>
            <button onClick={() => this.setState({})}>add</button>
            </div>)
    }
}

// function useTest(initialState) {
//     const [tmp,setTmp] = React.useState(initialState);

//     const updateTmp = (value) => {
//         console.log(value);
//         setTmp(value);
//     }
//     return [tmp, updateTmp];
// }

ReactDOM.render(<App/>, document.querySelector('#app'))