import { useEffect } from 'react'

/**
 * Utility to detect click outside a component
 */
const useOutsideAlerter = (
    ref: React.RefObject<HTMLDivElement>,
    callback: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event: { target: any } | MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}

export default useOutsideAlerter
