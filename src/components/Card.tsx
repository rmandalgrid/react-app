import React from 'react'

interface CardProps {
  bg: string;
  image: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ( {bg, image, description, price }) => {
  return (
    <div>
      <div className="product-card flex justify-center items-center gap-10">
          <div className="product-image relative">
            <img src={image} alt="product" className="w-full" />
            <img src={bg} className="absolute top-0 left-0 w-full opacity-100" />
            <div className="product-details text-gray-600 text-sm flex justify-between">
              <p className="desc w-[60%]">{description}</p>
              <p>${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
