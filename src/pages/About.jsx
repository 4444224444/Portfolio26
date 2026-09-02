
import './About.scss'
import profileImg from '../assets/profile.jpg'

export default function About() {
  return (
    <div className="about-page">
      {/* 좌측 영역: 프로필 이미지 + 슬로건 + 소개글 */}
      <div className="about-left">
        <div className="profile-image-wrap">
          <img src={profileImg} alt="정혜진 프로필" className="profile-img" />
        </div>

        <h1 className="slogan">
          유연한 사고의 디자이너
        </h1>

        <div className="description">
          <p>작은 디테일 하나 놓치지 않는 깊은 고민과 적극적인 시도를 통해, 사용자에게<br />
        자연스럽게 스며드는 유연한 디자인 경험과 완성도 높은 비주얼을 만들어갑니다.
          </p>
        </div>
      </div>

      {/* 우측 영역: 정보 그리드 */}
      <div className="about-right">
        {/* 1열 */}
        <div className="info-column">
          {/* About */}
          <div className="info-block">
            <div className="block-header">
              <h3>Info</h3>
            </div>
            <div className="block-content">
              <p className="name">정혜진 Jung Hyejin</p>
              <p>010-9413-5028</p>
              <p>jhj030424@gmail.com</p>
            </div>
          </div>

          {/* Certificate */}
          <div className="info-block">
            <div className="block-header">
              <h3>Awards</h3>
            </div>
            <div className="block-content list-style">
              <div className="item">
                <p className="title">졸업작품 최우수상</p>
                <p className="sub">계원예술대학교 | 2025.12</p>
              </div>
              <div className="item">
                <p className="title">2학기 최우수작 연합 PT 발표</p>
                <p className="sub">계원예술대학교 | 2025.12</p>
              </div>
              <div className="item">
                <p className="title">1학기 최우수작 연합 PT 발표</p>
                <p className="sub">계원예술대학교 | 2025.06</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2열 */}
        <div className="info-column">
          {/* Education */}
          <div className="info-block">
            <div className="block-header">
              <h3>Education</h3>
            </div>
            <div className="block-content list-style">
              <div className="item">
                <p className="title">계원예술대학교 디지털미디어디자인과</p>
                <p className="sub">졸업 | 2026.02</p>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="info-block">
            <div className="block-header">
              <h3>Activities</h3>
            </div>
            <div className="block-content list-style">
              <div className="item">
                <p className="title">여성 쇼핑몰 MERTA 재직</p>
                <p className="sub">2025. 02 - 2026. 08</p>
              </div>

            </div>
          </div>

          {/* 🔥 Skills (웹퍼블리싱 / 디자인 / 영상 3개 구분) */}
          <div className="info-block">
            <div className="block-header">
              <h3>Skills</h3>
            </div>
            <div className="block-content list-style">
              <div className="item">
                <p className="title">Design</p>
                <p className="sub">Photoshop, Illustrator, Figma</p>
              </div>
              <div className="item">
                <p className="title">Video</p>
                <p className="sub">Premiere Pro, CapCut, Edit</p>
              </div>
              <div className="item">
                <p className="title">Publishing</p>
                <p className="sub">HTML5, CSS3 / SCSS, JavaScript</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}