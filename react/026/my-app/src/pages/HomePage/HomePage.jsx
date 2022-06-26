import { data } from '../../asset/data/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'
import { useState, useEffect, useContext } from 'react';

export default function HomePage() {
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    if(loadData === undefined){
return;
    }
    else{
      console.log(loadData);
    }

  }, [loadData]);

 useContext(data).then( d => setLoadData(d));

  return (
    <main className="product">
        <ul className="product-list">
        {loadData !== undefined ?
          loadData.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
        )
        :
        <h2>error</h2>
          }
        </ul>
        <a className='link-btn cart-link' href='#'></a>
    </main>
  )
}
