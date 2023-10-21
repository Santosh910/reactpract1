// function Car(props) {
//     return <li>I am a {props.brand}</li>;
// }

// import { useState } from "react"

// function Goal() {
//     const cars = ['ford', 'bmw', 'audi'];

//     return (
//         <>
//             <h1>who lives in my garage?</h1>
//             <ul>
//                 {cars.map((car) => 
//                 <Car brand={car} />)}
//             </ul>
//         </>
//     )
// }



// export default Goal

// function Car(props) {
//     return <li>I am a {props.brand}</li>;
// }

// function Goal() {
//     const cars = [
//         {id:1,brand :'ford'},
//         {id:2,brand :'bmw'},
//         {id:3,brand :'audi'}
//     ];

//     return (
//         <>
//             <h1>who lives in my garage?</h1>
//             <ul>
//                 {cars.map((car) => 
//                 <Car key={car.id} brand={car.brand} />)}
//             </ul>
//         </>
//     )
// }



// export default Goal


// function MyForm() {
//     const [name,setName] = useState("");

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         alert(`the name you entered was :${name} `)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label> enter your name:
//                 <input type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     )
// }

//  export default MyForm


// function MyForm() {
//     const [myCar, setMyCar] = useState("Volvo");
  
//     const handleChange = (event) => {
//       setMyCar(event.target.value)
//     }
  
//     return (
//       <form>
//         <select value={myCar} onChange={handleChange}>
//           <option value="Ford">Ford</option>
//           <option value="Volvo" selected>Volvo</option>
//           <option value="Fiat">Fiat</option>
//         </select>
//       </form>
//     )
//   }

//   export default MyForm

// import { Outlet, Link } from "react-router-dom";

// const Homepage = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Homepage</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Homepage;


const Homepage = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

export default Homepage;