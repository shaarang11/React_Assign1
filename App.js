import './App.css';
import React, {useState} from 'react';
import {useStopwatch} from 'react-timer-hook';


var obj_item = [
{id: 0, Drink_Name: 'Green Tea', Drink_Type: 'Tea', Drink_Price: '10'},
{id: 1, Drink_Name: 'Red Tea', Drink_Type: 'Tea', Drink_Price: '10'},
{id: 2, Drink_Name: 'Black Tea', Drink_Type: 'Tea', Drink_Price: '10'},
{id: 3, Drink_Name: 'White Tea', Drink_Type: 'Tea', Drink_Price: '10'},
{id: 4, Drink_Name: 'Latte', Drink_Type: 'Coffee', Drink_Price: '10'},
{id: 5, Drink_Name: 'Cappuccino', Drink_Type: 'Coffee', Drink_Price: '10'},
{id: 6, Drink_Name: 'Americano', Drink_Type: 'Coffee', Drink_Price: '10'},
{id: 7, Drink_Name: 'Espresso', Drink_Type: 'Coffee', Drink_Price: '10'}
];

var obj_add_on = [{id: 0, Add_On_Name: 'Sugar', Add_On_Price: '1'},
{id: 1, Add_On_Name: 'Honey', Add_On_Price: '1'},
{id: 2, Add_On_Name: 'Spices', Add_On_Price: '1'},
{id: 3, Add_On_Name: 'Cocoa', Add_On_Price: '1'}];

var obj_customer1 = [];
var obj_customer2 = [];
var ee1,ee2,ee3;

function App() {
  return (
    <div className="App">
          <h6>React Assignment 1 - Shaarang Dev</h6> 
          <h1>Price Calculator</h1> 
          <h3>Select a drink/Add-Ons to add to bill</h3> 
          <MyForm /> 
          <MyStopwatch />
          <h3>Add drinks to list</h3> 
          <Cpp />
          <h3>Add Add-ons to list</h3> 
          <Dpp />
          <h3>Select a drink/Add-Ons to delete from bill</h3> 
          <Display_Delete_Cpp1 />
          <Display_Delete_Dpp1/ >


    </div>
  );
}

 


function SelectDrink() {
  const [myDrink, setMyDrink] = useState("GreenTea");
  const [addon, Addon] = useState("Sugar");

  const handleChange = (event) => {
    Addon(event.target.value)
    setMyDrink(event.target.value)
  }


  return (
  <div>
  <label>Select Drink:
    <form>
      <select value={myDrink} onChange={handleChange}>
        <optgroup label="Tea">
            <option value="GreenTea">Green Tea</option>
            <option value="BlackTea">Black Tea</option>
            <option value="OolongTea">Oolong Tea</option>
            <option value="WhiteTea">White Tea</option>
        </optgroup>
        <optgroup label="Coffee">
            <option value="Latte">Latte</option>
            <option value="Cappuccino">Cappuccino</option>
            <option value="Americano">Americano</option>
            <option value="Espresso">Espresso</option>
        </optgroup>
      </select>
    </form>
  </label>
  
  <label>Select Add-Ons:
    <form>
      <select value={addon} onChange={handleChange}>
            <option value="Sugar">Sugar</option>
            <option value="Black Tea">Honey</option>
            <option value="Oolong Tea">Spices</option>
            <option value="CocoaPowder">Cocoa Powder</option>
      </select>
    </form>
  </label>
  </div>
  )
}

function fun1(obj_item, ee1, ee3)
    {
        let n = obj_item.length;
        var i = 0;
        for (i=0; i<n;i++)
            {
                if (obj_item[i].Drink_Name == ee1)
                {
                        return (String(String(ee1) + String(" ") + String(obj_item[i].Drink_Price) + String(" ") + String(ee3) + String (" ") + +String(obj_item[i].Drink_Price*ee3)));
                        
                }
            } 
    }

function fun2(obj_item, ee1, ee3)
    {
        let n = obj_item.length;
        var i = 0;
        for (i=0; i<n;i++)
            {
                if (obj_item[i].Drink_Name == ee1)
                {
                        
                        return obj_item[i].Drink_Price*ee3;
                }
            } 
    }

