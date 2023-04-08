import ThemeButton from './Button'

export default function Header() {
  return (
    <header className="bg-primary-color">
      <div className="mx-5 sm:mx-10 py-6 flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">CodeLeap Network</h1>

        <ThemeButton />
      </div>
    </header>
  )
}
