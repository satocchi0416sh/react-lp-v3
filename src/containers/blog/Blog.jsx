import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">今起こっていることを <br /> ブログで体感</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3、Open  AIが作り出す未来はすぐそこに。早速始めましょう" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3、Open  AIが作り出す未来はすぐそこに。早速始めましょう" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3、Open  AIが作り出す未来はすぐそこに。早速始めましょう" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3、Open  AIが作り出す未来はすぐそこに。早速始めましょう" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3、Open  AIが作り出す未来はすぐそこに。早速始めましょう" />
      </div>
    </div>
  </div>
);

export default Blog;