function fun3()
{
  var sum1 = obj_customer2.reduce((a, b) => a + b, 0)
  console.log("fun3 sum1:", sum1);
  return (
  <div class="App">
  <div>
   <p> Total List </p>
    <ul>{obj_customer1}</ul>
     <p> Total:{sum1}</p>
    </div>
   </div>
  );
}


function MyForm() {

  let [drink, setDrink] = useState("⬇️ Select a Drink ⬇️");
  let [Add, setAdd] = useState("⬇️ Select Add-Ons ⬇️");
  let [inputs, setInputs] = useState({});
  
  

  let handleDrinkChange = (e1) => {
  setDrink(e1.target.value);
  console.log("e1.target.value:",e1.target.value);
  ee1 = String(e1.target.value);
  console.log("ee1",ee1);
   };

  let handleAddChange = (e2) => {
  setAdd(e2.target.value);
  console.log("e2.target.value:",e2.target.value);
  ee2 = String(e2.target.value);
  console.log("ee2",ee2);
  };

  let handleInputChange = (e3) => {
  const name = e3.target.name;
  const value = e3.target.value;
  setInputs(values => ({...values, [name]: value}))
  console.log("e3.target.value:",e3.target.value);
  ee3 = String(e3.target.value);
  console.log("ee3",ee3);
  }

  
  const submitValue = () => { console.log("submit ee1 ee2 ee3:",ee1, ee2, ee3); 
   
    obj_customer1.push(fun1(obj_item, ee1, ee3));
    obj_customer2.push(fun2(obj_item, ee1, ee3)); let sum = 0;
    fun3();
    console.log("obj_customer1:",obj_customer1);
    console.log("obj_customer2:",obj_customer2);
    for (let i = 0; i < obj_customer2.length; i++) {
    sum += obj_customer2[i];
    }

    console.log("Total:",sum)
  }

   return (
   <div>
    <div className="App">
      <label> MyForm
        <br />
          <select onChange={handleDrinkChange}> 
            <option value= "Select a Drink "> -- Select a Drink  -- </option>
              {obj_item.map((drink) => <option value={drink.Drink_Name}>{drink.Drink_Name} {drink.Drink_Price}{"$"}</option>)}
          </select>
      </label>
      <div>You have selected {drink} {drink.Drink_Price}</div>
    </div>

    <div className="App">
      <label> 
        <br />
          <select onChange={handleAddChange}> 
            <option value= "Select Add On "> -- Select Add On  -- </option>
            {obj_add_on.map((Add) => <option value={Add.Add_On_Name}>{Add.Add_On_Name} {Add.Add_On_Price}{"$"}</option>)}
          </select>
      </label>
      <div>You have selected {Add}</div>
    </div>

    <div classname="App">
      <label>Enter Quantity:
      <input 
        type="number" 
        name="quantity" 
        value={inputs.quantity || ""} 
        onChange={handleInputChange} /> 
        <br />
      </label>
    </div>
    <button onClick={submitValue}>Submit</button>
  </div>
  );
  
  };
  /*
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Quantity:
      <input 
        type="number" 
        name="quantity" 
        value={inputs.quantity || ""} 
        onChange={handleChange} /> 
        <br />
      </label>
        <input type="submit" />
    </form>
  )*/


function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>timer</h1>
      <p>Stopwatch Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

  
function Cpp()  {
    const [did, setDid] = useState(obj_item.length);
    const [dName, setdName] = useState('');
    const [dType, setdType] = useState('');
    const [dPrice, setdPrice] = useState('');
    let [drink, setDrink] = useState("⬇️ Select a Drink ⬇️");

    let handleDrinkChange = (e) => {
    setDrink(e.target.value);};

    const submitValue = () => {
    const frmdetails = {
        'id' : did,
        'Drink_Name' : dName,
        'Drink_Type' : dType,
        'Drink_Price' : dPrice,
        }
    setDid(did + 1);    
    console.log(frmdetails);
    obj_item.push(frmdetails);
    console.log(obj_item);
  }

return(
    <>
    <hr/>
    <input type="text" placeholder="Drink Name" onChange={e => setdName(e.target.value)} />
    <input type="number" placeholder="Drink Price" onChange={e => setdPrice(e.target.value)} />
    <input type="text" placeholder="Drink Type" onChange={e => setdType(e.target.value)} />
    <button onClick={submitValue}>Submit</button>
    </>
    );

  };

