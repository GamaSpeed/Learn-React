import { FavoriteBorder, MoreVert, ThumbUp } from "@mui/icons-material"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/Person/1.jpg"/>
                    <span className="postUsername">Alejandro Joque</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post</span>
                <img className="postImg" src="/assets/post/1.jpg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp className="likeIcon" htmlColor="blue"/>
                    <FavoriteBorder className="likeIcon" htmlColor="red"/>
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
