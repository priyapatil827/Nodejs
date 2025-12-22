import "./RightPanel.css";

const RightPanel = () => {
  return (
    <div className="right-panel">

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="🔍 Search Twitter" />
      </div>

      {/* Trends */}
      <div className="card">
        <h3>Trends for you</h3>

        <Trend
          category="Trending worldwide"
          title="#BreakingNews"
          count="10.0K Tweets"
        />

        <Trend
          category="Space · Trending"
          title="Moon photography breakthrough"
          count="125K Tweets"
        />

        <Trend
          category="Trending worldwide"
          title="#WorldNews"
          count="6,094 Tweets"
        />

        <Trend
          category="Animals · Trending"
          title="#InternationalCatDay"
          count="2,757 Tweets"
        />

        <span className="show-more">Show more</span>
      </div>

      {/* Who to follow */}
      <div className="card">
        <h3>Who to follow</h3>

        <Follow name="Andrea" username="@andrea" />
        <Follow name="Harold" username="@harold" />
        <Follow name="Samantha" username="@sam" />

        <span className="show-more">Show more</span>
      </div>
    </div>
  );
};

/* Trend Component */
const Trend = ({ category, title, count }) => (
  <div className="trend">
    <span className="category">{category}</span>
    <strong>{title}</strong>
    <span className="count">{count}</span>
  </div>
);

/* Follow Component */
const Follow = ({ name, username }) => (
  <div className="follow">
    <div className="avatar">{name[0]}</div>
    <div className="user">
      <strong>{name}</strong>
      <span>{username}</span>
    </div>
    <button>Follow</button>
  </div>
);

export default RightPanel;
