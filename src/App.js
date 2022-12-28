import './index.css';
import TodoApp from "./pages/todoApp";
import Home from "./pages/home"
import Appiwwyw from './pages/iwwywApp';
import {BrowserRouter , Routes , Route} from "react-router-dom";


function App() {
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/react-playground' element={<Home/>} />
                        <Route path='/todoApp' element={<TodoApp/>} />
                        <Route path='/iwwywApp' element={<Appiwwyw/>}/>
                    </Routes>
                </BrowserRouter>
            </>
    )
}       

export default App;
