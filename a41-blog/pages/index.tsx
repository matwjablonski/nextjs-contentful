import type { NextPage } from 'next'
import Hello from '../components/Hello'
import MainLayout from '../layouts/main'

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
      <h2 className="title">Zadanie nr 2</h2>
      <h3 className="subtitle">Nawigacja</h3>
      <p>Większość aplikacji potrzebuje nawigacji. Wykorzystując wiedzę na temat <em>next/link</em> oraz <em>next/router</em> przygotuj komponent nawigacji, który będzie tworzył menu naszej aplikacji. Umieść go w <em>layouts/main.tsx</em> - tak aby był dostępny dla całej aplikacji.</p>  
      <p>Drugim zadaniem jest dokończenie komponentu <em>Breadcrumbs</em> w taki sposób, aby na drugiej pozycji wyświetlał aktualną stronę. Pamiętaj, że obie pozycje powinny być linkami.</p>
      <h4>Wymagania</h4>
      <ul>
        <li>w <em>Breadcrumbs</em> użyj <em>useRouter</em> do pobrania aktualnej ścieżki</li>
      </ul>
      <h2 className="title">Zadanie nr 3</h2>
      <h3 className="subtitle">Contentful</h3>
      <p>Załóż konto na <em>contentful.com</em>. Przygotuj <em>Content Model</em> Article, który będzie zawierał</p>
      <ul>
        <li>tytuł (Text)</li>
        <li>slug (Text - Slug)</li>
        <li>autora (Text)</li>
        <li>zdjęcie (Asset)</li>
        <li>datę publikacji (Date)</li>
        <li>skrót treści (Text - Long)</li>
        <li>treść (Rich Text)</li>
      </ul>
      <h2 className="title">Zadanie nr 4</h2>
      <h3 className="subtitle">Integracja z Contentful</h3>
      <p>Wygeneruj klucze:</p>
      <ul>
        <li>Content Delivery API</li>
        <li>Content Preview API</li>
      </ul>
      <p>NextJS ma wbudowane wsparcie dla plików .env.local, a zatem możemy dodać do takiego pliku nasze wygenerowane klucze. W aplikacji pojawił się plik contentful.ts, który zawiera informacje o połączeniu z naszym CMSem. Twoim zadaniem jest wyciągnąć klucze ze zmiennych środowiskowych i przekazać je do parametrów funkcji createClient. Na widoku listy artykułów pobierz wszystkie artykuły z Contentfula wykorzystując technikę SSR.</p>
      <strong>UWAGA! Przeinstaluj node_modules. Został dodany nowy pakiet.</strong>
      <h2 className="title">Zadanie nr 5</h2>
      <h3 className="subtitle">Contentful + Next</h3>
      <p>Dodaj kilka przykładowych artykułów z różnymi datami utworzenia, dodaj przynajmniej jeden, który ma datę przyszłą.</p>
      <p>Na widoku listy artykułów wyświetl tylko te artykuły, których data jest przeszła względem dziś lub teraźniejsza.</p>
      <p>Na widoku listy wyświetl odfiltrowane artykuły wykorzystując wcześniej utworzony komponent <em>PostPreview</em>.</p>
      <h2 className="title">Zadanie nr 6</h2>
      <h3 className="subtitle">Contentful + Next (context)</h3>
      <p>Na widoku pojedynczego artykułu pobierz <em>slug</em> z contextu i na jego podstawie pobierz dane konkretnego artykułu. Przekaż je do widoku artykułu i wyświetl.</p>
      <p>Za pomocą CSS Modules dodaj kilka własnych reguł CSS (możesz też wykorzystać klasy css z bulma.io)</p>
      <h2 className="title">Zadanie nr 7</h2>
      <h3 className="subtitle">Rich text</h3>
      <p>Dodaj odpowiednie typy do komponentu <em>PostPreview</em></p>
      <p>W widoku pojedynczego artykułu wyświetl treść z pola typu RichText</p>
      <p>Przekształć wszystkie <em>p</em> w taki sposób, aby domyślnie przyjmowały klasę <em>is-size-3</em></p>
      <p>Przekształć cytowania tak, aby cytowany tekst był szary</p>
      <p>W Contentful dodaj zdjęcie do artykułu do pola content i wyświetl je na odpowiedniej stronie wykorzystując <em>next/image</em></p>
    </MainLayout>
  )
}

export default Home
