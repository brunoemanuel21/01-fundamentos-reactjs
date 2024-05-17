import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
       author="Bruno Emanuel"
       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsa. Quasi veritatis sed soluta minus quibusdam ratione quae, dolorum assumenda fugiat tenetur, impedit atque beatae alias, quidem odio officia necessitatibus."
      />
      <Post 
        author= "Kelly"
        content="Um novo post muito legal"
      />
    </div>
  )
}


