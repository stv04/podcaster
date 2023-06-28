import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import { Entry } from "../models/podcasts.model"

export default function PrincipalFilter({listaPrincipal, listaFiltrada, setPodcasts}:{listaPrincipal: Entry[], listaFiltrada: Entry[], setPodcasts: Dispatch<SetStateAction<Entry[]>>}) {
    const cantidad = listaFiltrada.length;

    const onHandleKeyup = (ev:BaseSyntheticEvent) => {
        const val = ev.target.value;
        if(val === "") return setPodcasts(listaPrincipal);

        const filtro = listaPrincipal.filter(p => {
            const presenteEnTitulo = p.title.label.toUpperCase().includes(val.toUpperCase());
            const presenteEnArtista = p["im:artist"].label?.toUpperCase().includes(val.toUpperCase());

            return presenteEnArtista || presenteEnTitulo;
        });

        setPodcasts(filtro);

    }

    return <div className="flex flex-row justify-end items-baseline my-5">
        <span className="mr-2 bg-cyan-600 px-2 rounded-md text-neutral-50">
            {cantidad}
        </span>
        <div className="mt-2">
            <input type="text" name="search" id="search" onKeyUp={onHandleKeyup}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

    </div>
}