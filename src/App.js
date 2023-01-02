import './index.css';
import TodoApp from "./pages/todoApp";
import Home from "./pages/home"
import Appiwwyw from './pages/iwwywApp';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import ThriftingOnline from './pages/thriftingOnline';
import CrazyBgChange from './pages/crazyBgChange';


function App() {
        return(
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/react-playground' element={<Home/>} />
                        <Route exact path='/todoApp' element={<TodoApp/>} />
                        <Route exact path='/iwwywApp' element={<Appiwwyw/>}/>
                        <Route exact path='/thriftingOnline' element={<ThriftingOnline/>}/>
                        <Route exact path='/crazyBgChange' element={<CrazyBgChange/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
    )
}       

export default App;
