import { CartItemType } from '../App'


type props = {
    item: CartItemType,
    addTocart: (clickedItem: CartItemType) => void,
    removeFromCart: (id: number) => void;
}
export default function CartItem({ item, addTocart, removeFromCart }: props) {
    return (
        <div>
            <div className="card" style={{ width: "18rem"}}>
                <img src={item.image} alt={item.title} style={{height:'200px'}} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="card-text" style={{ width: "18rem"}}> Price: {`\u20B9`} {item.price}</p>
                                 <p className="card-text"> Total : {`\u20B9`} {item.amount * item.price} </p>
                            </div>
                            <div className="col">
                            <button className='btn btn-primary' onClick={() => removeFromCart(item.id)} > - </button>
                            </div>
                            <div className="col">
                            <button className='btn btn-primary' onClick={() => addTocart(item)}>+</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <h3>{item.title}</h3>
        <div>
            <p>Price: {`\u20B9`} {item.price} </p>
            <p>Total : {`\u20B9`} {item.amount * item.price} </p>
        </div>
        <div >
            <Button size='small' disableElevation variant='contained' onClick={()=> removeFromCart(item.id)} > - </Button>
        </div>
        <p >{item.amount}</p>
        <div >
            <Button size='small' disableElevation variant='contained' onClick={()=> addTocart(item)}>+ </Button>
        </div>
        <img src={item.image} alt={item.title} style={{width:"200px"}} /> */}
        </div>
    )
}
