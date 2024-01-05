import { Products } from './api/product-api'
import Navbar from './components/navbar/navbar'
import Main from './components/discover-products/main'
import Footer from './components/footer/footer'

export default async function Home() {
const productData = await Products()
  return (
    <main className="flex min-h-screen flex-col">
     <Navbar/>
     <Main productData={productData} />
     <Footer/>
    </main>
  )
}