function Dpp()  {
      
    const [add_id, set_add_id] = useState(obj_item.length);
    const [addName, setAddName] = useState('');
    const [addPrice, setAddPrice] = useState('');

    const submitValue = () => {
    const frmdetails = {
        'id' : add_id,
        'Add_On_Name' : addName,
        'Add_On_Price' : addPrice
        }
    set_add_id(add_id + 1);    
    console.log(frmdetails);
    obj_add_on.push(frmdetails);
    console.log(obj_add_on);
   }

    return(
    <>
    <hr/>
    <input type="text" placeholder="Add_On Name" onChange={e => setAddName(e.target.value)} />
    <input type="number" placeholder="Add_On Price" onChange={e => setAddPrice(e.target.value)} />
    <button onClick={submitValue}>Submit</button>
    </>
    ); 
};

  
  const Display_Cpp1 = () => {
  let [drink, setDrink] = useState("⬇️ Select a Drink ⬇️");
  
  let handleDrinkChange = (e) => {
  setDrink(e.target.value);
  
   };

   return (
    <div className="App">
    <label> 
    <br />
    <select onChange={handleDrinkChange}> 
      <option value= "Select a Drink "> -- Select a Drink  -- </option>
      {obj_item.map((drink) => <option value={drink.Drink_Name}>{drink.Drink_Name} {drink.Drink_Price}{"$"}</option>)}
    </select>
    </label>
    <div>You have selected {drink}</div>
    </div>
  );
  
  }

   const Display_Dpp1 = () => {
  let [Add, setAdd] = useState("⬇️ Select Add-Ons ⬇️");
  
  let handleDrinkChange = (e) => {
  setAdd(e.target.value);
  console.log("e:",e);
  console.log("e.target.value:",e.target.value);
   };

   return (
    <div className="App">
    <label> 
    <br />
    <select onChange={handleDrinkChange}> 
      <option value= "Select Add On "> -- Select Add On  -- </option>
      {obj_add_on.map((Add) => <option value={Add.Add_On_Name}>{Add.Add_On_Name} {Add.Add_On_Price}{"$"}</option>)}
    </select>
    </label>
    <div>You have selected {Add}</div>
    </div>
  );
  
  }

const Display_Delete_Cpp1 = () => {
  let [drink, setDrink] = useState("⬇️ Select a Drink  ⬇️");

  let handleDrinkChange = (e) => {
  setDrink(e.target.value);
  console.log("e:",e.target.value);
  var result = obj_item.find( ({ Drink_Name }) => Drink_Name === e.target.value );
  console.log("result:",result);
  let index1 = obj_item.indexOf(result);
  console.log("index1:",index1);
  var result1 = obj_item.splice(index1,1);
  console.log("result:",obj_item);
   };

   const result = obj_item.find( ({ name }) => name === drink.Drink_Name );
   console.log(result);

   return (
    <div className="App">
    <label> 
    <br />
    <select onChange={handleDrinkChange}> 
      <option value= "Select a Drink to Delete "> -- Select a Drink to Delete  -- </option>
      {obj_item.map((drink) => <option value={drink.Drink_Name}>{drink.Drink_Name}</option>)}
    </select>
    </label>
    <div>You have selected {drink}</div>
    </div>
  );
  
  }

  const Display_Delete_Dpp1 = () => {
  let [drink, setDrink] = useState("⬇️ Select Add-Ons ⬇️");

  let handleDrinkChange = (e) => {
  setDrink(e.target.value);
  console.log("e:",e.target.value);
  var result = obj_add_on.find( ({ Add_On_Name }) => Add_On_Name === e.target.value );
  console.log("result:",result);
  let index1 = obj_add_on.indexOf(result);
  console.log("index1:",index1);
  var result1 = obj_add_on.splice(index1,1);
  console.log("result:",obj_add_on);
   };


   return (
    <div className="App">
    <label> 
    <br />
    <select onChange={handleDrinkChange}> 
      <option value= "Select Add-Ons to Delete "> -- Select Add-Ons to Delete  -- </option>
      {obj_add_on.map((drink) => <option value={drink.Add_On_Name}>{drink.Add_On_Name}</option>)}
    </select>
    </label>
    <div>You have selected {drink}</div>
    </div>
  );
  
  }

export default App;


