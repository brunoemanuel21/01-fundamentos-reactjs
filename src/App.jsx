import { Post } from './Post';
import { Header } from './components/Header';
import './global.css'; 

import styles from './App.modules.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles}></div>
    </div>
  )
}


