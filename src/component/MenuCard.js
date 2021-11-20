import React from 'react'

const MenuCard = ({MenuCards}) => {
    return (
        <>

      
 <div className="card-container m-3">
    <div className="row ">
    
    { MenuCards.map((cur)=>{
        return(
        <>
        
           <div class="card" >
            <div class="card-body">
                <span className="text-center p-2 ">{cur.id}</span>
                <span className="text-center ">{cur.name}</span>
                    <h5 class="card-title text-center">{cur.catagory}</h5>
                    <p class="card-text">{cur.description}</p>
            
                
                    <img src={cur.image} class="card-img-top"  alt="..." />
                
                
                <button type="button" class="btn btn-danger m-2 m-3">Order Now</button>
                <span className="text-end m-2">{cur.price}</span>
              </div>
        </div>
        </>)}
        )}
        
        </div>   
</div>
  
                  
    </>

    )
}

export default MenuCard
