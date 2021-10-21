function App() {
    console.log('APP() ');
    
    const [count, setCount] = React.useState(0)
    // const [num, setNum] = React.useState(100)
    // const [test, setTest] = useTest('aa');

    const [state, dispatch] = React.useReducer(reducer, {num: 0}); 

    // useMemo不给依赖参数每次都会执行，给[]则执行且只会执行一次
    const memoValue = React.useMemo(() => {
        console.log('usememo*****');
        return 111;         
    }, []);

    const refEle = React.useRef({test:111});
    
    console.log('refEle === window.refEle', refEle === window.refEle);
    

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
            // return {num: state.num };
            return state;
        case 'decrement': 
            return {num: state.num - 1};
        default: 
            throw new Error();  
    }
}

function ComponentFunction() {
    console.log('come in ComponentFunction...');
    
    const [num, setnum] = React.useState(100);
    const [num2, setnum2] = React.useState(100);

    return (
        <div>
            <h1>ComponentFunction</h1>
            {num}
            <button onClick={() => setnum(100)}>function add（值不变）,不触发任何更新</button>
            <div>
                {num2}
                <button onClick={() => setnum2(old => old + 1)}>function add（子组件更新，不会引起父组件更新）</button>
            </div>
        </div>)
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
            {this.state.num2}
            <button onClick={() => this.setState({})}>Class add（class调用了setState就会引起更新，子组件更新，不会引起父组件更新）</button>
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