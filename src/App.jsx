import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Emanuel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsa. Quasi veritatis sed soluta minus quibusdam ratione quae, dolorum assumenda fugiat tenetur, impedit atque beatae alias, quidem odio officia necessitatibus."
          />
          <Post
            author="Kelly"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}


