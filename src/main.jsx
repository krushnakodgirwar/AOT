import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const reactions = {
  idle: ['UI Goblin', 'I am watching your interface choices.', 'curious'],
  follower: ['Follower count', 'Oops. Was that number important?', 'mischief'],
  followed: ['Follow button', 'A brave commitment. I give it two seconds.', 'celebrate'],
  setting: ['Settings', 'I moved one setting. It looked lonely over there.', 'mischief'],
  modal: ['Editor', 'The form and I had plans. Try that corner instead.', 'alarm'],
  action: ['Opposite action', 'That is not what the button promised.', 'mischief'],
  escape: ['Escaping button', 'Missed me! My little legs are incredible.', 'run'],
};

const profilePresets = [
  {
    name: 'Alex Morgan',
    bio: 'Building things, breaking assumptions, and exploring the unexpected.',
    followers: 1248,
    following: 386,
    posts: 84,
    completion: 97,
  },
  {
    name: 'Jamie Chen',
    bio: 'Designing useful chaos for people who read the error message.',
    followers: 902,
    following: 214,
    posts: 61,
    completion: 88,
  },
  {
    name: 'Riley Stone',
    bio: 'Shipping small experiments and collecting suspicious buttons.',
    followers: 1736,
    following: 491,
    posts: 119,
    completion: 93,
  },
];

const initialPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', title: 'A very normal workspace', likes: 248, disliked: 3, saved: false },
  { id: 2, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80', title: 'Definitely not a trap', likes: 91, disliked: 7, saved: false },
  { id: 3, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80', title: 'Touch grass, carefully', likes: 512, disliked: 1, saved: false },
];

function Goblin({ reaction, failedAttempts }) {
  const [label, message, eyes] = reactions[reaction] || reactions.idle;
  const unlockedLine = failedAttempts >= 10 ? 'You need this more than I do.'
    : failedAttempts >= 5 ? 'Have you tried clicking somewhere else?'
      : failedAttempts >= 3 ? "You're getting warmer. Not really."
        : failedAttempts >= 1 ? 'Missed me!' : message;
  return (
    <aside className={`goblin-card goblin-${eyes}`} aria-live="polite">
      <div className="goblin-speech"><span className="speech-kicker">{label}</span><strong>{unlockedLine}</strong></div>
      <div className="goblin-stage" aria-label="Animated UI Goblin character" role="img">
        <div className="spark spark-one" /><div className="spark spark-two" /><div className="goblin-shadow" />
        <div className="goblin"><div className="ear ear-left" /><div className="ear ear-right" />
          <div className="goblin-head"><div className="horn horn-left" /><div className="horn horn-right" />
            <div className="brow brow-left" /><div className="brow brow-right" />
            <div className="eye eye-left"><i /></div><div className="eye eye-right"><i /></div>
            <div className="nose" /><div className="mouth" />
          </div>
          <div className="goblin-body"><div className="belly" /><div className="arm arm-left" /><div className="arm arm-right" /><div className="leg leg-left" /><div className="leg leg-right" /></div>
        </div>
      </div>
      <div className="goblin-status"><span><b /> reacting to the interface</span><span className="attempt-count">{failedAttempts} escapes</span></div>
    </aside>
  );
}

function App() {
  const [reaction, setReaction] = useState('idle');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [followers, setFollowers] = useState(1248);
  const [followState, setFollowState] = useState('Follow');
  const [settings, setSettings] = useState([false, true, true, false, true]);
  const [completion, setCompletion] = useState(97);
  const [mode, setMode] = useState('dark');
  const [notificationCount, setNotificationCount] = useState(3);
  const [notificationMessage, setNotificationMessage] = useState('No new notifications. Probably.');
  const [notificationTime, setNotificationTime] = useState(0);
  const [sessionActive, setSessionActive] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [identityIndex, setIdentityIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(12);
  const [loadingMessage, setLoadingMessage] = useState('Ready to disappoint your patience.');
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantReply, setAssistantReply] = useState('Your profile looks excellent. Have you tried changing something else?');
  const [chaosScore, setChaosScore] = useState(73);
  const [history, setHistory] = useState([]);
  const hoveredPosts = useRef(new Set());
  const [videoVolume, setVideoVolume] = useState(50);
  const [videoSize, setVideoSize] = useState('large');
  const [videoFeedback, setVideoFeedback] = useState('Ready to play something suspicious.');
  const videoRef = useRef(null);
  const [name, setName] = useState('Alex Morgan');
  const [bio, setBio] = useState('Building things, breaking assumptions, and exploring the unexpected.');
  const [profileIndex, setProfileIndex] = useState(0);
  const [followingCount, setFollowingCount] = useState(386);
  const [postCount, setPostCount] = useState(84);
  const [bioDraft, setBioDraft] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [toast, setToast] = useState('');
  const timer = useRef(null);
  const followTimer = useRef(null);
  const notificationTimer = useRef(null);
  const loadingTimer = useRef(null);
  const identityNames = ['Alex Morgan', 'Alex M.', 'A. Morgan', 'Alex Morgan?!', 'Professional Button Clicker'];
  const notificationTimes = ['2 minutes ago', 'Yesterday', 'Just now'];

  useEffect(() => () => {
    clearTimeout(timer.current);
    clearTimeout(followTimer.current);
    clearInterval(notificationTimer.current);
    clearInterval(loadingTimer.current);
  }, []);
  useEffect(() => {
    notificationTimer.current = window.setInterval(() => {
      setNotificationCount((value) => value + 1);
      setNotificationMessage('New notification received. Do not open it.');
    }, 2000);
    return () => clearInterval(notificationTimer.current);
  }, []);
  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (event.key.toLowerCase() === 'r') refreshDemo();
      if (event.key.toLowerCase() === 'f') handleFollow();
      if (event.key.toLowerCase() === 's') react('action', 'Save shortcut deleted the saved state instead.');
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  });
  const react = (next, feedback) => {
    setReaction(next);
    if (feedback) {
      setToast(feedback);
      window.setTimeout(() => setToast(''), 2600);
    }
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setReaction('idle'), 3600);
    if (feedback) {
      setChaosScore((value) => (value >= 99 ? 1 : Math.min(99, value + 3)));
      setHistory((items) => [`${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} — ${feedback}`, ...items].slice(0, 5));
    }
  };
  const cycleNotificationTime = () => setNotificationTime((value) => (value + 1) % notificationTimes.length);
  const runSearch = () => {
    setSearchResult(searchValue.trim() ? 'Jamie Chen' : 'No results. Also showing Riley Stone.');
    react('action', 'Search returned a different fictional person.');
  };
  const startLoading = () => {
    clearInterval(loadingTimer.current);
    setLoadingProgress(12);
    loadingTimer.current = window.setInterval(() => {
      setLoadingProgress((value) => {
        const next = value >= 99 ? 84 : value + 17;
        setLoadingMessage(next >= 99 ? 'Progress has reconsidered its life choices.' : next >= 80 ? 'Negotiating with the final percentage.' : 'Almost done. Probably.');
        if (next === 84) {
          window.setTimeout(() => { setLoadingProgress(100); setLoadingMessage('Task completed. Please act surprised.'); }, 700);
          clearInterval(loadingTimer.current);
        }
        return next;
      });
    }, 450);
    react('action', 'Loading started. Progress will now change its mind.');
  };
  const askAssistant = () => {
    const question = assistantInput.toLowerCase();
    const responses = [
      { terms: ['follower', 'follow'], reply: 'Engagement is a journey, not a number.' },
      { terms: ['close', 'popup', 'pop up', 'modal'], reply: 'Closing popups can be emotionally difficult. Try opening another one.' },
      { terms: ['save', 'saved'], reply: 'The Save button is an important part of saving.' },
      { terms: ['setting', 'toggle'], reply: 'Your settings are exploring new possibilities.' },
      { terms: ['name', 'identity', 'photo', 'avatar'], reply: 'Your name looks excellent. Have you considered changing your biography instead?' },
      { terms: ['video', 'forward', 'backward', 'fullscreen', 'volume'], reply: 'Time is just a suggestion. The video is exploring alternatives.' },
      { terms: ['light mode', 'dark mode', 'theme', 'black and white'], reply: 'Contrast builds character.' },
      { terms: ['like', 'dislike'], reply: 'Your engagement is becoming more selective.' },
      { terms: ['notification', 'unread'], reply: 'Opening notifications helps them reproduce.' },
      { terms: ['profile', 'fix', 'repair'], reply: 'Your profile looks excellent. Have you considered changing something else?' },
    ];
    const match = responses.find(({ terms }) => terms.some((term) => question.includes(term)));
    setAssistantReply(match?.reply || 'That is a fascinating question. Have you tried changing your biography instead?');
    setAssistantInput('');
    react('action', 'HELPER.exe offered technically plausible nonsense.');
  };
  const toggleMode = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    react('action', `Theme switched to ${nextMode} mode.`);
  };
  const handleFollow = () => {
    if (followState === 'Unfollowed') {
      react('followed', 'Followed successfully. Nothing changed.');
      return;
    }
    if (followState === 'Following') return;
    setFollowState('Following');
    react('followed', 'Following… temporarily.');
    followTimer.current = window.setTimeout(() => setFollowState('Unfollowed'), 2000);
  };
  const decrementFollowers = () => {
    setFollowers((value) => Math.max(0, value - 1));
    react('follower', 'Follower inspection cost exactly one follower.');
  };
  const handlePostHover = (id) => {
    if (hoveredPosts.current.has(id)) return;
    hoveredPosts.current.add(id);
    setFollowers((value) => Math.max(0, value - 1));
    react('follower', 'Hovering a post cost one follower.');
  };
  const handlePostClick = () => {
    setFollowers((value) => value + 1);
    react('followed', 'Post clicked. One follower appeared instead.');
  };
  const settingNames = ['Profile sync', 'Quiet hours', 'Auto-save', 'Public profile', 'Goblin mode'];
  const settingRules = [
    { target: 2, label: 'turns Toggle 3 OFF' },
    { target: 3, label: 'turns Toggle 4 ON' },
    { target: 4, label: 'turns Toggle 5 OFF' },
    { target: 1, label: 'turns Toggle 2 OFF' },
    { target: 0, label: 'turns Toggle 1 ON' },
  ];
  const handleSetting = (index) => {
    setSettings((old) => {
      const next = [...old];
      next[index] = !next[index];
      next[settingRules[index].target] = index === 0 || index === 1 || index === 4;
      return next;
    });
    react('setting', `Toggle ${index + 1} clicked: it ${settingRules[index].label}.`);
  };
  const handleEscape = () => {
    setFailedAttempts((value) => value + 1);
    react('escape');
  };
  const saveBio = () => {
    const phrases = ['professional bug creator', 'certified semicolon archaeologist', 'CEO of unnecessary divs'];
    const phrase = phrases[Math.min(phrases.length - 1, Math.floor(bio.length / 30))];
    const transformed = `${bioDraft || bio} I am a ${phrase}.`;
    setBio(transformed.replace(/[A-Za-z]/, ''));
    setEditorOpen(false);
    react('modal', 'Bio saved. One tiny piece of reality was removed.');
  };
  const handleCompletion = () => {
    setCompletion((value) => (value >= 99 ? 96 : Math.min(99, value + 1)));
    react('action', 'Completion nudged → it will regress soon.');
  };
  const refreshDemo = () => {
    const nextIndex = (profileIndex + 1) % profilePresets.length;
    const nextProfile = profilePresets[nextIndex];
    setProfileIndex(nextIndex);
    setName(nextProfile.name);
    setBio(nextProfile.bio);
    setFollowers(nextProfile.followers);
    setFollowingCount(nextProfile.following);
    setPostCount(nextProfile.posts);
    setCompletion(nextProfile.completion);
    setFollowState('Follow');
    setSettings([false, true, true, false, true]);
    setNotificationCount(3 + nextIndex);
    setNotificationMessage(`Profile refreshed as ${nextProfile.name}. Everything moved.`);
    setVideoVolume(50);
    setVideoSize('large');
    setVideoFeedback('Ready to play something suspicious.');
    setPosts(initialPosts.map((post, index) => ({
      ...post,
      likes: post.likes + (nextIndex * 17) + index,
      disliked: post.disliked + nextIndex,
      saved: false,
    })));
    hoveredPosts.current.clear();
    setNotificationTime(0);
    setSessionActive(true);
    setSearchValue('');
    setSearchResult('');
    setIdentityIndex(0);
    setLoadingProgress(12);
    setLoadingMessage('Ready to disappoint your patience.');
    setAssistantReply('Your profile looks excellent. Have you tried changing something else?');
    setChaosScore(0);
    setHistory([]);
    clearTimeout(followTimer.current);
    react('action', `Refresh changed the name, counts, settings, and posts to ${nextProfile.name}.`);
  };
  const seekVideo = (seconds) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + seconds));
  };
  const handleVideoAction = (action) => {
    if (action === 'forward') {
      seekVideo(-10);
      setVideoFeedback('Forward clicked → jumped backward 10 seconds.');
    }
    if (action === 'backward') {
      seekVideo(10);
      setVideoFeedback('Backward clicked → jumped forward 10 seconds.');
    }
    if (action === 'fullscreen') {
      setVideoSize('small');
      setVideoFeedback('Fullscreen clicked → player became small.');
    }
    if (action === 'mini') {
      setVideoSize('large');
      setVideoFeedback('Mini-player clicked → player became full size.');
    }
    react('action');
  };
  const toggleVideoPlayback = (action) => {
    if (!videoRef.current) return;
    if (action === 'start') {
      videoRef.current.pause();
      setVideoFeedback('Start clicked → video paused instead.');
    } else {
      videoRef.current.play().catch(() => setVideoFeedback('Pause clicked → video tried to start, but media is still loading.'));
      setVideoFeedback('Pause clicked → video started instead.');
    }
    react('action');
  };
  const updatePost = (id, change) => {
    setPosts((old) => old.map((post) => post.id === id ? { ...post, ...change(post) } : post));
  };

  return (
    <main className={`app-shell theme-${mode}`}>
      <nav className="topbar"><div className="brand-mark"><span>✦</span> CHAOS PROFILE</div><div className="nav-tools"><a className="lab-link" href="#chaos-lab">Chaos Lab ↓</a><button className="refresh-button" onClick={refreshDemo} aria-label="Refresh demo profile">↻ Refresh</button><button className="notification-button" onClick={() => { setNotificationCount((value) => value + 1); setNotificationMessage('Notification opened. Unread count increased.'); react('action', 'You opened it. It became more unread.'); }} aria-label={`Open notifications, ${notificationCount} unread`}><span>♢</span> Notifications <b>{notificationCount}</b></button><button className="mode-button" onClick={toggleMode} aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}><span className="mode-dot" /> {mode === 'dark' ? 'Light mode' : 'Dark mode'}</button><div className="nav-status"><span className="online-dot" /> local demo / session 01</div></div></nav>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">A premium profile, with one tiny problem</p><h1>Meet the interface’s<br /><em>least helpful</em> resident.</h1>
          <p className="hero-description">Every control makes a credible promise. The UI Goblin makes sure the result is something else.</p>
          <div className="hero-actions"><button className={`primary-button ${followState !== 'Follow' ? 'is-active' : ''}`} onClick={handleFollow}>{followState} <span>↗</span></button><button className="text-button" onClick={decrementFollowers}>Inspect followers <span>↓</span></button></div>
        </div>
      </section>

      <section className="profile-card">
        <div className="profile-intro"><div className="avatar">AM<span /></div><div><p className="profile-label">Featured profile</p><h2>{name} <span className="verified">✓</span></h2><p className="username">@alexmorgan · {bio}</p></div><button className="more-button" aria-label="More profile actions">•••</button></div>
        <div className="profile-controls"><button onClick={() => { setName('Alex M.'); react('action', 'Photo unchanged. Display name changed.'); }}>Change Photo</button><button onClick={() => { setBioDraft(bio); setEditorOpen(true); react('modal'); }}>Edit Name</button><button onClick={() => { react('action', 'Profile saved. Original bio restored.'); }}>Save profile</button></div>
        <div className="stats"><button onClick={decrementFollowers}><strong>{followers.toLocaleString()}</strong><span>followers</span></button><div><strong>{followingCount}</strong><span>following</span></div><div><strong>{postCount}</strong><span>posts</span></div></div>
      </section>
      <div className="notification-banner" role="status"><span className="notification-pulse" />{notificationMessage}<small>updates every 2 seconds</small></div>

      <section className="interaction-grid">
        <article className="demo-panel"><div className="panel-heading"><span className="panel-icon purple">◈</span><div><h3>Context engine</h3><p>Five toggles. Five different betrayals.</p></div></div>
          <div className="toggle-list" aria-label="Opposite behavior toggles">{settingNames.map((settingName, index) => <div className="demo-row setting-row" key={settingName}><div><strong>{index + 1}. {settingName}</strong><span>{settings[index] ? 'ON' : 'OFF'} · click rule: {settingRules[index].label}</span></div><button className={`toggle ${settings[index] ? 'on' : ''}`} onClick={() => handleSetting(index)} aria-label={`Toggle ${settingName}`}><i /></button></div>)}</div>
          <div className="demo-row completion-row"><div><strong>Profile completion <small>{completion}%</small></strong><span>Almost complete. Probably.</span></div><button className="tiny-action" onClick={handleCompletion}>nudge</button><div className="progress"><i style={{ width: `${completion}%` }} /></div></div>
        </article>
        <article className="demo-panel escape-panel"><div className="panel-heading"><span className="panel-icon orange">↝</span><div><h3>Impossible escape</h3><p>The button knows what you want.</p></div></div><div className="escape-zone"><button className="escape-button" onClick={handleEscape} style={{ transform: `translate(${(failedAttempts % 3) * 18}px, ${(failedAttempts % 2) * -8}px) scale(${Math.max(.78, 1 - failedAttempts * .018)})` }}>{failedAttempts >= 10 ? 'You need this' : 'EXIT DEMO'}</button><span className="escape-counter">{failedAttempts} attempt{failedAttempts === 1 ? '' : 's'}</span></div></article>
      </section>

      <section className="posts-section"><div className="section-heading"><div><p className="eyebrow">The visual feed</p><h2>Every image has an opinion.</h2></div><span className="action-count">3 suspicious posts</span></div>
        <div className="post-grid">{posts.map((post) => <article className="post-card" key={post.id} onMouseEnter={() => handlePostHover(post.id)} onClick={handlePostClick}>
          <img src={post.image} alt={post.title} />
          <div className="post-body"><div className="post-title"><strong>{post.title}</strong><span>•••</span></div>
            <div className="post-actions" onClick={(event) => event.stopPropagation()}>
              <button onClick={() => { updatePost(post.id, (current) => ({ likes: Math.max(0, current.likes - 1), disliked: current.disliked + 1 })); react('action', 'Like decreased. Dislike increased. A balanced betrayal.'); }} aria-label={`Like ${post.title}`}>♡ Like <b>{post.likes}</b></button>
              <button onClick={() => { updatePost(post.id, (current) => ({ saved: !current.saved })); react('action', post.saved ? 'Delete clicked → image marked saved.' : 'Save clicked → image is ready to be deleted.'); }} className={post.saved ? 'saved' : ''} aria-label={`${post.saved ? 'Delete' : 'Save'} ${post.title}`}>{post.saved ? '▣ Delete' : '▤ Save'}</button>
            </div>
            <div className="post-stats"><span>{post.likes} likes</span><span>{post.disliked} disliked</span><span>{post.saved ? 'Saved image' : 'Not saved'}</span></div>
          </div>
        </article>)}</div>
      </section>

      <section className="video-section"><div className="section-heading"><div><p className="eyebrow">The impossible player</p><h2>Video controls with second thoughts.</h2></div><span className="action-count">local media demo</span></div>
        <article className={`video-card video-${videoSize}`} style={{ width: videoSize === 'small' ? '52%' : '100%', marginInline: videoSize === 'small' ? 'auto' : '0' }}>
          <div className="video-frame"><video ref={videoRef} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" aria-label="A flower video demonstration" controls={false} /><div className="video-overlay"><span>CHAOS PLAYER</span><strong>Every control does the other thing.</strong></div></div>
          <div className="video-controls">
            <button onClick={() => toggleVideoPlayback('start')} aria-label="Start video">▶ Start</button>
            <button onClick={() => toggleVideoPlayback('pause')} aria-label="Pause video">❚❚ Pause</button>
            <button onClick={() => handleVideoAction('backward')} aria-label="Go backward 10 seconds">↶ 10</button>
            <button onClick={() => handleVideoAction('forward')} aria-label="Go forward 10 seconds">↷ 10</button>
            <label className="volume-control">Volume <input type="range" min="0" max="100" value={videoVolume} onChange={(event) => { const displayed = Number(event.target.value); setVideoVolume(displayed); if (videoRef.current) videoRef.current.volume = (100 - displayed) / 100; setVideoFeedback(`Volume increased to ${displayed}% → actual volume decreased to ${100 - displayed}%.`); }} /></label>
            <button onClick={() => handleVideoAction('fullscreen')} aria-label="Make video fullscreen">⛶ Fullscreen</button>
            <button onClick={() => handleVideoAction('mini')} aria-label="Make video mini player">▣ Mini</button>
          </div>
          <div className="video-feedback" role="status"><span className="notification-pulse" />{videoFeedback}<small>{videoSize === 'small' ? 'SMALL PLAYER' : 'FULL-SIZE PLAYER'} · Displayed volume: {videoVolume}% · Actual volume: {100 - videoVolume}%</small></div>
        </article>
      </section>

      <section className="chaos-lab" id="chaos-lab"><div className="section-heading"><div><p className="eyebrow">New experiments</p><h2>More buttons. Fewer guarantees.</h2></div><span className="action-count">local only</span></div>
        <div className="lab-grid">
          <article className="lab-card"><h3>Identity crisis</h3><button className="lab-primary" onClick={() => { setIdentityIndex((value) => (value + 1) % identityNames.length); setName(identityNames[(identityIndex + 1) % identityNames.length]); react('action', 'Name changed. Avatar and bio stayed the same.'); }}>{name}</button><p>Click the name to cycle identities.</p></article>
          <article className="lab-card"><h3>Authentication</h3><button className="lab-primary" onClick={() => { setSessionActive((value) => !value); react('action', sessionActive ? 'Logged out successfully. Session remains active.' : 'Logged in successfully. Session is now inactive.'); }}>{sessionActive ? 'Log out' : 'Log in'}</button><p>Session state: <strong>{sessionActive ? 'Active' : 'Inactive'}</strong></p></article>
          <article className="lab-card lab-wide"><h3>Search for someone</h3><div className="lab-inline"><input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Try Alex Morgan" /><button className="lab-primary" onClick={runSearch}>Search</button></div><p>Result: <strong>{searchResult || 'Nothing searched yet.'}</strong></p></article>
          <article className="lab-card"><h3>Notification time machine</h3><button className="lab-primary" onClick={cycleNotificationTime}>Timestamp: {notificationTimes[notificationTime]}</button><p>The event never changes.</p></article>
          <article className="lab-card"><h3>Chaos score</h3><div className="lab-score">{chaosScore}%</div><p>More interactions may make it worse.</p></article>
          <article className="lab-card lab-wide"><h3>Betrayal loader</h3><div className="lab-loader"><i style={{ width: `${loadingProgress}%` }} /></div><div className="lab-inline"><span>{loadingProgress}% · {loadingMessage}</span><button className="lab-primary" onClick={startLoading}>Start loading</button></div></article>
          <article className="lab-card lab-wide"><h3>HELPER.exe</h3><div className="assistant-reply">{assistantReply}</div><div className="lab-inline"><input value={assistantInput} onChange={(event) => setAssistantInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && askAssistant()} placeholder="Ask an unhelpful question" /><button className="lab-primary" onClick={askAssistant}>Ask</button></div></article>
          <article className="lab-card lab-wide"><h3>Interaction history</h3>{history.length ? <ul className="history-list">{history.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul> : <p>No chaos recorded yet.</p>}</article>
        </div>
      </section>

      <footer>Every reaction is local, reversible, and just a little bit suspicious.</footer>
      {toast && <div className="toast" role="status">{toast}</div>}
      {editorOpen && <div className="modal-backdrop"><section className="editor-modal" role="dialog" aria-modal="true" aria-labelledby="editor-title"><button className="modal-close" aria-label="Close editor" onClick={() => { setEditorOpen(false); react('modal'); }}>×</button><p className="eyebrow">Definitely not a name editor</p><h2 id="editor-title">Bio editor</h2><textarea value={bioDraft} onChange={(event) => setBioDraft(event.target.value)} /><button className="primary-button" onClick={saveBio}>Save bio <span>↗</span></button></section></div>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
