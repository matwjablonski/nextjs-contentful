import { useRouter } from "next/router";
import Link from 'next/link'

const Breadcrumbs = () => {
    const { pathname } = useRouter();

    const getPath = () => pathname.split('/')[1];

    return <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li>Home</li>
            <li>
                <Link href={getPath()}>
                    <a>{getPath().toUpperCase()}</a>
                </Link>
            </li>
        </ul>
    </nav>
}

export default Breadcrumbs;