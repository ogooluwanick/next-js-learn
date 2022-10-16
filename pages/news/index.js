import Link from "next/link"

function NewsPage ()  {
        return (
                <>
                        <div>NewsPage</div>
                        <ul>
                                <li><Link href="/news/next_great">Next is great</Link></li>
                                <li><Link href="/news/react_greater">React is greater</Link></li>
                        </ul>
                </>
        )
      }
      
      export default NewsPage