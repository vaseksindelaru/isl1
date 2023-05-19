import MainLayout from "@/layouts/gameLayout"





export default function Home() {
  return(
  
    <h1>HomePage</h1>)
  
}

Home.getLayout = function getLayout(page) {
return (
  <MainLayout>
    {page}
  </MainLayout>
)

}
/*export async function getServerSideProps(){
  try{
await conectardb()
  }catch(error) {
    console.log(error)
  }
}*/
