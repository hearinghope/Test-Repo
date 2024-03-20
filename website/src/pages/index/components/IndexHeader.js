import styles from '../styles/index.module.css';
import swiper from 'swiper';

const IndexHeader = () => {
  return (
    <section className={styles.slidersection} style={{marginTop: '70px'}}>
      <swiper/>
    </section>
  )
}

export default IndexHeader;