import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">GPT-3 OpenAIで未来の開発を</h1>
      <p>私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="メールアドレス" />
        <button type="button">早速始める</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>24時間で1,600人が登録</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
