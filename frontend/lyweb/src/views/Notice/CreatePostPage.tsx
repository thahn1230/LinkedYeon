import React, {useState} from 'react';
import './CreatePostPage.css';
import {createPost, Post} from '../../function/NoticeFunction';
import { useNavigate } from 'react-router-dom';

const CreatePostPage: React.FC = () => {
    const [newPostData, setNewPostData] = useState<Partial<Post>>({
        title: '',
        content: '',
        hit: 0,
        date: new Date(),
        username: '',
    });

    const navigate = useNavigate();
    const handleCreatePost = async () => {
        await createPost(newPostData);
        navigate('/notice');
    };

    return (
        <div className='create-post-container'>
            <h2>새 게시물 생성</h2>
            <input
                type='text'
                placeholder='제목'
                value={newPostData.title || ''}
                onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
            />
            <input
                type='text'
                placeholder='작성자'
                value={newPostData.username || ''}
                onChange={(e) => setNewPostData({ ...newPostData, username: e.target.value })}
            />
            {/* 날짜 입력 */}
            <textarea
                placeholder='내용'
                value={newPostData.content || ''}
                onChange={(e) => setNewPostData({ ...newPostData, content: e.target.value })}
            />
            <button onClick={handleCreatePost}>생성</button>
        </div>
    );
};

export default CreatePostPage;