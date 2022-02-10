import './styles/App.css';
import '../src/styles/App.css'
import {useMemo, useRef, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'delphi', body: 'Description'},
        {id: 2, title: 'JavaScript ', body: 'JavaScript'},
        {id: 3, title: 'Python ', body: 'Description 3'}
    ]);

    const [filter, setFilter] = useState({sort: '', query:''});

    const sortedPosts = useMemo(() => {
        console.log("get post")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchingPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
           <PostFilter
               filter={filter}
               setFilter={setFilter}
           />

            {sortedAndSearchingPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchingPosts} title="список постов "/>
                : <h2 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h2>
            }

        </div>
    );
}

export default App;
