import { useTheme } from 'next-themes'
import Moon from '../svgs/Moon'
import Sun from '../svgs/Sun'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      title="Theme Button"
      type="button"
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="p-2 hover:scale-110 transition-all ease-in"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 stroke-white stroke-2" />
      ) : (
        <Sun className="w-6 h-6 stroke-white stroke-2" />
      )}
    </button>
  )
}

export default ThemeButton
