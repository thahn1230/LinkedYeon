import React, { useState } from 'react';
import './NoticePage.css';

const NoticePage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('all');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [posts, setPosts] = useState([
        {id: 1, title: '게시물 1'},
        {id: 2, title: '게시물 2'},
    ]);

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
        // 선택한 탭에 따른 게시물 목록을 가져오도록 구현 필요함
    };

    const handleSearch = () => {
        // 검색어에 따른 게시물 목록을 가져오도록 구현 필요함
    };

    return (
    <div className='notice-container'>
      <div className='notice-header'>
        <button onClick={() => handleTabChange('all')}>전체</button>
        <button onClick={() => handleTabChange('update')}>업데이트</button>
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
            <li key={post.id} className='post'>
                {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default NoticePage;