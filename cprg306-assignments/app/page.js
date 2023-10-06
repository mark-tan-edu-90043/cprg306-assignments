import Image from 'next/image'
import StudentInfo from './studentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <br />
      <Link href="/week2">Week 2</Link>
      <br />
      <Link href="/week3">Week 3</Link>
    </div>
  )
}
