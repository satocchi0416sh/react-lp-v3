import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">誰よりも早く未来へ</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>早期アクセスに申し込む</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>libeol, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>リンク</h4>
        <p>特長</p>
        <p>SNS</p>
        <p>目標</p>
        <p>お問い合わせ</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>会社概要</h4>
        <p>利用規約 </p>
        <p>プライバシーポリシー</p>
        <p>お問い合わせ</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>ご連絡</h4>
        <p>Libeol</p>
        <p>012-3456-7890</p>
        <p>libeol@arklet.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
