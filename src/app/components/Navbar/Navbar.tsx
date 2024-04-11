import styles from "./Navbar.module.css"; // CSS 파일 import
import Link from "next/link";
import Image from "next/image";
// import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/assets/DDoS.jpg" alt="로고" width={80} height={80} />
        </Link>
      </h1>

      <ul className={styles.liInline}>
        <li className={styles.dropdownWrapper}>
          자료실
          <div className={styles.dropdownMenu}>
            {/* 드롭다운 메뉴 */}
            <ul>
              <li>
                <Link href="#" className={styles.link}>
                  다운로드
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  툴사용법
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={styles.dropdownWrapper}>
          고객지원
          <div className={styles.dropdownMenu}>
            {/* 드롭다운 메뉴 */}
            <ul>
              <li>
                <Link href="#" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={styles.dropdownWrapper}>
          게시판
          <div className={styles.dropdownMenu}>
            {/* 드롭다운 메뉴 */}
            <ul>
              <li>
                <Link href="#" className={styles.link}>
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  보안뉴스
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* <input className={styles.input} type="text" />
        <button className={styles.button}>
          <FaSearch size={26} />
        </button> */}
      </ul>
      <h3 className={styles.user}>
        <Link href="#" className={styles.p}>
          로그인
        </Link>
        <b className={styles.b}>/</b>
        <Link href="/mypage" className={styles.p}>
          회원가입
        </Link>
      </h3>
    </nav>
  );
}
