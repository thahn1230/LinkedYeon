import React, { useState, useEffect } from 'react';
import './NoticePage.css';
import { Link, Route, Routes } from 'react-router-dom'; 
import PostPage from './PostPage';
import CreatePostPage from './CreatePostPage';
import { Post, getPosts } from '../../function/NoticeFunction';

const NoticePage: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [posts, setPosts] = useState<Post[]>([]);

    // 검색
  const handleSearch = async () => {
      const data = await getPosts();
      const filteredPosts = data.filter((post:Post) => {
   
      const titleMatches = post.title.toLowerCase().includes(searchKeyword.toLowerCase());
      const articleMatches = post.content.toLowerCase().includes(searchKeyword.toLowerCase());
      const authorMatches = post.username.toLowerCase().includes(searchKeyword.toLowerCase());
      return titleMatches || articleMatches || authorMatches; 
      });
  

   setPosts(filteredPosts);
  }

  useEffect(()=> {
     getPosts().then(data => {
        setPosts(data);
     });
  },[]);

    return (
    <div className='notice-container'>
      <div className='notice-header'>
        <input
          className='notice-search'
          type="text"
          value={searchKeyword}
          placeholder='Search'
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div>
        <ul className='notice-list'>
          {posts.map((post) => (
            <li key={post.post_no} className='post'>
                <Link to={`/notice/${post.post_no}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='notice-footer'>
        <button>
          <Link to='/notice/create'>게시물 생성</Link>
        </button>
      </div>
      <Routes>
        {/* 각 게시물 페이지 라우팅*/ }
        <Route path='/notice/:postId' element={<PostPage posts={posts} />} />
        <Route path='/notice/create' element={<CreatePostPage />} />
      </Routes>
    </div>
  );

}


export default NoticePage;