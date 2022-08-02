import React from 'react';
import {useAppSelector} from "../hooks/redux";

export function FavoritesPage() {
    const {favorites} = useAppSelector(state => state.github)

    if (favorites.length === 0) return <p className="text-center bg-red-600">У вас нет Добавленых репов...</p>

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen text-center mt-2 ">
            <ul className="list-none">
                {favorites.map(f => (
                    <li key={f}>
                        <a href={f} target="_blank">{f}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

