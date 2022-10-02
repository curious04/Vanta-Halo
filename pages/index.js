import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../styles/hero-section.css";

export default function Home() {


  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          // color: 0x14b679,
          // backgroundColor: 0x15173c,
          // maxDistance: 34.0,
          // highlightColor: 0xed004d,
          // midtoneColor: 0x20b4c2,
          // lowlightColor: 0xffffff,
          // baseColor: 0xffffff
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);




  return (
    <div className={styles.container}>
      <Head>
        <title>Chains</title>

      </Head>

      <main className={styles.main} ref={vantaRef}>

      </main>

    </div>
  );
}



