import './styles/App.css';
import Counter from "./components/Counter";
import '../src/styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    return (
        <div>
            <PostItem post={{id: 1, title:'java script', body:'Description'}}/>
            <PostItem post={{id: 2, title:'java script', body:'Description'}}/>
            <PostItem post={{id: 3, title:'java script', body:'Description'}}/>

        </div>

    );
}

export default App;
