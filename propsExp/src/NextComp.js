import NextToNextComp from "./NextToNextComp";


function NextComp(props){
    console.log(props.count)
  return(
    <>
      <NextToNextComp  count2 = {props.count}/>
    </>
  )
}

export default NextComp;
