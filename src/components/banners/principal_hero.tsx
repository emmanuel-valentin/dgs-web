import { useRouter } from 'next/router';
import styles from './principal_hero.module.css';
import Image from 'next/image';
import dgsLogo from '../../../public/dgs-logo.png';
import Button from '../button/button';

export default function PrincipalHero() {
  const router = useRouter();

  return (
    <div className={`${styles.hero} flex flex-column align-items-center`}>
      <Image
        className={styles.logo}
        src={dgsLogo}
        alt="Logo de DGS Hirdráulica"
      />
      <h1 className={styles.title}>Manejo y control del líquido vital</h1>
      <div className={styles.row}>
        <Button variant="tiertary" onClick={() => router.push('/productos')}>
          Ver productos
        </Button>
        <Button variant="tiertary" onClick={() => router.push('/servicios')}>
          Ver servicios
        </Button>
      </div>
    </div>
  );
}