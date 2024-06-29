import { useEffect, useState } from "react"

export const useFetch = (API_URL, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(API_URL, options)
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
  
        const result = await response.json()
  
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [API_URL])

  return {
    data,
    loading,
    error
  }
}