import { useRouter } from "next/router"

function DetailsPage ()  {
        const router= useRouter()
       const newsId=router.query.detailsID  
        return (
          <div>DetailsPage {newsId}</div>
        )
      }
      
      export default DetailsPage