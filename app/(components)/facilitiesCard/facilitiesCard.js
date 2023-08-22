import React from 'react'

export default function fasilitiesCard(props) {
  return (
    <div class="facilities-col">
                <img src={props.src} alt=""/>
                <h3>{props.heading}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
  )
}
