import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.globe.min";
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

          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 200.00,
          // minWidth: 200.00

          // mouseControls: true,
          // touchControls: true,
          // gyroControls: false,
          // minHeight: 200.00,
          // minWidth: 200.00,
          // waveSpeed: 10,
          // shininess: 50,
          // scale: 1.00,
          // scaleMobile: 1.00,

          
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xD73865,
  color2: 0xf7f3ea,
  backgroundColor: 0x19181b
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



