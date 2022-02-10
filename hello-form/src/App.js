import './styles/App.css';
import '../src/styles/App.css'
import {useMemo, useRef, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'delphi', body: 'Description'},
        {id: 2, title: 'JavaScript ', body: 'JavaScript'},
        {id: 3, title: 'Python ', body: 'Description 3'}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const  sortedAndSearchingPosts = usePosts(posts, filter.sort, filter.query);



    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">

            <MyButton
                style={{marginTop:30}}
                onClick={() => setModal(true)}
            >
                Создать
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList remove={removePost} posts={sortedAndSearchingPosts} title="список постов "/>


        </div>
    );
}

export default App;
