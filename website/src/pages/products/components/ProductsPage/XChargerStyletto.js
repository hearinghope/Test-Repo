import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/pages/WhatsAppButton';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './styles/productPages.module.css';

const KitActivePro = () => {
  return (
    <div>
    <Navbar/>
    <WhatsAppButton />
    <div className={styles.ProductPageContainer}>
    <div className={styles.Heading}>
      <h1 >Signia X Charger Styletto </h1>
    </div>
    <div className={styles.ProductImage}>
      <Image src='/Products/X Charger Styletto.png' alt='KitActivePro' width={500} height={400} /> 
    </div>
    <div className={styles.ProductDescription}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a neque eu ex pulvinar consectetur sed eu massa. Donec nulla justo, dictum vel varius nec, tempor vel lorem. Nulla ac tempor massa. Vivamus varius iaculis quam, non varius metus. Pellentesque metus nibh, sodales in lobortis eget, egestas ac elit. Praesent dapibus tortor eget velit malesuada malesuada quis vel arcu. Donec tristique erat dolor, in tincidunt purus ullamcorper sit amet. Mauris pharetra arcu sed orci congue, quis dictum ipsum pellentesque. Sed vitae leo ut sapien facilisis interdum. Duis finibus odio libero. Nam in venenatis lacus, a iaculis sem. Etiam convallis enim quis odio sollicitudin, eget rhoncus tellus pretium. Nulla dolor turpis, tincidunt porttitor lacus ac, pharetra vulputate arcu. Proin vitae facilisis elit, a ultrices enim. Sed viverra ut metus et molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br></br> <br>
      </br>

Ut ac vestibulum nibh. Maecenas at consequat magna. Integer vel mollis tortor, at feugiat sapien. Sed blandit nisl sit amet nisi viverra, id lacinia odio varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eget vehicula tortor. Morbi porta libero quis quam rutrum malesuada. Sed ac lectus quis neque volutpat finibus. In eu tempor erat. Vestibulum ultricies urna sem, sit amet sodales tellus rutrum eu. Etiam consequat hendrerit risus a porttitor.<br></br> <br></br>

Nulla dictum odio ex, in iaculis orci finibus non. Nunc augue orci, mollis vitae dignissim eget, porta at urna. Praesent elit lectus, convallis sagittis volutpat et, porta at lacus. Integer eu tincidunt urna. Sed vel dapibus est. Cras vel mi eget libero fringilla venenatis posuere ultrices tortor. Pellentesque vitae orci metus. Curabitur tincidunt bibendum arcu sit amet viverra. Fusce odio lorem, consectetur sed eros non, tristique porta elit.


<br>

</br>

Integer ut rutrum augue. Ut in justo non massa fermentum egestas nec at ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum faucibus enim nec suscipit. Nullam placerat finibus mi rhoncus varius. Sed fermentum purus sed elit gravida feugiat. Praesent mattis eros quis nisi efficitur molestie. Ut dictum hendrerit nisl a laoreet. Maecenas aliquet eros sit amet laoreet vestibulum. Quisque eu nibh nec nibh malesuada auctor vel nec odio.
      </p>
    </div>
    </div>
    <Footer></Footer>

    </div>
  );
};

export default KitActivePro;
