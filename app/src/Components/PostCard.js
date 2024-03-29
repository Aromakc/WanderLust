import PostCardContainer from '../Styles/PostCard.styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useDatabase } from '../DatabaseContext';
function PostCard(props) {
  const navigate = useNavigate();
  const { getUserData } = useDatabase();

  const HandleClick = (e) => {
    e.preventDefault();
    navigate('/blog/' + props.id);
  };

  // const userName = getUserData(props.id);
  const userData = getUserData('UC7cwWwOL4gdVkxaPwfZQjp1cBy2').then((result) =>
    console.log(result)
  );

  const getDays = (date) => {
    const postDate = new Date(1970, 0, 1);
    postDate.setSeconds(date.seconds);
    if (postDate.getDate() === new Date().getDate()) {
      return "Today";
    }
    else if (postDate.getDate() === new Date().getDate() - 1) {
      return "1 day ago";
    }
    else {
      return postDate.toDateString();
    }
  }


  return (
    <PostCardContainer onClick={HandleClick}>
      <div className="PostCard-Main">
        <h2 className="PostCard-Title">{props.title}</h2>
        <div className="PostCard-InfoContainer">
          <div className="PostCard-FlexContainer">
            <PersonIcon />
            <p>hello</p>
          </div>
          <div className="PostCard-FlexContainer">
            <LocationOnIcon />
            <p>{props.landmark}</p>
          </div>
        </div>
      </div>
      <div className="PostCard-Last">
        <p className="PostCard-Date">{getDays(props.date)}</p>
        <div className="PostCard-FlexContainer">
          <div className="PostCard-FlexContainer">
            <ModeCommentIcon />
            <p id="PostCard-Comment-Count">5</p>
          </div>
          <div className="PostCard-FlexContainer">
            <ThumbUpIcon />
            <p id="PostCard-Like-Count">{props.likes}</p>
          </div>
        </div>
      </div>
    </PostCardContainer>
  );
}

export default PostCard;
