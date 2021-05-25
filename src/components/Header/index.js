import Link from 'next/link';
import styles from './header.module.css';

const navItems = [
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/blog',
        label: 'Blog',
    }
];

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles['header-wrapper']}>
                <Link href='/'>
                    <a className={styles['header-logo']}>UP</a>
                </Link>

                <nav className={styles['header-nav']}>
                    {navItems.map(({ path, label }) => (
                        <Link key={path} href={path}>
                            <a className={styles['header-link']}>{label}</a>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;