import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaPaperPlane, FaTimes } from "react-icons/fa";

import SideBar from "../SideBar/SideBar";
import RightPanel from "../RightPanel/RightPanel";
import "./Thome.css";

function Thome() {
  const [title, setTitle] = useState("");
  const [twitts, setTwitts] = useState("");
  const [tweets, setTweets] = useState([]);
  const [editId, setEditId] = useState(null);

  const USER = {
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://i.pravatar.cc/150?img=5",
  };

  /* FETCH DATA */
  useEffect(() => {
    axios.get("http://localhost:3400")
      .then(res => setTweets(res.data));
  }, []);

  /* POST */
  const handlePost = async () => {
    if (!title || !twitts) return;

    const newTweet = {
      id: Date.now(),
      title,
      twitts,
    };

    await axios.post("http://localhost:3400", newTweet);
    setTweets([newTweet, ...tweets]);
    resetForm();
  };

  /* DELETE */
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3400/${id}`);
    setTweets(tweets.filter(t => t.id !== id));
  };

  /* START EDIT */
  const startEdit = (tweet) => {
    setEditId(tweet.id);
    setTitle(tweet.title);
    setTwitts(tweet.twitts);
  };

  /* UPDATE */
  const handleUpdate = async () => {
    if (!title || !twitts) return;

    const updated = { title, twitts };

    await axios.put(`http://localhost:3400/${editId}`, updated);

    setTweets(
      tweets.map(t =>
        t.id === editId ? { ...t, ...updated } : t
      )
    );

    resetForm();
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setTwitts("");
  };

  return (
    <div className="layout">
      <SideBar />

      <div className="feed">
        <div className="feed-header">
          <h2>Home</h2>
        </div>

        {/* TWEET BOX */}
        <div className={`tweet-box ${editId ? "editing" : ""}`}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Tweet title"
          />

          <textarea
            value={twitts}
            onChange={e => setTwitts(e.target.value)}
            placeholder="What's happening?"
          />

          <div className="tweet-actions-bar">
            {editId && (
              <button className="cancel-btn" onClick={resetForm}>
                <FaTimes /> Cancel
              </button>
            )}

            <button
              className="tweet-btn-main"
              onClick={editId ? handleUpdate : handlePost}
              disabled={!title || !twitts}
            >
              <FaPaperPlane />
              {editId ? "Update" : "Tweet"}
            </button>
          </div>
        </div>

        {/* TWEET LIST */}
        {tweets.map(t => (
          <div className="tweet-card" key={t.id}>
            <img src={USER.avatar} className="tweet-avatar" alt="dp" />

            <div className="tweet-body">
              <div className="tweet-header">
                <div className="user-info">
                  <span className="name">{USER.name}</span>
                  <span className="username">{USER.username}</span>
                </div>

                <div className="tweet-icons">
                  <FaEdit onClick={() => startEdit(t)} />
                  <FaTrash onClick={() => handleDelete(t.id)} />
                </div>
              </div>

              <h4>{t.title}</h4>
              <p>{t.twitts}</p>
            </div>
          </div>
        ))}
      </div>

      <RightPanel />
    </div>
  );
}

export default Thome;
