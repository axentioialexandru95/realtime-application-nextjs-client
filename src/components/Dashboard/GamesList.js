'use client'

import { useGames } from "@/hooks/games"

const GamesList = () => {
    const { games, error, isLoading, handleJoinGame, handleLeaveGame } = useGames()
    return (
        <div className="p-6">

        <div className="font-bold text-2xl">Games</div>
        {isLoading ? (
            <p>Loading games...</p>
        ) : error ? (
            <p>Error loading games: {error.message}</p>
        ) : games && games.length > 0 ? (
            <ul>
                {games.map(game => (
                    <li className="py-6 flex justify-between " key={game.id}>
                        {game.name}
                        <div className="flex gap-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleJoinGame(game.id)}>Join Game</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLeaveGame(game.id)}>Leave Game</button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No games available</p>
        )}
        </div>

    )
}

export default GamesList