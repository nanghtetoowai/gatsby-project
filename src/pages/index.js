import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          className={styles.img}
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}
