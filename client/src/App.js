import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from "./components/NavBar"
import AddForm from "./components/AddForm"
import UpdateForm from "./components/UpdateForm"
import SearchForm from "./components/SearchForm"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AddForm />}/>
          <Route exact path="/update" element={<UpdateForm />}/>
          <Route exact path="/search" element={<SearchForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Add Form</Link>
//           </li>
//           <li>
//             <Link to="/update">Update Form</Link>
//           </li>
//           <li>
//             <Link to="/search">Search Form</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <AddForm />
//           </Route>
//           <Route path="/update">
//             <UpdateForm />
//           </Route>
//           <Route path="/search">
//             <SearchForm />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
