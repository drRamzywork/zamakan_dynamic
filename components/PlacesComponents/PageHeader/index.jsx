import React from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material'


const PageHeader = () => {
  return (
    <div id='page-header' className={styles.page_header}>
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