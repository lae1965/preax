import { useEffect } from 'react'

export const useKeysPress = (callback: () => void, condition: boolean = true) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!condition || event.repeat) {
        return
      }
      const isMetaPressed = event.getModifierState('Meta')
      const isAltPressed = event.getModifierState('Alt')
      if ((isMetaPressed || isAltPressed) && event.key === 'Enter') {
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, condition])
}
