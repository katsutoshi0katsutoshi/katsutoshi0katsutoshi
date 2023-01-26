import Link from 'next/link'
export default function MainNav(){

  

return(
<>
<section className='bg-black bg-opacity-70 z-20 fixed top-0 right-0 text-white h-screen px-4 py-4 border-l border-white border-solid'>
    <ul>
      <li className='p-2'><Link href={`/about/`}>about</Link></li>
      <li className='p-2'><Link href={`/blog/`}>blog</Link></li>
      <li className='p-2'><Link href={`/contact/`}>contact</Link></li>
    </ul>
  </section>
  </>
)
  }