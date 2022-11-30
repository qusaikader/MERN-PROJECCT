import './tweetPage.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets'

function tweetPage() {
  return (
    <div className="tweetPage">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default tweetPage;
