import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'パフォーマンスを大幅改善',
    text: '私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。',
  },
  {
    title: 'データを解析',
    text: '私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。',
  },
  {
    title: '自動メッセージ送信',
    text: '私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。',
  },
  {
    title: 'ビッグデータを利用',
    text: '私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">未来はすぐそこにある。早速始めましょう。</h1>
      <p>早期アクセスに申し込んで早速始めましょう</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
