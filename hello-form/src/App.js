import './styles/App.css';
import '../src/styles/App.css'
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'delphi', body: 'Description'},
        {id: 2, title: 'JavaScript ', body: 'JavaScript'},
        {id: 3, title: 'Python ', body: 'Description 3'}
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        console.log(sort);
        setSelectedSort(sort)
        setPosts([... posts].sort((a,b ) => a[sort].localeCompare(b[sort])));
    }

    return (
        <div>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}

                    ]}
                />
            </div>

            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title="список постов "/>
                : <h2 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h2>
            }

        </div>
    );
}

export default App;
