import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const formatUserName = (userName) => `@${userName}`;

    const users = [
        {
          userName: 'midudev',
          name: 'Miguel Ángel Durán',
          isFollowing: true,
          formatUserName: formatUserName
        },
        {
          userName: 'pheralb',
          name: 'Pablo H.',
          isFollowing: false,
          formatUserName: formatUserName
        },
        {
          userName: 'PacoHdezs',
          name: 'Paco Hdez',
          isFollowing: true,
          formatUserName: formatUserName
        },
        {
          userName: 'TMChein',
          name: 'Tomas',
          isFollowing: false,
          formatUserName: formatUserName
        }
      ]

    return (
        <section className="App">
        {
            users.map(({ userName, name, isFollowing, formatUserName }) => (
            <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                formatUserName={formatUserName}
            >
                {name}
            </TwitterFollowCard>
            ))
        }
        </section>
    )
}