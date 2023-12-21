import { Search } from '@/assets/svgsComponents'
import { Container } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { imgs } from '@/assets/constants'

const SearchPage = ({ poets }) => {
  const { Logo } = imgs
  console.log(poets, "search")
  return (
    <>
      <nav id='search' className={styles.search} dir='rtl'>
        <header>
          <Container maxWidth={false}>
            <div className={styles.nav_container}>
              <Link className={styles.logo} href={'/'}>
                <img src={Logo.src} alt="" />
              </Link>

              <div className={styles.input_container}>
                <div className={styles.icon_container}>
                  <Search />
                </div>
                <input type="text" placeholder='ابحث عن شعراء,عصور,اماكن' />

              </div>


            </div>


          </Container>
        </header>
      </nav>

      <section id='results' className='results'></section>
    </>
  )
}

export default SearchPage

export async function getServerSideProps(context) {
  const { searchString } = context.query;

  console.log(searchString, "here")


  try {
    const response = await axios.get(`https://api4z.suwa.io/api/Poets/GetAllPoets`, {
      params: {
        searchString: searchString,
        pagenum: 1,
        pagesize: 50
      }
    });

    return {
      props: {
        poets: response.data

      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        poets: []
      }
    };
  }
}
