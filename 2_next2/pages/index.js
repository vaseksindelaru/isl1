import MainLayout from "@/layouts/mainLayout"





export default function Home() {
  return(
  
    <h1>Home</h1>)
  
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
