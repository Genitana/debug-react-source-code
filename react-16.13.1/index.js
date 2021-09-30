function App() {
    const [count, setCount] = React.useState(0)
    // const [num, setNum] = React.useState(100)
    // const [test, setTest] = useTest('aa');
    return (
        <div>
            <h1>
                {count}
                <button onClick={() => {
                    setCount(v => v + 1);
                    setCount(v => v + 1)
                    }}> + </button>
            </h1>
            <ComponentFunction />
            <ComponentClass />
            
        </div>)
}

function ComponentFunction() {
    console.log('come in ComponentFunction...');
    
    return <div><h2>ComponentFunction</h2></div>
}
class ComponentClass extends React.Component {
    
    componentDidMount(){
        console.log("DidMount..");
    }

    componentDidUpdate(){
        console.log('DidUpdate..');
    }

    render(){
        return <div><h1>ComponentClass</h1></div>
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