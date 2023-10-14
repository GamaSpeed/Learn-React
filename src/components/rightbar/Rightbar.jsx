import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png"/>
            <span className="birthdayText">
              <b>Lola Atonella</b> and <b>3 others friends</b> have a birthday today
            </span>
          </div>
          <img className="rightbarAd" src="/assets/Sem_Ttulo-10.jpg"/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/Person/3.jpg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/Person/3.jpg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/Person/3.jpg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/Person/3.jpg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Carter</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="/assets/Person/3.jpg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Carter</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
