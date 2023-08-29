import React, {useState, useEffect} from 'react';
import './ModifyPostPage.css';
import {updatePost, Post, getPosts} from '../../function/NoticeFunction';
import { useParams } from 'react-router-dom';

interface ModifyPostPageProps {
    posts: Post[];
    navigate: (path: string) => void;
}

const ModifyPostPage: React.FC<ModifyPostPageProps> = ({posts, navigate}) => {
    const { postId } = useParams<{postId: string}>();

    const [post, setPost] = useState<Post|null>(null);
    const [updatedPostData, setUpdatedPostData] = useState<Partial<Post>>({
      title:'',
      content:'',
      username:'',
      //views:0,
      // date:  
    });

    useEffect(()=>{
        getPosts().then(posts => {
            const foundPost = posts.find((post) => post.id === Number(postId));
            if (foundPost) {
                setPost(foundPost);
                setUpdatedPostData({
                    title: foundPost.title,
                    content: foundPost.content,
                    username: foundPost.username,
                    // date
                });
            }
        });
    },[postId]);

    const handleUpdatePost = async (postId:number,newPostData:Partial<Post>) => {
        await updatePost(postId, newPostData);
        alert("게시물이 수정되었습니다.");
        navigate('/notice');
    };

    if (!post){
        alert("게시물을 찾을 수 없습니다.")
        navigate('/notice');
    }

    return (
        <div className='modify-post-container'>
            <h2>게시물 수정</h2>
            <input
                type='text'
                placeholder='제목'
                value={updatedPostData.title || ''}
                onChange={(e) => setUpdatedPostData({ ...updatedPostData, title: e.target.value })}
            />
            <input
                type='text'
                placeholder='작성자'
                value={updatedPostData.username || ''}
                onChange={(e) => setUpdatedPostData({ ...updatedPostData, username: e.target.value })}
            />
            {/* 날짜 입력 */}
            <textarea
                placeholder='내용'
                value={updatedPostData.content || ''}
                onChange={(e) => setUpdatedPostData({ ...updatedPostData, content: e.target.value })}
            />
            <button onClick={()=>handleUpdatePost(Number(postId), updatedPostData)}>생성</button>
        </div>
    );
};

export default ModifyPostPage;