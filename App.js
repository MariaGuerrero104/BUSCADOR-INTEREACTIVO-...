import Card from './components/Card'
import SearchInput from './components/SearchInput'

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">
        BUSCADOR DE USUARIOS
      </h1>
      <SearchInput />
      <Card />
    </div>
  )
}
