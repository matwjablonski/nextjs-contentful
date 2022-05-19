import type { NextPage } from 'next'
import Hello from '../components/Hello'
import MainLayout from '../layouts/main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hello>Witaj na blogu A41</Hello>
      <h2 className="title">Zadanie nr 1</h2>
      <h3 className="subtitle">Strony i komponenty</h3>
      <p>Każdy blog potrzebuje przynajmniej dwóch widoków: listy artykułów oraz strony z pojedynczym artykułem. Twoje zadanie polega na przygotowaniu obu stron (narazie bez logiki) oraz przygotowanie komponentu <em>PostPreview.</em></p>
      <h4>Wymagania:</h4>
      <ul>
        <li>strona z artykułem powinna być identyfikowana przez ścieżkę <em>/blog/$slug</em></li>
        <li>strona z widokiem listy powinna być dostępna pod ścieżką <em>blog</em></li>
        <li>komponent <em>PostPreview</em> powinien wyświetlić tytuł artykułu, datę powstania, skrót treści oraz autora</li>
      </ul>
      <p>W projekcie wykorzystywana jest <a href="https://bulma.io/documentation/" target="_blank">Bulma</a> jako CSS Framework. Możecie śmiało korzystać z jej klas, aby ostylować tworzone elementy.</p>
    </MainLayout>
  )
}

export default Home
