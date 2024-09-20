import { Theme } from '../../model/slices/themesSlice'
import { ThemeItem } from '..'

import styles from './ThemeList.module.css'

interface ThemeListProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  themes: Theme[]
  selectedThemes: (Theme | null)[]
}

export function ThemeList({ themes, selectedThemes, ...props }: ThemeListProps) {
  return (
    <ul className={styles.themesList} {...props}>
      {themes.map(theme => (
        <ThemeItem
          key={theme.id}
          theme={theme}
          isSelected={selectedThemes.some(selectedTheme => selectedTheme?.id === theme.id)}
        />
      ))}
    </ul>
  )
}
