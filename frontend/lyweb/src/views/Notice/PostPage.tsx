import React from 'react';
import './PostPage.css';
import { useParams, useNavigate, Link, Route, Routes } from 'react-router-dom';
import { Post, deletePost } from '../../function/NoticeFunction';
import ModifyPostPage from './ModifyPostPage';

interface PostPageProps {
    posts: Post[];
}

const PostPage: React.FC<PostPageProps> = ({posts}) => {
    const navigate = useNavigate();
    const {postId} = useParams<{ postId: string}>();
    const post = posts.find((post) => post.id === Number(postId));


    const handleDeletePost = async(postId: number) => {
        await deletePost(postId);
        navigate('/notice');
    }

    if (!post) {
        return <div>게시물을 찾을 수 없습니다.</div>;
    }

    return (
        <div className='post-container'>
            <h2>{post.title}</h2>
            <p>작성자: {post.username}</p>
            <p>조회수: {post.hit}</p>
            <p>작성일: {post.date.toDateString()}</p>
            <p>내용: {post.content}</p>
            <div className='post-footer'>
                <button>
                    <Link to={`notice/${post.id}/modify`}>게시물 수정</Link>
                </button>
                <button onClick={() =>handleDeletePost(Number(postId))}>게시물 삭제</button>
            </div>
            <Routes>
                <Route path='/notice/:postId/modify' element={<ModifyPostPage posts={posts} navigate={navigate} />} />
            </Routes>
        </div>
    )
};

export default PostPage;