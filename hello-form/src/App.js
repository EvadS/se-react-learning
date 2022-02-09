import './styles/App.css';
import '../src/styles/App.css'
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ]);

    const [title, setTitle] = useState('')
    const [body, setBody]= useState();

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        };
        console.log(newPost);
        setPosts([...posts, newPost]);

        setTitle('');
        setBody('');
    }

    return (
        <div>
            <form>
                {/*упраляемый*/}
                <MyInput
                    value={title}
                    type="text"
                    placeholder="название поста"
                    onChange={e => setTitle(e.target.value)}
                />
                {/*<input*/}
                {/*    ref={bodyInputRef}*/}
                {/*type="text"*/}
                {/*/>*/}
                {/* неуправляемый/неконтроллируемый*/}
                <MyInput
                    type="text"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

            <PostList posts={posts} title="список постов 1"/>
        </div>
    );
}

export default App;
