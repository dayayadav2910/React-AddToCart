import React from 'react'
type urlprops  = {
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    amount : number

}
export default function ProductItems( {title,price,description,image,category,amount} :urlprops ) {
  return (
                <div className="card" style={{width: "18rem"}}>
                    <img style={{height:'200px'}} src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <h5 className="card-title">{description} </h5>
                        <h5 className="card-title">{category} </h5>
                        <h5 className="card-title">{price} </h5>
                        <h5 className="card-title">{amount} </h5>
                    </div>
                </div>
  )
}
