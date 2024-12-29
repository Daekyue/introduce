// App.js

import React, { useState } from "react";
import "./App.css";

import profileImg from "./assets/profile-image.jpg";
import instagram_icon from "./assets/instagram-icon.png";
import kakao_icon from "./assets/kakao-icon.png";
import kakao_qr from "./assets/kakao-qr.jpg";
import insta_qr from "./assets/insta-qr.png";
import androidStudio_logo from "./assets/androidStudio-logo.png";
import cpp_logo from "./assets/c++-logo.png";
import django_logo from "./assets/django-logo.png";
import java_logo from "./assets/java-logo.png";
import js_logo from "./assets/javaScript-logo.png";
import python_logo from "./assets/python-logo.png";
import react_logo from "./assets/react-logo.png"

// App 컴포넌트
function App() {
  // 1) 상태 정의 (내용 동일)
  const [showProfileDetail, setShowProfileDetail] = useState(false);
  const [showInstaID, setShowInstaID] = useState(false);
  const [showKakaoModal, setShowKakaoModal] = useState(false);
  const [showInstaModal, setShowInstaModal] = useState(false);

  // 2) 핸들러 (내용 동일)
  const handleProfileClick = () => {
    setShowProfileDetail(!showProfileDetail);
  };
  const handleInstaClick = () => {
    setShowInstaModal(true);
    setShowInstaID(!showInstaID);
  };
  const handleCloseInstaModal = () => {
    setShowInstaModal(false);
  };
  const handleKakaoClick = () => {
    setShowKakaoModal(true);
  };
  const handleCloseKakaoModal = () => {
    setShowKakaoModal(false);
  };

  // 3) 렌더링
  return (
    <div className="portfolio-container">
      {/* ------- 왼쪽 프로필 영역 ------- */}
      <aside className="profile">
        <div className="profile-top">
          <div className="insta-header">
            <img
              src={profileImg}
              alt="프로필 이미지"
              className="profile-image"
            />
            <div className="insta-info">
              <h2 className="insta-username">황대규</h2>
              <p className="insta-quote">“지금 이 순간에 최선을 다하자”</p>

              {/* 인스타 & 카카오 아이콘 */}
              <div className="icon-row">
                <img
                  src={instagram_icon}
                  alt="Instagram Icon"
                  className="instagram-icon"
                  onClick={handleInstaClick}
                />
                <img
                  src={kakao_icon}
                  alt="Kakao Icon"
                  className="kakao-icon"
                  onClick={handleKakaoClick}
                />
              </div>

              {/* 인스타그램 ID 토글 표시 */}
              {showInstaID && <p className="instagram-id">@kyue_29</p>}
            </div>
          </div>
        </div>

        {/* 프로필 메뉴 */}
        <nav className="profile-nav">
          <ul>
            <li onClick={handleProfileClick}>MY PROFILE</li>
          </ul>
        </nav>

        {/* MY PROFILE 열림 섹션 */}
        {showProfileDetail && (
          <div className="profile-detail">
            <p>안녕하세요! 저는 00년생 황대규라고 합니다!</p>
            <p>저는 1학기 데이터 트랙을 수강했습니다.</p>
            <p>2학기 같은 반이 된 여러분 모두 잘 부탁드립니다!!</p>
          </div>
        )}
      </aside>

      {/* ------- 가운데 (middle-content) ------- */}
      <div className="middle-content">
        <section className="timeline">
          <h2>저는 이런 사람입니다. (●'◡'●)</h2>
          <div className="timeline-list">
            <div className="timeline-item">
              <p>⭐Backend를 희망합니다⭐</p>
            </div>
            <div className="timeline-item">
              <p>MBTI : ESFJ</p>
            </div>
            <div className="timeline-item">
              <p>취미 : 운동, 축구</p>
            </div>
            <div className="timeline-item">
              <p>사람들과 모여서 얘기하는 것을 좋아합니다!😆 잦은 회의 환영!</p>
            </div>
          </div>
          <div className="extra-info">
            <p>팀원들, 동기분들과 함께 성공적인 프로젝트와 멋진 추억 만들고 싶습니다!</p>
            {/* (기존) 배터리 상태표시 */}
            <div className="battery-status">
              <div className="battery battery-lv1"></div>
              <div className="battery battery-lv2"></div>
              <div className="battery battery-lv3"></div>
            </div>
          </div>
        </section>

        <section className="goal">
          <h3>2학기 목표와 다짐</h3>
          <ul>
            <li>멋진 프로젝트를 하고 싶습니다!!</li>
            <li>팀원들과 함께 성장할 수 있는 사람</li>
            <li>2학기를 마무리 지을 때 모두 원하는 곳에 취업할 수 있으면 좋겠습니다!</li>
          </ul>
        </section>

        <section className="hashtag">
          <h3>Hash Tag</h3>
          <p># 축구</p>
          <p># 산책</p>
          <p># 풀스택??</p>
          <p># ESFJ</p>
          <p># 밝음</p>
          <p># 정보처리기사</p>
          <p># SQLD</p>
        </section>
      </div>

      {/* ------- 오른쪽 (right-content) ------- */}
      <div className="right-content">
        {/* 프로젝트 경험 */}
        <section className="project-list">
          <h3> 프로젝트 경험 </h3>
          <ol>
            <li>안드로이드 스튜디오를 활용한 어플 개발 경험 (Frontend)</li>
            <li>React를 활용한 웹 사이트 개발 경험 (Frontend)</li>
            <li>SSAFY 관통 데이터 프로젝트 (Backend)</li>
          </ol>
        </section>

        {/* 기술 스택 (CSS 배터리 활용) */}
        <section className="tech-stack">
          <h3>기술 스택</h3>
          <div className="stack-icons">
            <div className="stack-item">
              <img src={react_logo} alt="React" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv3"></div>
              </div>
              <span>React 70%</span>
            </div>

            <div className="stack-item">
              <img src={django_logo} alt="Django" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv2"></div>
              </div>
              <span>Django 60%</span>
            </div>

            <div className="stack-item">
              <img src={androidStudio_logo} alt="Android" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv2"></div>
              </div>
              <span>AndroidStudio 60%</span>
            </div>

            <div className="stack-item">
              <img src={cpp_logo} alt="C++" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv2"></div>
              </div>
              <span>C++ 60%</span>
            </div>

            <div className="stack-item">
              <img src={java_logo} alt="java" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv2"></div>
              </div>
              <span>java 50%</span>
            </div>

            <div className="stack-item">
              <img src={js_logo} alt="js" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv3"></div>
              </div>
              <span>JS 70%</span>
            </div>

            <div className="stack-item">
              <img src={python_logo} alt="python" className="stack-icon" />
              <div className="skill-battery">
                <div className="skill-battery-fill skill-battery-fill-lv3"></div>
              </div>
              <span>python 70%</span>
            </div>
          </div>
        </section>

        {/* 사진 갤러리 */}
        <section className="photo-gallery">
          <h3>사랑이 재산이다.</h3>
          <p>다른 사람과 함께한 사진들, 모임, MT 사진 등</p>
          <div className="photo-grid">
            <img src="group-photo1.jpg" alt="단체사진1" />
            <img src="group-photo2.jpg" alt="단체사진2" />
          </div>
        </section>
      </div>

      {/* ------- 모달들 (카카오, 인스타) ------- */}
      {/* 카카오톡 QR 모달 */}
      {showKakaoModal && (
        <div className="modal-overlay" onClick={handleCloseKakaoModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>카카오톡 QR</h3>
            <img src={kakao_qr} alt="카카오톡 QR 코드" className="qr-kakao-image" />
            <button onClick={handleCloseKakaoModal}>닫기</button>
          </div>
        </div>
      )}

      {/* 인스타그램 QR 모달 */}
      {showInstaModal && (
        <div className="modal-overlay" onClick={handleCloseInstaModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Instagram QR</h3>
            <img src={insta_qr} alt="Insta QR 코드" className="qr-insta-image" />
            <button onClick={handleCloseInstaModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
