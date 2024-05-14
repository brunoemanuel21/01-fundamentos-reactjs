import { Post } from './Post';

export function App() {
  return (
    <div>
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


