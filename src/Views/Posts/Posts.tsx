import { Props, usePostsPage } from "./Posts.Logic";

const Posts: React.FC<Props> = ({ match, location }) => {
  const { res } = usePostsPage(location);
  // Logging out url parameters
  console.log(res);

  return (
    <div>
      <h1>Posts</h1>
      <p>{location.search && <span>{location.search}</span>}</p>
    </div>
  );
};

export default Posts;
