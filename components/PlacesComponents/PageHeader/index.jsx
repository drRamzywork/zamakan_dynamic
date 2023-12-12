import React from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'
import { imgs } from '@/assets/constants'
import { useRouter } from 'next/router'


const PageHeader = () => {
  const { Central,
    Eastern,
    North,
    Northwest,
    South,
    Western,
  } = imgs
  const router = useRouter();
  console.log(router.query.id, "Router")
  return (
    <div id='page-header' className={styles.page_header}>
      <div className={styles.img_container}>

        {router.query.id === undefined &&
          <img src={Central.src} alt="" />
        }
        {router.query.id === "1" &&
          <img src={North.src} alt="" />
        }

        {router.query.id === "2" &&
          <img src={Northwest.src} alt="" />
        }

        {router.query.id === "3" &&
          <img src={Eastern.src} alt="" />
        }
        {router.query.id === "4" &&
          <img src={South.src} alt="" />
        }
        {router.query.id === "5" &&
          <img src={Central.src} alt="" />
        }
        {router.query.id === "6" &&
          <img src={Western.src} alt="" />
        }

      </div>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>
        <div className={styles.sec_title}>
          <Typography variant='h3'>
            مناطق المملكة
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default PageHeader