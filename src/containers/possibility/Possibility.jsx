import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>早期アクセスに申し込んで早速始めましょう</h4>
      <h1 className="gradient__text">可能性は <br /> 想像を超える</h1>
      <p>私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。</p>
      <h4>早期アクセスに申し込んで早速始めましょう</h4>
    </div>
  </div>
);

export default Possibility;
