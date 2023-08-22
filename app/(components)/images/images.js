import React from 'react'
import Image from 'next/image'
export default function images(props) {
  return (
  <>
   <Image src={props.src} />
  </>
  )
}
