import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title:'', body:''});
    }


    return (
            <form>
                {/*упраляемый*/}
                <MyInput
                    value={post.title}
                    type="text"
                    placeholder="название поста"
                    onChange={e => setPost({...post,title: e.target.value})}
                />
                {/*<input*/}
                {/*    ref={bodyInputRef}*/}
                {/*type="text"*/}
                {/*/>*/}
                {/* неуправляемый/неконтроллируемый*/}
                <MyInput
                    type="text"
                    value={post.body}
                    onChange={e => setPost({...post,body: e.target.value})}
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
    );
};

export default PostForm;