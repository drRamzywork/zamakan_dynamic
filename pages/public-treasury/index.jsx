import { imgs } from '@/assets/constants'
import { PageFooter, PageHeader, PageSection } from '@/components/PublicTreasuryComponents';
import { Container, Typography } from '@mui/material';
import React from 'react'

const PublicTreasury = () => {
  const { star, redBird, BrownDeer, place1 } = imgs;

  const sections = [
    {
      key: 'التوثيق المكاني',
      data: [
        { id: 1, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 1, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 1, title: "الشاعر طرفة بن العبد", img: place1.src },
      ]
    },
    {
      key: 'التوثيق البصري',
      data: [
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
        { id: 2, title: "الشاعر طرفة بن العبد", img: place1.src },
      ]
    },
    {
      key: 'من أبيات الشعراء',
      data: [
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
        {
          id: 3, title: "الشاعر امرؤ القيس", img: place1.src
        },
      ]
    },
  ];

  console.log(sections)

  return (
    <>

      <Container maxWidth={false} >
        <div id='PublicTreasury'>
          <PageHeader />
          {sections.map((section, index) => (
            <PageSection key={index} title={section.key} data={section.data} />
          ))}
        </div >
      </Container>
      <PageFooter />

    </>

  )
}

export default PublicTreasury