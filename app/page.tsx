import Image from 'next/image';
import Link from "next/link";
import StudentInfo from './StudentInfo';

export default function Page() {
  return (
    <>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <br></br>
      <Link href="/week2">Week 2</Link>
    </>
  )
}