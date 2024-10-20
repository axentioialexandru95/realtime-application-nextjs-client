import useSWR from 'swr'
import axios from '@/lib/axios'

const fetcher = url => axios.get(url).then(res => res.data)
export const useGames = () => {
    const { data, error, isLoading } = useSWR('/api/games', fetcher)

    const handleJoinGame = (gameId) => {
        axios.post(`/api/games/${gameId}/join`)
    }

    const handleLeaveGame = (gameId) => {
        axios.post(`/api/games/${gameId}/leave`)
    }

    return {
        games: data,
        error,
        isLoading,
        handleJoinGame,
        handleLeaveGame
    }
}
