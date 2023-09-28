import Image from 'next/image';
import Link from "next/link";

export default function StudentInfo() {
  return (
    <>
      <p>Name: Mark</p>
      <p>Course Section: CPRG-306 ?</p>
      <Link href="https://github.com/mark-tan-edu-90043/cprg306-assignments">[Github Link]</Link>
    </>
  )
}