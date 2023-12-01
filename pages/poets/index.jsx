import { Container, FormControl, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './index.module.scss'
import { styled } from '@mui/system';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SliderVerses from '../../components/PoetDetails/SliderVerses'
import { Search } from '@/assets/svgsComponents';

const Poets = () => {
  const [age, setAge] = useState('all_ages');
  const [city, setCity] = useState('all_cities');

  const handleChange = (event) => {
    // setAge(event.target.value);
    // setCity(event.target.value)
  };
  const selectBoxStyles = {
    m: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '10px 16px',
    width: '199px',
    height: '47px',
    borderRadius: '30px',
    marginRight: '0 !important',
    '@media (max-width: 600px)': {
      width: '140px',
      marginTop: '0',
      padding: '10px',
      paddingRight: '26px',
    },
    '@media (max-width: 450px)': {
      width: '100%',
    },


    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2', // or any other color you want
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E6F2', // or any other color you want
    },


    '.MuiSelect-select': {
      display: 'flex',
      flexDirection: 'row-reverse',
      outline: 'none !important',
      justifyContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0px',
      width: '167px',
      height: '27px',
      paddingRight: '0px !important',


    },
    '#demo-select-small': {
      color: 'var(--main-blue-color)',
      fontFamily: 'var(--effra-font)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
    },


  }

  const CustomArrowIcon = styled(MdOutlineKeyboardArrowDown)({
    width: '25px',
    height: '25px',
    right: '82% !important',
    top: '19% !important',
    color: ' #11292F',
  });
  return (
    <section id='poets' className='poets'>
      <Container sx={{ maxWidth: "1400px" }} maxWidth={false}>

        <div className={styles.tabContent_container} dir='rtl'>
          <section className={styles.timelineSection}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>الشعراء</Typography>
            </div>
            <div className={styles.slider_container}>
              <div className={styles.filter_sec}>
                <div className={styles.shows}>
                  <Typography dir='ltr'>
                    <span>18</span> يتم عرض <span>10</span> من
                  </Typography>
                </div>
                <div className={styles.filter_methods}>
                  <div className={styles.box}>
                    <div className={styles.form_container}>
                      <input type="text" placeholder='ابحث بإسم الشاعر..' />
                      <div className={styles.icon_container}>
                        <Search />
                      </div>
                    </div>

                  </div>
                  <div className={styles.box}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        defaultValue='كل العصور'
                        sx={selectBoxStyles}
                        onChange={handleChange}
                        IconComponent={CustomArrowIcon}

                      >
                        <MenuItem value="all_ages">كل العصور</MenuItem>
                        <MenuItem value={10}>كل العصور</MenuItem>
                        <MenuItem value={20}>كل العصور</MenuItem>
                        <MenuItem value={30}>كل العصور</MenuItem>
                      </Select>
                    </FormControl>


                  </div>

                </div>

              </div>
              <div className="slider">
                <SliderVerses />
              </div>
            </div>
          </section>



        </div >
      </Container >

    </section >
  )
}

export default Poets
