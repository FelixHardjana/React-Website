// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App(){

  // let items = [
  //     'New York',
  //     'San Francisco',
  //     'Tokyo',
  //     'London',
  //     'Paris'
  //   ]
  
  //   let food = [
  //     'apple',
  //     'banana',
  //     'grapes'
  //   ]

  //   const handleSelectItem = (item: String) => {
  //     console.log(item);
  //   }

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <ListGroup items={food} heading="Foods" onSelectItem={handleSelectItem}/> */}

      <Alert text="Hello World"></Alert>
    </div>
    );
}

export default App;