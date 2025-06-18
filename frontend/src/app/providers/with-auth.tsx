import { useEffect, useState } from 'react'
import { useSetAtom } from 'jotai'
import { sessionAtom } from '@/entities/session/model/store'
import * as api from '@/shared/lib/axios'

export function withAuth<T extends object>(
  Component: React.ComponentType<T>,
): React.FC<T> {
  return (props: T) => {
    const setSession = useSetAtom(sessionAtom)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      api.session
        .me()
        .then((response) => setSession(response.data))
        .catch(() => setSession(null))
        .finally(() => setLoading(false))
    }, [setSession])

    console.log(loading)

    return <Component {...props} />
  }
}
