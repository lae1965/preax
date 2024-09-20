import { useEffect, useState } from 'react'

export const useIsPressEnter = (): boolean => {
	const [keyDown, setKeyDown] = useState<boolean>(false)

	const handleKeyDown = (e: KeyboardEvent) => {
		setKeyDown(e.key === 'Enter' && (e.altKey || e.metaKey))
	}

	useEffect(() => {
		addEventListener('keydown', handleKeyDown)
		return () => removeEventListener('keydown', handleKeyDown)
	}, [])

	return keyDown
}
