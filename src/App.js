import './index.css';
import TodoApp from "./pages/todoApp";
import Home from "./pages/home"
import Appiwwyw from './pages/iwwywApp';
import {BrowserRouter , Routes , Route , HashRouter} from "react-router-dom";


function App() {
        return(
            <>
                <HashRouter>
                    <Routes>
                        <Route exact path='/react-playground' element={<Home/>} />
                        <Route exact path='/todoApp' element={<TodoApp/>} />
                        <Route exact path='/iwwywApp' element={<Appiwwyw/>}/>
                    </Routes>
                </HashRouter>
            </>
    )
}       

export default App;
