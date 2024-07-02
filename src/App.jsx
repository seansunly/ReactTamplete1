
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementAmount, seleteValue } from './reducs/feature/countslice';
import { Button } from "flowbite-react";

function App() {
  const dispatch = useDispatch();
  // const [incresment,setIncresment]=useState(+1)
  // const [decresmen,setDecresme]=useState(-1)
  // const [incresmentAmount, setIncresmentAmount] = useState(10);

  // const counts = useSelector((state) => state.counter); //((state) => state.count); state.count is in store
  const counts = useSelector(seleteValue);
  console.log("count :", counts);


  return (
    <>
      <h1 className=" text-3xl text-blue-600 text-center">
        hello sunly aly first time in reduc tookit
      </h1>
      <h2 className="text-3xl text-blue-600 text-center">{counts}</h2>
      <div className=" flex-wrap mx-5">
        <Button onClick={() => dispatch(increment())} className=" text-cyan-600">
          incresment by 1
        </Button>
        <Button onClick={()=>dispatch(decrement())} className=" text-cyan-600">decrespen by 1</Button>
        <Button onClick={()=>dispatch(incrementAmount(10))} className=" text-cyan-600">incresmentAmount 10</Button>
      </div>
    </>
  );
}

export default App
