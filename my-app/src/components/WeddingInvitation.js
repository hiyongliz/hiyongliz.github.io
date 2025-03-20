import React, { useEffect, useState } from 'react';
import './WeddingInvitation.css';

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`wedding-invitation ${isVisible ? 'visible' : ''}`}>
      <div className="invitation-container">
        <div className="decoration top-left"></div>
        <div className="decoration top-right"></div>
        
        <div className="header">
          <h1 className="invitation-title">婚礼邀请函</h1>
          <p className="subtitle">诚邀您来参加我们的婚礼</p>
        </div>
        
        <div className="couple-names">
          <div className="groom">王明</div>
          <div className="heart">&hearts;</div>
          <div className="bride">李华</div>
        </div>
        
        <div className="invitation-content">
          <p>我们诚挚地邀请您</p>
          <p>见证我们的爱情长跑修成正果</p>
          <p>分享我们人生中最重要的时刻</p>
        </div>
        
        <div className="wedding-details">
          <div className="detail-item">
            <i className="icon date-icon"></i>
            <p>2024年6月1日 星期六</p>
          </div>
          <div className="detail-item">
            <i className="icon time-icon"></i>
            <p>下午 3:00</p>
          </div>
          <div className="detail-item">
            <i className="icon location-icon"></i>
            <p>幸福大酒店</p>
            <p>北京市朝阳区幸福路88号</p>
          </div>
        </div>
        
        <div className="rsvp-section">
          <p>恭请您于5月15日前回复</p>
          <button className="rsvp-button">确认出席</button>
        </div>
        
        <div className="decoration bottom-left"></div>
        <div className="decoration bottom-right"></div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
